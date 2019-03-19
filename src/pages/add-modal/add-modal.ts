import { Component } from "@angular/core";
import { ViewController } from "ionic-angular";
import { Storage } from "@ionic/storage";

@Component({
  templateUrl: "add-modal.html"
})
export class AddModal {
  name: string;
  dateBirth: string;
  grade: number;
  zip: number;
  street: string;
  number: number;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  motherName: string;
  motherCPF: number;
  payDate: number;

  constructor(public viewCtrl: ViewController, private storage: Storage) {}

  async send() {
    const prev = await this.storage.get("students"); // get previous list of students

    const id = !!prev ? prev.length : 0; // if student list is empty set id to 0

    const student = {
      id,
      name: this.name,
      dateBirth: this.dateBirth,
      grade: this.grade,
      zip: this.zip,
      street: this.street,
      number: this.number,
      complement: this.complement,
      neighborhood: this.neighborhood,
      city: this.city,
      state: this.state,
      motherName: this.motherName,
      motherCPF: this.motherCPF,
      payDate: this.payDate
    };

    if (!prev) {
      await this.storage.set("students", [student]); // if student list is empty add array of list
    } else {
      await this.storage.set("students", [...prev, student]); // add new student to student list
    }

    this.viewCtrl.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
