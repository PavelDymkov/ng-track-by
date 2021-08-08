import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TrackByIdModule } from "ng-track-by";

import { TestComponentModule } from "../../../components/test-component/test-component.module";
import { TestCase03Component } from "./test-case-03.component";

@NgModule({
    imports: [
        CommonModule,
        TrackByIdModule,
        RouterModule.forChild([
            {
                path: "",
                component: TestCase03Component,
            },
        ]),
        TestComponentModule,
    ],
    declarations: [TestCase03Component],
})
export class TestCase03Module {}
