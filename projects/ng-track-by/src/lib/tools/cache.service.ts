import { NgForOf } from "@angular/common";
import { Injectable } from "@angular/core";

@Injectable()
export class CacheService {
    private readonly cache = new Set<NgForOf<any, any>>();

    has(ngForOf: NgForOf<any, any>): boolean {
        return this.cache.has(ngForOf);
    }

    add(ngForOf: NgForOf<any, any>): void {
        this.cache.add(ngForOf);
    }

    delete(ngForOf: NgForOf<any, any>): void {
        this.cache.delete(ngForOf);
    }
}
