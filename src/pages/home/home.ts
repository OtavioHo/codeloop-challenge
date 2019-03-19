import { Component } from "@angular/core";
import { NavController, ModalController } from "ionic-angular";

import { AddModal } from "../add-modal/add-modal";
import { StudentPage } from "../student/student";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  students: Array<string>;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {
    this.students = ["otavio", "pedro", "rafael", "henrique"];
  }

  openAddModal() {
    let addModal = this.modalCtrl.create(AddModal);
    addModal.present();
  }

  openStudent() {
    this.navCtrl.push(StudentPage);
  }
}
