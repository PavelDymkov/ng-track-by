const markedKey = Symbol();

export function marked(ngForOf: any): boolean {
    const marked = markedKey in ngForOf;

    ngForOf[markedKey] = undefined;

    return marked;
}
