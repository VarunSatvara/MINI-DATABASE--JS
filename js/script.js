var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var update_name;
var span = document.getElementsByClassName("close")[0];


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

    col3.innerHTML = '<i class="fas fa-edit" onclick="up(this)"></i>';
    col4.innerHTML = '<i class="far fa-trash-alt" onclick="del(this)"></i>';

    row.append(col, col1, col2, col3, col4);
    tbody.append(row);
    console.log(row);

    col.innerHTML = document.getElementById('name').value;
    col1.innerHTML = document.getElementById('email').value;
    col2.innerHTML = document.getElementById('pass').value;   
   
}

function up(){
    var modal1 = document.getElementById("myModal1");
    modal1.style.display = "block";
    var close1 = document.getElementsByClassName("close1")[0];
    close1.onclick = function() {
        modal1.style.display = "none";
    }  
}

function del(index) {
    var list = index.parentNode.parentElement;
    console.log(list);
    list.remove();

}
function update(){
   console.log("hello");
}

function admin_login() {
    var admin_name = "admin";
    var admin_pass = "admin";

    var u_name = document.getElementById('u_name').value;
    var u_pass = document.getElementById('u_pass').value;

    if (admin_name == u_name && admin_pass == u_pass) {
        document.getElementById('database').style.display = "block";
        document.getElementById('reg_form').style.display = "none";
    }
    myModal.style.display = "none";
}
function logout(){
    document.getElementById('reg_form').style.display="block";
    document.getElementById('database').style.display = "none";
}