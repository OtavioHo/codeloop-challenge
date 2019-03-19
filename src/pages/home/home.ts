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

  async ngAfterViewInit() {
    this.students = await this.storage.get("students"); // get student list from storage
  }

  openAddModal() {
    const addModal = this.modalCtrl.create(AddModal);
    addModal.onDidDismiss(async () => {
      this.students = await this.storage.get("students"); // get student list afte modal is closed
    });
    addModal.present();
  }

  openStudent() {
    this.navCtrl.push(StudentPage);
  }
}
