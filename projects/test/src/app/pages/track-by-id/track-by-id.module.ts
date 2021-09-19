import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: "",
                pathMatch: "full",
                redirectTo: "test-case-01",
            },
            {
                path: "test-case-01",
                loadChildren: () =>
                    import("./test-case-01/test-case-01.module").then(
                        (m) => m.TestCase01Module,
                    ),
            },
            {
                path: "test-case-02",
                loadChildren: () =>
                    import("./test-case-02/test-case-02.module").then(
                        (m) => m.TestCase02Module,
                    ),
            },
            {
                path: "test-case-03",
                loadChildren: () =>
                    import("./test-case-03/test-case-03.module").then(
                        (m) => m.TestCase03Module,
                    ),
            },
            {
                path: "test-case-04",
                loadChildren: () =>
                    import("./test-case-04/test-case-04.module").then(
                        (m) => m.TestCase04Module,
                    ),
            },
            {
                path: "test-case-05",
                loadChildren: () =>
                    import("./test-case-05/test-case-05.module").then(
                        (m) => m.TestCase05Module,
                    ),
            },
        ]),
    ],
})
export class TrackByIdModule {}
