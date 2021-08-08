it("track-by/test-case-02", async () => {
    await io({
        async input() {
            await page.goto(url("/track-by/test-case-02"));
        },
        async output({ message }) {
            await await message("Ready");
        },
    });

    await io({
        async input() {
            await page.click("button#create");

            await testComponents(1, 2, 3);

            await page.click("button#update");
        },
        async output({ message }) {
            await message(destroyedTestComponents(2));
        },
    });
});
