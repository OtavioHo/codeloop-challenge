import { Component } from "@angular/core";
import { NavController, NavParams, ModalController } from "ionic-angular";
import { Storage } from "@ionic/storage";

import { AddModal } from "../add-modal/add-modal";

@Component({
  templateUrl: "student.html"
})
export class StudentPage {
  student: Object;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private storage: Storage
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

  async delete() {
    const prev = await this.storage.get("students");
    await this.storage.set(
      "students",
      prev.filter(s => s.id !== this.student["id"])
    );
    this.navCtrl.pop();
  }
}
