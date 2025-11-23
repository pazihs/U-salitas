import { test, expect, request } from "@playwright/test"
import { clickElement, initialClassrooms, loginWith, search } from "./helper";

test.describe("U-salitas app", () => {
    test.beforeEach(async ({ page, request }) => {

        const resetResponse = await request.post("/api/testing/reset");
        expect(resetResponse.ok()).toBeTruthy();

        const userResponse = await request.post("/api/users", {
            data: {
                username: "user_test",
                email: "user_test@uchile.cl",
                password: "password_test",
            }
        });

        if (!userResponse.ok()) {
            const errorBody = await userResponse.text();
            console.error("Failed to create user:", userResponse.status(), errorBody);
        }
        expect(userResponse.ok()).toBeTruthy();

        for (const classroom of initialClassrooms) {
            const response = await request.post("/api/classrooms", { data: classroom });
            expect(response.ok()).toBeTruthy();
        }

        await page.goto("/");
    });

    test("home", async ({ page }) => {
        await expect(page.getByText("Mapa Beauchef")).toBeVisible();
    });

    test("create an account", async ({ page }) => {
        await page.getByRole("button", { name: "Entrar" }).click();
        await page.getByRole("button", { name: "Crear cuenta" }).click();

        await page.waitForURL("/register");
        await page.waitForTimeout(1000);

        // Usar un username único para evitar conflictos
        const uniqueUsername = `new_user_${Date.now()}`;
        await page.getByLabel("Nombre de usuario").fill(uniqueUsername);
        await page.getByLabel("Correo electrónico").fill(`${uniqueUsername}@uchile.cl`);
        await page.getByLabel("Contraseña").fill("newpassword");

        await clickElement(page, "register");

        await expect(page.getByRole("alert")).toContainText("Usuario creado correctamente");
    });

    test.describe("login flow", () => {
        test("is successful with correct credentials", async ({ page }) => {
            await loginWith(page, "user_test", "password_test");
            await page.waitForURL("/");

            // Verificar que está logueado
            await expect(page.getByRole("button", { name: "Cerrar sesión" })).toBeVisible();

            // Verificar que NO muestra el botón de Entrar
            await expect(page.getByRole("button", { name: "Entrar" })).not.toBeVisible();
        });

        test("fails with wrong credentials", async ({ page }) => {
            // Usuario existe pero password es incorrecto
            await loginWith(page, "user_test", "wrongpassword");

            await expect(
                page.getByText("Error al iniciar sesión: credenciales inválidas")
            ).toBeVisible();
            await expect(page).toHaveURL(/.*\/login/);
            await expect(page.getByText("Cerrar sesión")).not.toBeVisible();
        });

        test("fails with non-existent user", async ({ page }) => {
            // Intentar hacer login con un usuario que no existe
            await loginWith(page, "nonexistent", "password123");

            // Validar que no inició sesión
            await expect(
                page.getByText("Error al iniciar sesión: credenciales inválidas")
            ).toBeVisible();
            await expect(page).toHaveURL(/.*\/login/);
            await expect(page.getByText("Cerrar sesión")).not.toBeVisible();
        });
    });

    test.describe("logout flow", () => {
        test("is successful", async ({ page }) => {
            await loginWith(page, "user_test", "password_test");

            await page.waitForURL("/");

            // verificar que el botón Logout está visible
            await expect(page.getByRole("button", { name: "Cerrar sesión" })).toBeVisible();

            // Hacer click en el botón Logout
            await page.getByRole("button", { name: "Cerrar sesión" }).click();

            await page.waitForURL("/");
            await expect(page.getByRole("button", { name: "Entrar" })).toBeVisible();
        });
    });

    test.describe("searching for a classroom", () => {
        test("by name", async ({ page }) => {
            await search(page, "B01");
            await expect(page.locator('.card-grid')).toBeVisible();
            await expect(page.locator('.card-grid')).toContainText('B01');
        });

        test("by name substring", async ({ page }) => {
            await search(page, "B0");
            await expect(page.locator('.preview-classroom')).toHaveCount(3);
        });

        test("by non-existing name", async ({ page }) => {
            await search(page, "QO");
            await expect(page.getByText("No se encontraron resultados")).toBeVisible();
        });

        test("by zone", async ({ page }) => {
            await search(page, "oriente");
            await expect(page.locator('.preview-classroom')).toHaveCount(3);
        });

        test("by non-existing zone", async ({ page }) => {
            await search(page, "norte");
            await expect(page.getByText("No se encontraron resultados")).toBeVisible();
        });


        test("has a link that leads to classroom page", async ({ page }) => {
            await search(page, "B01");
            await expect(page.locator('.card-grid')).toBeVisible();
            await expect(page.locator('.card-grid')).toContainText('Más información');
            await expect(page.locator('.card-grid')).toContainText('B01');

            const link = page.getByRole("link", { name: "Más información" });
            await link.click();
            await expect(page.getByText("Sala B01")).toBeVisible();
            await expect(page.getByText("Vista interior")).toBeVisible();
            await expect(page.getByText("Vista exterior")).toBeVisible();
        });
    });

    test.describe("inside a classroom page", () => {
        test("liking can be done with session started and can't dislike when liked", async ({ page }) => {
            await loginWith(page, "user_test", "password_test");
            await page.waitForURL("/");

            await search(page, "B01");

            const link = page.getByRole("link", { name: "Más información" });
            await link.click();

            const likesText = await page.getByTestId("likes-count").textContent();
            const likesCount = parseInt(likesText || "0");

            await clickElement(page, "like-button");

            await expect(page.getByTestId("likes-count")).toHaveText((likesCount + 1).toString());

            await clickElement(page, "dislike-button");
            await expect(page.getByRole("alert")).toContainText("Ya diste like");

        });

        test("disliking can be done with session started and can't like when disliked", async ({ page }) => {
            await loginWith(page, "user_test", "password_test");
            await page.waitForURL("/");

            await search(page, "B01");

            const link = page.getByRole("link", { name: "Más información" });
            await link.click();

            const dislikesText = await page.getByTestId("dislikes-count").textContent();
            const dislikesCount = parseInt(dislikesText || "0");

            await clickElement(page, "dislike-button");

            await expect(page.getByTestId("dislikes-count")).toHaveText((dislikesCount + 1).toString());

            await clickElement(page, "like-button");
            await expect(page.getByRole("alert")).toContainText("Ya diste dislike");

        });

        test("liking and disliking can't be done without signing in", async ({ page }) => {
            await search(page, "B01");
            const link = page.getByRole("link", { name: "Más información" });
            await link.click();

            await clickElement(page, "like-button");
            await expect(page.getByRole("alert")).toContainText("Inicia sesión para dar like");

            // Esperar que desaparezca la alerta
            await expect(page.getByRole("alert")).not.toBeVisible({ timeout: 6000 });

            await clickElement(page, "dislike-button");
            await expect(page.getByRole("alert")).toContainText("Inicia sesión para dar dislike");
        });
    });
});