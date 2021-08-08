import { CommonModule, NgForOf } from "@angular/common";
import { NgModule, OnInit, TrackByFunction } from "@angular/core";
import { Directive, OnDestroy } from "@angular/core";
import { not } from "logical-not";

import { CacheService } from "./tools/cache.service";
import { changeTrackBy } from "./tools/change-track-by";

const trackById: TrackByFunction<{ id: any }> = (_, item) => {
    return item.id;
};

@Directive({
    selector: "[trackById]",
})
export class TrackByIdDirective implements OnInit, OnDestroy {
    constructor(
        private cacheService: CacheService,
        private ngForOf: NgForOf<any, any>,
    ) {}

    ngOnInit(): void {
        if (not(this.cacheService.has(this.ngForOf))) {
            this.cacheService.add(this.ngForOf);

            changeTrackBy(this.ngForOf, trackById, "id");
        }
    }

    ngOnDestroy(): void {
        this.cacheService.delete(this.ngForOf);
    }
}

@NgModule({
    imports: [CommonModule],
    exports: [TrackByIdDirective],
    declarations: [TrackByIdDirective],
    providers: [CacheService],
})
export class TrackByIdModule {}
