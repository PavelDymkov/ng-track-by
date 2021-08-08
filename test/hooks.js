const puppeteer = require("puppeteer");
const io = require("puppeteer-io");

const { port } = require("./config");

globalThis.page = null;
globalThis.io = ({ input, output }) =>
    io({
        page: globalThis.page,
        input,
        output,
    });
globalThis.url = (path) => `http://localhost:${port}${path}`;
globalThis.testComponents = (...names) =>
    Promise.all(
        names.map((name) =>
            globalThis.page.waitForSelector(`[data-test="${name}"]`),
        ),
    );
globalThis.destroyedTestComponents = (...names) =>
    `Destroyed components: ${names.join(", ")}`;

let browser;

exports.mochaHooks = {
    async beforeAll() {
        browser = await puppeteer.launch();
    },

    async beforeEach() {
        page = await browser.newPage();
    },

    async afterEach() {
        await page.close();

        page = null;
    },

    async afterAll() {
        await browser.close();

        browser = null;
    },
};
