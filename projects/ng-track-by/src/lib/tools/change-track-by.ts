import { NgForOf } from "@angular/common";
import { IterableChanges, TrackByFunction } from "@angular/core";

export function changeTrackBy(
    ngForOf: NgForOf<any, any>,
    trackBy: TrackByFunction<any>,
    property: string,
): void {
    ngForOf.ngForTrackBy = trackBy;

    patch(ngForOf, trackBy, property);
}

interface UnprivateNgForOf {
    _differ: UnpivateDefaultIterableDiffer;
}

interface UnpivateDefaultIterableDiffer {
    _linkedRecords: {
        map: Map<any, any>;
    };
    _trackByFn: Function;

    forEachItem: IterableChanges<any>["forEachItem"];
}

function patch(
    ngForOf: any,
    trackBy: TrackByFunction<any>,
    property: string,
): void {
    const differ = (ngForOf as UnprivateNgForOf)._differ;

    differ._trackByFn = trackBy;

    const linkedRecordsMap = differ._linkedRecords.map;

    differ.forEachItem((record) => {
        const trackById = record.item[property];

        linkedRecordsMap.set(trackById, linkedRecordsMap.get(record.trackById));
        linkedRecordsMap.delete(record.trackById);

        (record as any).trackById = record.item[property];
    });
}
