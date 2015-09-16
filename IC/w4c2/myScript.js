

function parseData() {
    /*var checkUser = document.forms["myForms"]["name"].value;
    var checkAddress = document.forms["myForms"]["address"].value;
    var checkPhone = document.forms["myForms"]["phone"].value;
    var checkObjects = ["name", "address", "phone"];*/

    var currentURL = window.location.search;
    currentURL = currentURL.replace("?", "");
    currentURL = currentURL.replace("&", " ");
    currentURL = currentURL.replace("&", " ");
    currentURL = currentURL.replace("name=", "");
    currentURL = currentURL.replace("address=", "");
    currentURL = currentURL.replace("phone=", "");
    var split = currentURL.split(" ");

    document.getElementById("dataTable").innerHTML = currentURL;

    var table = document.createElement("TABLE");
    var rowOne = table.insertRow(0);
    var cell1_1 = rowOne.insertCell(0);
    var cell1_2 = rowOne.insertCell(1);
    var cell1_3 = rowOne.insertCell(2);
    cell1_1.innerHTML = "Name";
    cell1_2.innerHTML = "Address";
    cell1_3.innerHTML = "Phone";

    var rowTwo = table.insertRow(1);
    var cell2_1 = rowTwo.insertCell(0);
    var cell2_2 = rowTwo.insertCell(1);
    var cell2_3 = rowTwo.insertCell(2);

    cell2_1.innerHTML = split[0];
    cell2_2.innerHTML = split[1];
    cell2_3.innerHTML = split[2];

    document.getElementById("data").appendChild(table);

}