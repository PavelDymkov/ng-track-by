import {
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    Output,
} from "@angular/core";

@Component({
    selector: "test-component",
    template: `<div [attr.data-test]="name">{{ name }}</div>`,
})
export class TestComponent implements OnDestroy {
    @Input()
    name!: string;

    @Output()
    destroy = new EventEmitter<string>();

    ngOnDestroy(): void {
        this.destroy.emit(this.name);
    }
}
