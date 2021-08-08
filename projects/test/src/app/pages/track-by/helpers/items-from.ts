import { Item } from "./item.interface";

export function itemsFrom(source: string[]): Item[] {
    return source.map((name) => ({ name }));
}
