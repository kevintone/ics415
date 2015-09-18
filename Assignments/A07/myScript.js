var cName;
document.getElementById("testGetClasses").onclick = getClasses(this);

/*
*
* getClasses(element)
* element is the element in the HTML to get the classes of
* Returns the element(s) of the array in the form of
* ["firstHere", "secondHere"]
*
 */
function getClasses(elem) {
    var toReturn;
    var elemClasses = elem.className; //String of the classes of the element
    var split = elemClasses.split(" "); // Split by the " " delimiter
    //document.write(split);
    toReturn = "[\"";
    for(i = 0; i < split.length; i++) {
        toReturn+=split[i];

        if(i != split.length - 1){
            toReturn+= "\",\" ";
        }
    }
    toReturn+= "\"]";
    document.getElementById("printClass").innerHTML = toReturn;
}

/*
*
* addClasses(elem, className)
* Adds the specified class to the element
* Call getClasses() to check whether or not change occured
*
 */
function addClasses(elem, className) {
    var checkDuplicate = 0;
    var getCurrentClass = elem.className;
    if(className==undefined) {
        className="not defined";
    }

    var splitClasses = getCurrentClass.split(" ");
    for(var i = 0; i < splitClasses.length; i++) {
        if(className === splitClasses[i]) {
            checkDuplicate = 1;
        }
    }

    if(checkDuplicate == 0) {
        var updateClassString = getCurrentClass + " " + className;
        elem.className = updateClassString;
    } else {
        //Do Nothing..
    }
}

/*
*
* validateForm()
*
*   Checks whether the user inputted text into the username, email, password
*   and confirm password. It also checks whether or not password and confirm
*   password matched.
*
*   Returns errors in the Div Above the forms to allow user to fix them
*
 */
function validateForm() {
    var errors = 0;
    var errorsFound = "";

    //Username check
    var checkUsername = document.forms["myForm"]["name"].value;
    if(checkUsername == null || checkUsername == "") {
        document.getElementById("username").style.borderColor = "red";
        errors++;
        errorsFound += "Please enter your username <br> "
    }

    //Email
    var checkEmail = document.forms["myForm"]["email"].value;
    if(checkEmail == null || checkEmail == "") {
        document.getElementById("email").style.borderColor="red";
        errorsFound += "Please enter your email <br> ";
        errors++;
    }

    //Password & Confirm Password
    var checkPassword = document.forms["myForm"]["password"].value;
    if(checkPassword == null || checkPassword == "") {
        document.getElementById("password").style.borderColor = "red";
        errorsFound += "Please enter your password<br> ";
        errors++;
    }

    var checkConfirm = document.forms["myForm"]["confirm"].value;
    if(checkConfirm == null || checkConfirm == "") {
        document.getElementById("confirm").style.border = "red";
        errorsFound += "Please confirm your password  <br> ";
        errors++;
    }

    //Check Passowrds are equal
    if(checkPassword != checkConfirm) {
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("confirm").style.border = "red";
        errorsFound += "Check that your passwords matched in the fields below";
        errors++;
    }

    if(errors > 0) {
        document.getElementById("errorCatch").innerHTML = errorsFound;
        return false;
    }

    return true;
}