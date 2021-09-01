var records = [
    {
        local: moment.locale('pt-br'),
        date: moment().format('DD/MM/YYYY'),
        entrance: moment().format('LTS'),
        exit: moment().format('LTS'),
        status: moment().format('dddd')
    },
    {
        local: moment.locale('pt-br'),
        date: moment().format('DD/MM/YYYY'),
        entrance: moment().format('LTS'),
        exit: moment().format('LTS'),
        status: moment().format('dddd')
    },
    {
        local: moment.locale('pt-br'),
        date: moment().format('DD/MM/YYYY'),
        entrance: moment().format('LTS'),
        exit: moment().format('LTS'),
        status: moment().format('ddd')
    }
    
];

function addTable() {
    let tBody = document.getElementById("minhaTabela");
    for (record in records) {
        let tr = addLine(records[record]);
        tBody.appendChild(tr);
    }
}
addTable();

function addLine(record) {
    let tr = document.createElement('tr');
    let tdDate = addCell(record, "date");
    tr.appendChild(tdDate);
    let tdEntrada = addCell(record, "entrance");
    tr.appendChild(tdEntrada);
    let tdSaida = addCell(record, "exit");
    tr.appendChild(tdSaida);
    let tdStatus = addCell(record, "status");
    tr.appendChild(tdStatus);
    return tr;
}

function addCell(record, nameItem) {
    let border = '2px solid black';
    let td = document.createElement('td');
    let date = record[nameItem];
    td.appendChild(document.createTextNode(date));
    td.style.border = border;
    return td;
}

