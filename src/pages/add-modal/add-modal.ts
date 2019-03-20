import { Component } from "@angular/core";
import { ViewController, NavParams } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ValidatorProvider } from "../../providers/validator/validator";

@Component({
  templateUrl: "add-modal.html"
})
export class AddModal {
  isEdit: Boolean;
  title: string;

  form: FormGroup;

  submitAttempt: Boolean;

  constructor(
    public viewCtrl: ViewController,
    private storage: Storage,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public validator: ValidatorProvider,
    public http: HttpClient
  ) {
    this.title = "Adicionar Aluno";
    this.submitAttempt = false;
    this.isEdit = navParams.get("edit");

    this.form = formBuilder.group({
      name: [
        "",
        Validators.compose([Validators.maxLength(100), Validators.required])
      ],
      dateBirth: ["", Validators.required],
      grade: ["", Validators.required],
      zip: ["", Validators.required, this.validator.cepValidator.bind(this)],
      street: ["", Validators.compose([Validators.maxLength(120)])],
      number: ["", Validators.pattern("^[0-9]")],
      complement: ["", Validators.maxLength(50)],
      neighborhood: ["", Validators.maxLength(100)],
      city: [""],
      state: [""],
      motherName: [
        "",
        Validators.compose([Validators.maxLength(100), Validators.required])
      ],
      motherCPF: ["", Validators.required],
      payDate: [""]
    });

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

      this.form.setValue({
        name: name || "",
        dateBirth: dateBirth || "",
        grade: grade || "",
        zip: zip || "",
        street: street || "",
        number: number || "",
        complement: complement || "",
        neighborhood: neighborhood || "",
        city: city || "",
        state: state || "",
        motherName: motherName || "",
        motherCPF: motherCPF || "",
        payDate: payDate || ""
      });
    }
  }

  async edit(prev) {
    const { id } = this.navParams.get("student");

    const student = { ...this.form.value, id };

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

  async create(prev) {
    const id = !!prev ? prev.length : 0; // if student list is empty set id to 0

    const student = { ...this.form.value, id };

    if (!prev) {
      await this.storage.set("students", [student]); // if student list is empty add array of list
    } else {
      await this.storage.set("students", [...prev, student]); // add new student to student list
    }

    this.viewCtrl.dismiss();
  }

  async send() {
    const prev = await this.storage.get("students"); // get previous list of students

    if (this.form.valid) {
      if (!this.isEdit) {
        // Create new student
        this.create(prev);
      } else {
        // Edit existent student
        this.edit(prev);
      }
    }

    this.submitAttempt = true;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
