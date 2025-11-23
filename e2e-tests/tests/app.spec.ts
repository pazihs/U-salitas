import { test, expect, request } from "@playwright/test"
import { loginWith } from "./helper";

test.describe("U-salitas app", () => {
    test.beforeEach(async ({ page, request }) => {
        await request.post("/api/testing/reset");
        await request.post("/api/users", {
            data: {
                username: "user_test",
                email: "user_test@uchile.cl",
                password: "password_test",
            }
        });

        await page.goto("/");
    });

    test("home", async ({ page }) => {
        await expect(page.getByText("Mapa Beauchef")).toBeVisible();
    });

    test.describe("login flow", () => {
        test("successful login flow", async ({ page }) => {
            await loginWith(page, "root", "password");

            await page.waitForURL("/");

            // Verificar que está logueado
            await expect(page.getByRole("button", { name: "Cerrar sesión" })).toBeVisible();

            // Verificar que NO muestra el botón de Entrar
            await expect(page.getByRole("button", { name: "Entrar" })).not.toBeVisible();
        });

        test("login fails with wrong credentials", async ({ page }) => {
            // Usuario existe pero password es incorrecto
            await loginWith(page, "root", "wrongpassword");

            await expect(
                page.getByText("Error al iniciar sesión: credenciales inválidas")
            ).toBeVisible();
            await expect(page).toHaveURL(/.*\/login/);
            await expect(page.getByText("Cerrar sesión")).not.toBeVisible();
        });

        test("login fails with non-existent user", async ({ page }) => {
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
        test("user can logout successfully", async ({ page }) => {
            await loginWith(page, "root", "password");

            await page.waitForURL("/");

            // verificar que el botón Logout está visible
            await expect(page.getByRole("button", { name: "Cerrar sesión" })).toBeVisible();

            // Hacer click en el botón Logout
            await page.getByRole("button", { name: "Cerrar sesión" }).click();

            await page.waitForURL("/");

            // Validar que cerró sesión correctamente
            await expect(page.getByRole("button", { name: "Entrar" })).toBeVisible();
        });
    });


    // se pueden buscar salas
        // con éxito
        // búsqueda vacía
    // ver info de la sala
    // se puede dar like
})