var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

console.log(span);

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

function sub() {
    var tbody = document.getElementById('tbody');
    var row = document.createElement("tr");
    var col = document.createElement("td");
    var col1 = document.createElement("td");
    var col2 = document.createElement("td");
    var col3 = document.createElement("td");
    var col4 = document.createElement("td");

    col3.innerHTML = '<i class="fas fa-edit"></i>';
    col4.innerHTML = '<i class="far fa-trash-alt"></i>';

    row.append(col, col1, col2, col3, col4);
    tbody.append(row);

    col.innerHTML = document.getElementById('name').value;
    col1.innerHTML = document.getElementById('email').value;
    col2.innerHTML = document.getElementById('pass').value;
    console.log(col);
    console.log(col1);
    console.log(col2);


}