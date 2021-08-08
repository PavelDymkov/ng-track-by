import { Item } from "./item.interface";

export function itemsFrom(source: number[]): Item[] {
    return source.map((id) => ({ id, name: String(id) }));
}
