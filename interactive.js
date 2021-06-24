class TableItem {
    constructor(column1, column2) {
        this.column1 = column1;
        this.column2 = column2;
    }
}

let tableItems = [];
for (let i = 0; i < 10; i++)
    tableItems.push(new TableItem(Math.floor(Math.random() * 100), Math.random()));


let root = document.getElementById("root");

let addBtn = document.createElement("button");
addBtn.classList.add("btn", "btn-success");
addBtn.textContent = "Add new row";


addBtn.addEventListener("click", () => {
    tableItems.push(new TableItem(Math.floor(Math.random() * 100), Math.random()));
    renderTable();
});

let changeBtn = document.createElement("button");
changeBtn.classList.add("btn", "btn-info");
changeBtn.textContent = "Change row";

changeBtn.addEventListener("click", () => {
    let rowIndex = prompt("Enter row index:");

    if (parseInt(rowIndex) < 0 || parseInt(rowIndex) > tableItems.length - 1) {
        alert("incorrect index");
    } else {

        let columnIndex = prompt("Enter column index 1/2:");

        if (parseInt(columnIndex) === 1 || parseInt(columnIndex) === 2) {
            let value = prompt("Enter value:");
            let item = tableItems[parseInt(rowIndex)];
            switch (parseInt(columnIndex)) {
                case 1: item.column1 = value; break;
                case 2: item.column2 = value; break;
            }

        } else {
            alert("incorrect index");
        }
    }

    renderTable();
})

root.insertAdjacentElement("afterend", addBtn);
root.insertAdjacentElement("afterend", changeBtn);




function renderTable() {
    root.innerHTML = "";
    let table = document.createElement("table");
    table.classList.add("table");
    for (let i = 0; i < tableItems.length; i++) {
        let tr = document.createElement("tr");

        let td0 = document.createElement("td");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");

        td0.textContent = "Row Index: " + i;
        td1.textContent = tableItems[i].column1;
        td2.textContent = tableItems[i].column2;

        let btn = document.createElement("button");
        btn.classList.add("btn", "btn-danger");
        btn.textContent = "Delete";

        btn.addEventListener("click", () => {
            tableItems.splice(i, 1);
            renderTable();
        })

        tr.insertAdjacentElement("beforeend", td0);
        tr.insertAdjacentElement("beforeend", td1);
        tr.insertAdjacentElement("beforeend", td2);
        tr.insertAdjacentElement("beforeend", btn);
        table.insertAdjacentElement("beforeend", tr);
    }
    root.insertAdjacentElement("beforeend", table);
}

renderTable();
