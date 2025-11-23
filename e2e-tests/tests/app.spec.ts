import { test, expect, request } from "@playwright/test"

test.describe("U-salitas app", () => {
    test.beforeEach(async ({page, request}) => {
        await request.post("/api/testing/reset")
        await request.post("/api/users", {
            data: {
                name: "user_test",
                email: "user_test@uchile.cl",
                password: "password_test",
            }
        });

        await page.goto("/")
    });

    test("home", async ({page}) => {
        await expect(page.getByText("Mapa Beauchef")).toBeVisible();
    }) ;
})