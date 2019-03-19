import { Component } from "@angular/core";
import { ViewController } from "ionic-angular";

@Component({
  templateUrl: "add-modal.html"
})
export class AddModal {
  constructor(public viewCtrl: ViewController) {}

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
