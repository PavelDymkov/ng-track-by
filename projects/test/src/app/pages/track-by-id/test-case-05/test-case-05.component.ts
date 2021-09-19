import { Component } from "@angular/core";

import { TestableComponent } from "../../../tools/testable-component";
import { itemsFrom } from "../helpers/items-from";
import { Item } from "../helpers/item.interface";

@Component({
    selector: "test-case-05",
    templateUrl: "./test-case-05.component.html",
})
export class TestCase05Component extends TestableComponent {
    items: Item[] = itemsFrom([1, 2, 3]);

    updateItems1(): void {
        this.items = itemsFrom([4, 5, 6]);
    }

    updateItems2(): void {
        this.items = itemsFrom([7, 8, 9]);

        this.testComplete();
    }
}
