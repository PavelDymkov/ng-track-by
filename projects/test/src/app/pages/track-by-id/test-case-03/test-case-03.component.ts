import { Component } from "@angular/core";

import { TestableComponent } from "../../../tools/testable-component";

interface Item {
    id: symbol;
    name: string;
}

@Component({
    selector: "test-case-03",
    templateUrl: "./test-case-03.component.html",
})
export class TestCase03Component extends TestableComponent {
    items: Item[] = [
        {
            id: Symbol(),
            name: "1",
        },
        {
            id: Symbol(),
            name: "2",
        },
        {
            id: Symbol(),
            name: "3",
        },
    ];

    updateItems(): void {
        this.items = this.items.map((item, i) => {
            if (i === 1) {
                return {
                    id: Symbol(),
                    name: "4",
                };
            }

            return { ...item };
        });

        this.testComplete();
    }
}
