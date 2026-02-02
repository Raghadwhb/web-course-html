
document.querySelector("form").addEventListener("submit", function (Listen) {
    Listen.preventDefault();
    addDataToTable();
});

function addDataToTable() {
    const email = document.getElementById("email").value;
    const country = document.getElementById("country").value;

    const tableBody = document.querySelector("table tbody");

    const dataArray = [email, country];

    const row = document.createElement("tr");

    for (let i = 0; i < dataArray.length; i++) {
        const cell = document.createElement("td");
        cell.textContent = dataArray[i];
        row.appendChild(cell);
    }

    tableBody.appendChild(row);
}
