import { Component } from "@angular/core";
import { ViewController, NavParams } from "ionic-angular";
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
  isEdit: Boolean;
  title: string;

  constructor(
    public viewCtrl: ViewController,
    private storage: Storage,
    public navParams: NavParams
  ) {
    this.title = "Adicionar Aluno";
    this.isEdit = navParams.get("edit");

    if (this.isEdit) {
      const {
        name,
        dateBirth,
        grade,
        zip,
        street,
        number,
        complement,
        neighborhood,
        city,
        state,
        motherName,
        motherCPF,
        payDate
      } = navParams.get("student");

      this.name = name;
      this.dateBirth = dateBirth;
      this.grade = grade;
      this.zip = zip;
      this.street = street;
      this.number = number;
      this.complement = complement;
      this.neighborhood = neighborhood;
      this.city = city;
      this.state = state;
      this.motherName = motherName;
      this.motherCPF = motherCPF;
      this.payDate = payDate;
      this.title = "Editar Aluno";
    }
  }

  async edit(prev, student) {
    const { id } = this.navParams.get("student");

    student.id = id; // set student id

    await this.storage.set(
      "students",
      prev.map(s => {
        //substitute old student for new
        if (s.id === id) {
          return student;
        }
        return s;
      })
    );

    this.viewCtrl.dismiss(student); // send new student back to student page
  }

  async create(prev, student) {
    const id = !!prev ? prev.length : 0; // if student list is empty set id to 0

    student.id = id;

    if (!prev) {
      await this.storage.set("students", [student]); // if student list is empty add array of list
    } else {
      await this.storage.set("students", [...prev, student]); // add new student to student list
    }

    this.viewCtrl.dismiss();
  }

  async send() {
    const prev = await this.storage.get("students"); // get previous list of students

    const student = {
      // Build student object
      id: null,
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

    if (!this.isEdit) {
      // Create new student
      this.create(prev, student);
    } else {
      // Edit existent student
      this.edit(prev, student);
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
