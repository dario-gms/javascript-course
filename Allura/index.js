import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.nome = "Alice";
cliente2.cpf = 88822233309;
cliente2.agencia = 1001;
cliente2.saldo = 0;

const contaCorrenteRicardo = new ContaCorrente();

contaCorrenteRicardo.saldo = 0
contaCorrenteRicardo.agencia = 1001;
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.saldo = 100;
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.sacar(50);
contaCorrenteRicardo.depositar(1000);
contaCorrenteRicardo.sacar(750);
contaCorrenteRicardo.sacar(15000); //Não realizou saque porque o valor era maior que o disponível
contaCorrenteRicardo.depositar(-500); // Não depositou porque o valor é negativo
const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(contaCorrenteRicardo.saldo);
console.log(valorSacado);
console.log(contaCorrenteRicardo)