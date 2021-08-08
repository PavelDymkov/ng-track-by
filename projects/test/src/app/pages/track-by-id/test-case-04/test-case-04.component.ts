import { Component } from "@angular/core";

import { TestableComponent } from "../../../tools/testable-component";
import { itemsFrom } from "..//helpers/items-from";
import { Item } from "../helpers/item.interface";

@Component({
    selector: "test-case-04",
    templateUrl: "./test-case-04.component.html",
})
export class TestCase04Component extends TestableComponent {
    items: Item[] = itemsFrom([1, 2, 3]);

    updateItems(): void {
        this.items[1].id = 4;

        this.testComplete();
    }
}
