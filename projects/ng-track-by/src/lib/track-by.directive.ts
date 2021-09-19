import { CommonModule, NgForOf } from "@angular/common";
import { Input, NgModule, OnInit, TrackByFunction } from "@angular/core";
import { Directive } from "@angular/core";
import { not } from "logical-not";

import { changeTrackBy } from "./tools/change-track-by";
import { marked } from "./tools/marker";

@Directive({
    selector: "[trackBy]",
})
export class TrackByDirective implements OnInit {
    @Input()
    trackBy!: string;

    constructor(private ngForOf: NgForOf<any, any>) {}

    ngOnInit(): void {
        if (not(marked(this.ngForOf)))
            changeTrackBy(this.ngForOf, this.createTrackByFn(), this.trackBy);
    }

    private createTrackByFn(): TrackByFunction<any> {
        const key = this.trackBy;

        return function (_, item) {
            return item[key];
        };
    }
}

@NgModule({
    imports: [CommonModule],
    exports: [TrackByDirective],
    declarations: [TrackByDirective],
})
export class TrackByModule {}
