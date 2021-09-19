import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TrackByIdModule } from "ng-track-by";

import { TestComponentModule } from "../../../components/test-component/test-component.module";
import { TestCase05Component } from "./test-case-05.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: "",
                component: TestCase05Component,
            },
        ]),
        TestComponentModule,
        TrackByIdModule,
    ],
    declarations: [TestCase05Component],
})
export class TestCase05Module {}
