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
    const student = {
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

    const prev = await this.storage.get("students");
    console.log(prev);

    if (!prev) {
      await this.storage.set("students", [student]);
    } else {
      await this.storage.set("students", [...prev, student]);
    }

    this.viewCtrl.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
