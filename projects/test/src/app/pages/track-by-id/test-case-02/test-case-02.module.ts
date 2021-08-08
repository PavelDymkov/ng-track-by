import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TrackByIdModule } from "ng-track-by";

import { TestComponentModule } from "../../../components/test-component/test-component.module";
import { TestCase02Component } from "./test-case-02.component";

@NgModule({
    imports: [
        CommonModule,
        TrackByIdModule,
        RouterModule.forChild([
            {
                path: "",
                component: TestCase02Component,
            },
        ]),
        TestComponentModule,
    ],
    declarations: [TestCase02Component],
})
export class TestCase02Module {}
