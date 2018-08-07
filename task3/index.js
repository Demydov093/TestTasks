var items = [
    {name: "Apple", lastName: "Hello", email: "doekd@oxe.com"},
];

var updateMode = false;
var index;
window.onload = function() {
    loadList();
}

function addItem() {
    if(validateForm()) {
        if(!updateMode) {
            const name = document.getElementById("name").value;
            const lastName = document.getElementById("lastName").value;
            const email = document.getElementById("email").value;
            let date = todayFunc();
            const item = {'name' :name, 'lastName' :lastName, 'email':email, 'Date': date};
            items.push(item);
            clear();
            addRow(item);
        } else {
            removeAllRows();
            items[index].name = document.getElementById("name").value;
            items[index].lastName = document.getElementById("lastName").value;
            items[index].email = document.getElementById("email").value;
            clear();
            loadList();
        }
    }
}

function validateForm() {
    var name = document.forms["f"]["name"].value;
    var lastName = document.forms["f"]["lastName"].value;
    var email = document.forms["f"]["email"].value;
    if (name == "") {
        alert("Name must be filled out");
        return false;
    } else if (lastName == "") {
        alert("Lastname must be filled out");
        return false;
    } else if (email == "") {
        alert("Email must be filled out");
        return false;
    } else if(!validateEmail(email)) {
        alert("Email is not valid");
        return false;
    } else {
        return true;
    }
}

function validateEmail(email)
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function todayFunc() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    return mm + '/' + dd + '/' + yyyy;
}

function loadList() {
    for (var i = 0; i < items.length; i++) {
        addRow(items[i]);
    }
    updateMode = false;
}

function addRow(item) {

    var newRow = document.all("itemsList").insertRow();

    item.Date = todayFunc();

    var oCell = newRow.insertCell();
    oCell.innerHTML = item.name;

    oCell = newRow.insertCell();
    oCell.innerHTML = item.lastName;

    oCell = newRow.insertCell();
    oCell.innerHTML = item.email;

    oCell = newRow.insertCell();
    oCell.innerHTML = item.Date;

    oCell = newRow.insertCell();
    console.log(item);
    oCell.innerHTML = "<input" +
        " type='button' value='Update' onclick='updateRow(this);'/>"
    oCell = newRow.insertCell();
    oCell.innerHTML = "<input" +
        " type='button' value='Delete' onclick='removeRow(this);'/>"
}

function removeRow(src) {
    var oRow = src.parentElement.parentElement;

    items.splice(oRow.rowIndex - 1, 1)
    document.all("itemsList").deleteRow(oRow.rowIndex);
}

function removeAllRows() {
    var rows = document.all("itemsList");
    for (var i = 1; i < items.length+1; i++) {
        rows.deleteRow(1);
    }
}

function updateRow(src){
    updateMode = true;
    var oRow = src.parentElement.parentElement;
    index = oRow.rowIndex - 1;
    document.getElementById("name").value = items[index].name;
    document.getElementById("lastName").value = items[index].lastName;
    document.getElementById("email").value = items[index].email;
}


function clear() {
    document.getElementById("name").value = '';
    document.getElementById("lastName").value = '';
    document.getElementById("email").value = '';
}
