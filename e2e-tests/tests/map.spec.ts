import { test, expect, request } from "@playwright/test";
import { initialClassrooms, loginWith, clickElement } from "./helper";

test.describe("map tests", () => {
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
    
    test("851 map shows correctly", async ({ page }) => {
        await clickElement(page, "851");

        await expect(page.getByText("851")).toBeVisible();
        await expect(page.getByText("EDIFICIO PONIENTE")).toBeVisible();
        await expect(page.getByText("EDIFICIO ORIENTE")).toBeVisible();
        await expect(page.getByText("EDIFICIO NORTE")).toBeVisible();
    });

    test("Clicking a zone should show a new map correctly", async ({ page }) => {
        await clickElement(page, "851");
        await clickElement(page, "-1");

        await expect(page.getByText("851 -1")).toBeVisible();
        await expect(page.getByText("PISCINA")).toBeVisible();
    });

    test("Clicking an available classroom should show it correctly", async ({ page }) => {
        await clickElement(page, "851");
        await clickElement(page, "-1");
        await clickElement(page, "B01");

        await expect(page.getByText("Sala B01")).toBeVisible();
        await expect(page.getByText("Vista interior")).toBeVisible();
        await expect(page.getByText("Vista exterior")).toBeVisible();
    });

    test("looking for a classroom in the map which is currently included", async ({ page }) => {
        await clickElement(page, "851");
        await clickElement(page, "-1");
        await clickElement(page, "piscina");

        await expect(page.getByText("¡Ups! Esta página aún no está terminada")).toBeVisible();
    });

    test("Pressing upArrow should change map correctly", async ({ page }) => {
        await clickElement(page, "851");
        await clickElement(page, "poniente");
        await clickElement(page, "up");
        
        await expect(page.getByText("SISTEMAS")).toBeVisible();
        await expect(page.getByText("PISO 3 PONIENTE")).toBeVisible();
    });

    test("Can't click downArrow when no floors below exist", async ({ page }) => {
        await clickElement(page, "851");

        await clickElement(page, "poniente");
        await expect(page.getByTestId("down")).toBeDisabled();
    });
    
    test("When clicking upArrow and downArrow afterwards should go back to where it began", async ({ page }) => {
        await clickElement(page, "851");
        await clickElement(page, "poniente");
        await expect(page.getByText("PISO 2 PONIENTE")).toBeVisible();

        await clickElement(page, "up");
        await expect(page.getByText("PISO 3 PONIENTE")).toBeVisible();

        await clickElement(page, "down");
        await expect(page.getByText("PISO 2 PONIENTE")).toBeVisible();
    });
});