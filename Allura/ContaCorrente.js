export class ContaCorrente {
    agencia;
    saldo;

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            return valor;
        }
        return;
    }//Permite sacar somente se tiver saldo
    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }//Permite despositar somente valores maiores que 0
}