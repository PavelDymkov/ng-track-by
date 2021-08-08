export class TestableComponent {
    private readonly destroyedTestComponents: string[] = [];

    onTestComponentDestroy(name: string): void {
        this.destroyedTestComponents.push(name);
    }

    testComplete(): void {
        setTimeout(() => {
            const names = this.destroyedTestComponents.join(", ");

            console.log(`Destroyed components: ${names}`);
        });
    }
}
