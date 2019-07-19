import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { GroupsModule } from './app/app.module';
import { MeetingsModule } from './app/app.module';
import { environment } from './environments/environment';
if (environment.production) {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(MeetingsModule)
    .catch(function (err) { return console.error(err); });
platformBrowserDynamic().bootstrapModule(GroupsModule)
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map