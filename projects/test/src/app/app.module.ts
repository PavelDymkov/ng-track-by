import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

@Component({
    selector: "app-root",
    template: `<router-outlet></router-outlet>`,
})
export class AppComponent {}

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {
                path: "",
                pathMatch: "full",
                redirectTo: "track-by-id",
            },
            {
                path: "track-by",
                loadChildren: () =>
                    import("./pages/track-by/track-by.module").then(
                        (m) => m.TrackByModule,
                    ),
            },
            {
                path: "track-by-id",
                loadChildren: () =>
                    import("./pages/track-by-id/track-by-id.module").then(
                        (m) => m.TrackByIdModule,
                    ),
            },
        ]),
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
