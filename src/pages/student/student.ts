import { Component } from "@angular/core";
import { NavController, NavParams, ModalController } from "ionic-angular";

import { AddModal } from "../add-modal/add-modal";

@Component({
  templateUrl: "student.html"
})
export class StudentPage {
  student: Object;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {
    this.student = navParams.get("student");
  }

  openEditModal() {
    const editModal = this.modalCtrl.create(AddModal, {
      student: this.student,
      edit: true
    });
    editModal.onDidDismiss(student => {
      if (student) this.student = student;
    });
    editModal.present();
  }
}
