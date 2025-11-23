import { test, expect, request } from "@playwright/test"
import { initialClassrooms, loginWith } from "./helper";

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

        // Crear salas secuencialmente para evitar race conditions
        for (const classroom of initialClassrooms) {
            const response = await request.post("/api/classrooms", { data: classroom });
            expect(response.ok()).toBeTruthy();
        }

        await page.goto("/");
    });

    test("home", async ({ page }) => {
        await expect(page.getByText("Mapa Beauchef")).toBeVisible();
    });

    test.describe("login flow", () => {
        test("is successful with correct credentials", async ({ page }) => {
            await page.screenshot({ path: "1.png" });
            await loginWith(page, "user_test", "password_test");

            await page.screenshot({ path: "2.png" });
            await page.waitForURL("/");
            await page.screenshot({ path: "3.png" });

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
            const searchInput = page.getByPlaceholder("Busca una sala");
            await searchInput.waitFor({ state: 'visible' });
            await searchInput.fill("B01");
            await expect(page.locator('.card-grid')).toBeVisible();
            await expect(page.locator('.card-grid')).toContainText('B01');
        });

        test("by name substring", async ({ page }) => {
            const searchInput = page.getByPlaceholder("Busca una sala");
            await searchInput.waitFor({ state: 'visible' });
            await searchInput.fill("B0");
            await expect(page.locator('.preview-classroom')).toHaveCount(3);
        });

        test("by non-existing name", async ({ page }) => {
            const searchInput = page.getByPlaceholder("Busca una sala");
            await searchInput.waitFor({ state: 'visible' });
            await searchInput.fill("QO");
            await expect(page.getByText("No se encontraron resultados")).toBeVisible();
        });

        test("by zone", async ({ page }) => {
            const searchInput = page.getByPlaceholder("Busca una sala");
            await searchInput.waitFor({ state: 'visible' });
            await searchInput.fill("oriente");
            await expect(page.locator('.preview-classroom')).toHaveCount(3);
        });

        test("by non-existing zone", async ({ page }) => {
            const searchInput = page.getByPlaceholder("Busca una sala");
            await searchInput.fill("norte");
            await expect(page.getByText("No se encontraron resultados")).toBeVisible();
        });

    });


    // se pueden buscar salas
    // con éxito
    // búsqueda vacía
    // ver info de la sala -> más información
    // se puede dar like/no dar cuando no está la sesión iniciada
})