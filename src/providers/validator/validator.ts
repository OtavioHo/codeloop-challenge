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
    return new Promise(resolve => {
      response.subscribe(
        data => {
          if (data["cep"]) resolve(null);
          else resolve({ erro: "CEP inválido" });
        },
        error => {
          resolve({ erro: "CEP inválido" });
        }
      );
    });
  }

  cpfValidator(control: FormControl) {
    //Verifica se CPF é válido
    let Soma;
    let Resto;
    Soma = 0;
    //strCPF  = RetiraCaracteresInvalidos(strCPF,11);
    if (control.value == "00000000000") return { erro: "CPF inválido" };
    for (let i = 1; i <= 9; i++)
      Soma = Soma + parseInt(control.value.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;
    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(control.value.substring(9, 10)))
      return { erro: "CPF inválido" };
    Soma = 0;
    for (let i = 1; i <= 10; i++)
      Soma = Soma + parseInt(control.value.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(control.value.substring(10, 11)))
      return { erro: "CPF inválido" };
    return null;
  }
}
