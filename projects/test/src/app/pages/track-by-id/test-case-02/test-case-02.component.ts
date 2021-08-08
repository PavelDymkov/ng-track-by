import { AfterViewInit, Component } from "@angular/core";

import { TestableComponent } from "../../../tools/testable-component";
import { Item } from "../helpers/item.interface";
import { itemsFrom } from "../helpers/items-from";

@Component({
    selector: "test-case-02",
    templateUrl: "./test-case-02.component.html",
})
export class TestCase02Component
    extends TestableComponent
    implements AfterViewInit
{
    items?: Item[];

    ngAfterViewInit(): void {
        console.log("Ready");
    }

    createItems(): void {
        this.items = itemsFrom([1, 2, 3]);
    }

    updateItems(): void {
        this.items = itemsFrom([1, 4, 3]);

        this.testComplete();
    }
}
