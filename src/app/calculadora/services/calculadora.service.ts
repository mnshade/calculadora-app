import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  calcular(num1: number, num2: number, operacao: string):number{
    let result: number;

    switch(operacao){
      case(CalculadoraService.SOMA):
        result = num1 + num2;
      break;
      case(CalculadoraService.SUBTRACAO):
        result = num1 - num2;
      break;
      case(CalculadoraService.DIVISAO):
        result = num1 / num2;
      break;
      case(CalculadoraService.MULTIPLICACAO):
        result = num1 * num2;
      break;
      default:
        result = 0;
    }

    return result;
  }
}
