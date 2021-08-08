import { Component } from "@angular/core";

import { TestableComponent } from "../../../tools/testable-component";

interface ObjectId {
    x: string;
}

interface Item {
    objectId: ObjectId;
    name: string;
}

@Component({
    selector: "test-case-03",
    templateUrl: "./test-case-03.component.html",
})
export class TestCase03Component extends TestableComponent {
    items: Item[] = [
        {
            objectId: {
                x: "~",
            },
            name: "1",
        },
        {
            objectId: {
                x: "~",
            },
            name: "2",
        },
        {
            objectId: {
                x: "~",
            },
            name: "3",
        },
    ];

    updateItems(): void {
        this.items = this.items.map((item, i) => {
            if (i === 1) {
                return {
                    ...item,
                    objectId: { ...item.objectId },
                };
            }

            return { ...item };
        });

        this.testComplete();
    }
}
