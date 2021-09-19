it("track-by-id/test-case-05", async () => {
    await io({
        async input() {
            await page.goto(url("/track-by-id/test-case-05"));

            await testComponents(1, 2, 3);

            await page.click("button#step-1");
            await page.click("button#step-2");
        },
        async output({ message }) {
            await message(destroyedTestComponents(1, 2, 3, 4, 5, 6));
        },
    });
});
