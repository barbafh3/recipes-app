import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  collapsed = true;
  page: string;
  @Output() headerCallback = new EventEmitter<string>();

  onPageSelected = page => {
    this.page = page;
    this.afterPageChange();
  };

  afterPageChange = () => {
    this.headerCallback.emit(this.page);
  };
}
