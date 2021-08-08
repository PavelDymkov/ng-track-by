it("track-by-id/test-case-04", async () => {
    await io({
        async input() {
            await page.goto(url("/track-by-id/test-case-04"));

            await testComponents(1, 2, 3);

            await page.click("button");
        },
        async output({ message }) {
            await message(destroyedTestComponents(2));
        },
    });
});
