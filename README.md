# trackBy and trackById directives

![build passing](https://raw.githubusercontent.com/PavelDymkov/ng-track-by/master/badges/build.svg)
![tests passing](https://raw.githubusercontent.com/PavelDymkov/ng-track-by/master/badges/tests.svg)
![license](https://raw.githubusercontent.com/PavelDymkov/ng-track-by/master/badges/license.svg)

> Library for set value of ngForTrackBy without adding any code to component using only template.

## Usage

Add directive(s) to module:

```ts
import { CommonModule } from "@angular/common";
import { TrackByModule, TrackByIdModule } from "ng-track-by";

@NgModule({
    imports: [CommonModule, TrackByModule, TrackByIdModule],
    declarations: [MyComponent],
})
export class MyComponentModule {}
```

Now you can use `trackBy` and `trackById`:

```html
<ul *ngFor="let user of users" trackBy="name">
    <li>{{ user.name }}</li>
</ul>

<ul *ngFor="let item of items" trackById>
    <li>{{ item.value }}</li>
</ul>
```

The `trackById` is alias for `trackBy="id"`.

The `trackBy` directive specifies key in item of collection according to which compute the identity of items.
