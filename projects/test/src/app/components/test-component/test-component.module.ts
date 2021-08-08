import { NgModule } from "@angular/core";

import { TestComponent } from "./test-component.component";

@NgModule({
    exports: [TestComponent],
    declarations: [TestComponent],
})
export class TestComponentModule {}
