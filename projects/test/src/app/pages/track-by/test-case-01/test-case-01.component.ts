import { Component } from "@angular/core";

import { TestableComponent } from "../../../tools/testable-component";
import { Item } from "../helpers/item.interface";
import { itemsFrom } from "../helpers/items-from";

@Component({
    selector: "test-case-01",
    templateUrl: "./test-case-01.component.html",
})
export class TestCase01Component extends TestableComponent {
    items: Item[] = itemsFrom(["1", "2", "3"]);

    updateItems(): void {
        this.items = itemsFrom(["1", "4", "3"]);

        this.testComplete();
    }
}
