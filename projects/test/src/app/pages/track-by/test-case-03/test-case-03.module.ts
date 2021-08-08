import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TrackByModule } from "ng-track-by";

import { TestComponentModule } from "../../../components/test-component/test-component.module";
import { TestCase03Component } from "./test-case-03.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: "",
                component: TestCase03Component,
            },
        ]),
        TestComponentModule,
        TrackByModule,
    ],
    declarations: [TestCase03Component],
})
export class TestCase03Module {}
