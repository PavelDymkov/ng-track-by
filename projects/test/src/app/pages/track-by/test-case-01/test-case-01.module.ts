import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TrackByModule } from "ng-track-by";

import { TestComponentModule } from "../../../components/test-component/test-component.module";
import { TestCase01Component } from "./test-case-01.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: "",
                component: TestCase01Component,
            },
        ]),
        TestComponentModule,
        TrackByModule,
    ],
    declarations: [TestCase01Component],
})
export class TestCase01Module {}
