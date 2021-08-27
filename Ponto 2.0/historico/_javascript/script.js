function addTable() {
    var myTableDiv = document.getElementById("minhaTabela");

    var table = document.createElement('TABLE');
    table.border = '3';

    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

    for (var mes = 0; mes < 3; mes++) {
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);

        for (var dia = 0; dia < 2; dia++) {
            var td = document.createElement('TD');
            td.width = '75';
            td.appendChild(document.createTextNode(dia + "/09/2021"));
            tr.appendChild(td);
        }
        for (var entrada = 0; entrada < 1; entrada++) {
            var td = document.createElement('TD');
            td.width = '75';
            td.appendChild(document.createTextNode("Entrada"));
            tr.appendChild(td);
        }
        for (var saida = 0; saida < 1; saida++) {
            var td = document.createElement('TD');
            td.width = '75';
            td.appendChild(document.createTextNode("Saída"));
            tr.appendChild(td);
        }
        for (var status = 0; status <1; status++) {
            var td = document.createElement('TD');
            td.width = '75';
            td.appendChild(document.createTextNode("status"));
            tr.appendChild(td)
        }
    }
    myTableDiv.appendChild(table);
}
addTable();
