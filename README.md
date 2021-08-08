# trackBy and trackById directives

![build passing](https://raw.githubusercontent.com/PavelDymkov/ng-track-by/master/badges/build.svg)
![tests passing](https://raw.githubusercontent.com/PavelDymkov/ng-track-by/master/badges/tests.svg)
![license](https://raw.githubusercontent.com/PavelDymkov/ng-track-by/master/badges/license.svg)

> Library for set a value of the ngForTrackBy without adding any code to a component using only a template.

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

The `trackById` is an alias for `trackBy="id"`.

The `trackBy` directive specifies the key in item of a collection according to which compute the identity of items.
