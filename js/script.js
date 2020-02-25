var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var update_name;
var update_email;
var update_pass;
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

    col3.innerHTML = '<i class="fas fa-edit" id="up"></i>';
    col4.innerHTML = '<i class="far fa-trash-alt"></i>';

    row.append(col, col1, col2, col3, col4);
    tbody.append(row);

    col.innerHTML = document.getElementById('name').value;
    col1.innerHTML = document.getElementById('email').value;
    col2.innerHTML = document.getElementById('pass').value;

    var x = document.getElementById("up");
    var modal1 = document.getElementById("myModal1");
    var close1 = document.getElementsByClassName("close1")[0];

    x.onclick = function() {
        modal1.style.display = "block";
        update_name = this.parentElement.parentElement.childNodes[0];
        update_email = this.parentElement.parentElement.childNodes[1];
        update_pass = this.parentElement.parentElement.childNodes[2];
    }

    close1.onclick = function() {
        modal1.style.display = "none";
    }
}

function edit() {
    var name1 = document.getElementById('name1').value;
    var email1 = document.getElementById('email1').value;
    var pass1 = document.getElementById('pass1').value;
    var modal1 = document.getElementById("myModal1");
    update_name.innerHTML = name1;
    update_email.innerHTML = email1;
    update_pass.innerHTML = pass1;
    console.log(name1);
    console.log(email1);
    console.log(pass1);
    console.log(update_name);
    modal1.style.display = "none";
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
    console.log(u_name);
    console.log(u_pass);
}