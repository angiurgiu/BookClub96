import { Component } from '@angular/core';

@Component({
  selector: "the-books",
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
        Welcome to {{title}}!
      </h1>
    </div>
  `
})
export class AppComponent {
  title = "Book Club 96";
}
