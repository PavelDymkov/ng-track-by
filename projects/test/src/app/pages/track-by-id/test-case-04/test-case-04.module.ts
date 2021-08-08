import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TrackByIdModule } from "ng-track-by";

import { TestComponentModule } from "../../../components/test-component/test-component.module";
import { TestCase04Component } from "./test-case-04.component";

@NgModule({
    imports: [
        CommonModule,
        TrackByIdModule,
        RouterModule.forChild([
            {
                path: "",
                component: TestCase04Component,
            },
        ]),
        TestComponentModule,
    ],
    declarations: [TestCase04Component],
})
export class TestCase04Module {}
