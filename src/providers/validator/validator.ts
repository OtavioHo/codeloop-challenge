import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";

/*
  Generated class for the ValidatorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ValidatorProvider {
  constructor(public http: HttpClient) {}

  cepValidator(control: FormControl) {
    const response = this.http.get(
      `https://viacep.com.br/ws/${control.value}/json/`
    );

    console.log(response);

    return new Promise(resolve => {
      response.subscribe(
        (data: Object) => {
          if (data.cep) resolve(null);
          else resolve({ erro: "CEP inválido" });
        },
        error => {
          resolve({ erro: "CEP inválido" });
        }
      );
    });
  }
}
