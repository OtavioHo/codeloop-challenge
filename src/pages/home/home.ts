import { Component } from "@angular/core";
import { NavController, ModalController } from "ionic-angular";
import { Storage } from "@ionic/storage";

import { AddModal } from "../add-modal/add-modal";
import { StudentPage } from "../student/student";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  students: Array<Object>;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private storage: Storage
  ) {}

  async ionViewWillEnter() {
    this.students = await this.storage.get("students"); // get student list from storage
  }

  openAddModal() {
    const addModal = this.modalCtrl.create(AddModal);
    addModal.onDidDismiss(async () => {
      this.students = await this.storage.get("students"); // get student list afte modal is closed
    });
    addModal.present();
  }

  openStudent(student: any) {
    this.navCtrl.push(StudentPage, { student });
  }

  openEditModal(student: any) {
    const editModal = this.modalCtrl.create(AddModal, {
      student: student,
      edit: true
    });
    editModal.onDidDismiss(async () => {
      this.students = await this.storage.get("students"); // get student list afte modal is closed
    });
    editModal.present();
  }

  async delete(id: string) {
    await this.storage.set(
      "students",
      this.students.filter(s => s["id"] !== id)
    );
    this.students = await this.storage.get("students");
  }
}
