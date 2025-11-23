import { Page } from "@playwright/test";


const initialClassrooms = [
    {
        name: "B01",
        floor: -1,
        building: "851",
        zone: "Oriente",
        capacity: 101
    },
    {
        name: "B02",
        floor: -1,
        building: "851",
        zone: "Oriente",
        capacity: 101
    },
    {
        name: "B03",
        floor: -1,
        building: "851",
        zone: "Oriente",
        capacity: 101
    }
];

const loginWith = async (page: Page, username: string, password: string) => {
    await page.getByRole("button", { name: "Entrar" }).click();
    await page.getByLabel("Nombre de usuario").fill(username);
    await page.getByLabel("Contraseña").fill(password);
    await page.getByRole("button", { name: "Iniciar Sesión" }).click();
};

const clickElement = async (page: Page, destination: string) => {
    const button = await page.getByTestId(destination);
    await button.click();
};

// const createSearch = async (page: Page, content: string) => {
//     const commentField = page.getByRole("textbox", { name: /Comment/i }).first();
//     await commentField.waitFor({ state: "visible" });
//     await commentField.fill(content);

//         const nameField = page.getByLabel("Name (Optional)");
//         await nameField.waitFor({ state: "visible" });
//         await nameField.fill(author);


//     await page.getByRole("button", { name: "Post" }).first().click();
// };

// const createReply = async (page: Page, content: string, author?: string) => {
//     await page.getByRole("textbox", { name: /Comment/i }).nth(1).fill(content);
//     if (author) {
//         await page.getByRole("textbox", { name: /Name (Optional)/i }).nth(1).fill(author);
//     }
//     await page.locator("form").nth(1).getByRole("button", { name: "Post" }).click();
// };

export { initialClassrooms, loginWith, clickElement };
