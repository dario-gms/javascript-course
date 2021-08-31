
let dia = new Date();
var records = [
    {
        in: dia,
        out: dia,
    },
    {
        in: dia,
        out: dia,
    },
    {
        in: dia,
        out: dia,
    },
    {
        in: dia,
        out: dia,
    },
    {
        in: dia,
        out: dia,
    }
];

function addTable() {
    let tableBody = document.getElementById("minhaTabela"); //renomear para tbody

    for (record in records) {
        let tr = document.createElement('tr');
        for (item in record) {
            var tdEntrada = document.createElement('td');
            let entrada = records[record]["in"];
            tdEntrada.appendChild(document.createTextNode(entrada));
            tr.appendChild(tdEntrada);

            var tdSaida = document.createElement('td');
            let saida = records[record]["out"];
            tdSaida.appendChild(document.createTextNode(saida));
            tr.appendChild(tdSaida);
        }
        tableBody.appendChild(tr);
    }
}
addTable();
