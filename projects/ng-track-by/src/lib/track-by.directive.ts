import { CommonModule, NgForOf } from "@angular/common";
import { Input, NgModule, OnInit, TrackByFunction } from "@angular/core";
import { Directive, OnDestroy } from "@angular/core";
import { not } from "logical-not";

import { CacheService } from "./tools/cache.service";
import { changeTrackBy } from "./tools/change-track-by";

@Directive({
    selector: "[trackBy]",
})
export class TrackByDirective implements OnInit, OnDestroy {
    @Input()
    trackBy!: string;

    constructor(
        private cacheService: CacheService,
        private ngForOf: NgForOf<any, any>,
    ) {}

    ngOnInit(): void {
        if (not(this.cacheService.has(this.ngForOf))) {
            this.cacheService.add(this.ngForOf);

            changeTrackBy(this.ngForOf, this.createTrackByFn(), this.trackBy);
        }
    }

    ngOnDestroy(): void {
        this.cacheService.delete(this.ngForOf);
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
    providers: [CacheService],
})
export class TrackByModule {}
