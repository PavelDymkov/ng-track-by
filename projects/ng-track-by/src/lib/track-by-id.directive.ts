import { CommonModule, NgForOf } from "@angular/common";
import { NgModule, OnInit, TrackByFunction } from "@angular/core";
import { Directive } from "@angular/core";
import { not } from "logical-not";

import { changeTrackBy } from "./tools/change-track-by";
import { marked } from "./tools/marker";

const trackById: TrackByFunction<{ id: any }> = (_, item) => {
    return item.id;
};

@Directive({
    selector: "[trackById]",
})
export class TrackByIdDirective implements OnInit {
    constructor(private ngForOf: NgForOf<any, any>) {}

    ngOnInit(): void {
        if (not(marked(this.ngForOf)))
            changeTrackBy(this.ngForOf, trackById, "id");
    }
}

@NgModule({
    imports: [CommonModule],
    exports: [TrackByIdDirective],
    declarations: [TrackByIdDirective],
})
export class TrackByIdModule {}
