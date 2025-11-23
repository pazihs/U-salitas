import { Page } from "@playwright/test";

const loginWith = async (page: Page, username: string, password: string) => {
    await page.getByRole("button", { name: "Entrar" }).click();
    await page.getByLabel("Nombre de usuario").fill(username);
    await page.getByLabel("Contraseña").fill(password);
    await page.getByRole("button", { name: "Iniciar Sesión" }).click();
};

const createPost = async (page: Page, content: string, author?: string) => {
    const commentField = page.getByRole("textbox", { name: /Comment/i }).first();
    await commentField.waitFor({ state: "visible" });
    await commentField.fill(content);

    if (author) {
        const nameField = page.getByLabel("Name (Optional)");
        await nameField.waitFor({ state: "visible" });
        await nameField.fill(author);
    }

    await page.getByRole("button", { name: "Post" }).first().click();
};

const createReply = async (page: Page, content: string, author?: string) => {
    await page.getByRole("textbox", { name: /Comment/i }).nth(1).fill(content);
    if (author) {
        await page.getByRole("textbox", { name: /Name (Optional)/i }).nth(1).fill(author);
    }
    await page.locator("form").nth(1).getByRole("button", { name: "Post" }).click();
};

export { loginWith, createPost, createReply };
