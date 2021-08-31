var records = [

    {
        local: moment.locale('pt-br'),
        date: moment().format('D/MM/YYYY'),
        entrance: moment().format('LTS'),
        exit: moment().format('LTS'),
        status: moment().format('dddd')
    }
];

function addTable() {
    let tBody = document.getElementById("minhaTabela");   

    for (record in records) {
        let tr = document.createElement('tr');
        for (item in record) {
            var tdData = document.createElement('td');
            let data = records[record]["date"];
            tdData.appendChild(document.createTextNode(data));
            tdData.style.border = '2px solid black';
            tr.appendChild(tdData);

            var tdEntrada = document.createElement('td');
            let entrada = records[record]["entrance"];
            tdEntrada.appendChild(document.createTextNode(entrada));
            tdEntrada.style.border = '2px solid black';
            tr.appendChild(tdEntrada);

            var tdSaida = document.createElement('td');
            let saida = records[record]["exit"];
            tdSaida.appendChild(document.createTextNode(saida));
            tdSaida.style.border = '2px solid black';
            tr.appendChild(tdSaida);

            var tdStatus = document.createElement('td');
            let status = records[record]["status"];
            tdStatus.appendChild(document.createTextNode(status));
            tdStatus.style.border = '2px solid black';
            tr.appendChild(tdStatus);
        }
        tBody.appendChild(tr);
    }
}
addTable();
