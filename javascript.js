function checkForm() {

    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var pass = document.getElementById("pass");
    var confpass = document.getElementById("confpass");
    var genderSelector = document.getElementById("gender");
    var email = document.getElementById("mail");
    var phoneNum = document.getElementById("phone");
    if (allLetter_fname(fname)) {
        if (allLetter_lname(lname)) {
            if (phonenumber(phoneNum)) {
                if (ValidateEmail(email)) {
                    if (pass_validation(pass)) {
                        if (matchpass(pass, confpass)) {
                            if (genderSelect(genderSelector,fname)) {}
                        }
                    }
                }
            }
        }
    }
    return false;
}
function allLetter_fname(fname) {
    var letters = /^[A-Za-z]+$/;
    if (fname.value == null || fname.value == "") {
        swal("First Name can't be blank!", " ", "error");
        fname.focus();
        return false;
    }
    if (fname.value.match(letters)) {
        return true;
    } else {
        swal('Username must have alphabet characters only', " ", "error");
        fname.focus();
        return false;
    }

}

function allLetter_lname(lname) {
    var letters = /^[A-Za-z]+$/;
    if (lname.value == null || fname.value == "") {
        swal("Last Name can't be blan!", " ", "error");
        lname.focus();
        return false;
    }

    if (lname.value.match(letters)) {
        return true;
    } else {
        swal("last name must have alphabet characters only!", " ", "error");
        lname.focus();
        return false;
    }
}
function pass_validation(pass) {
    var pass_len = pass.value.length;
    if (pass_len == 0 || pass_len > 8 || pass_len < 8) {
        swal("Password should not be empty !", "length must be 8", "error");
        pass.focus();
        return false;
    } else {
        var checker = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8}$/;
        if (pass.value.match(checker)) {
            if (pass.value.charAt(0).toUpperCase()) {
                return true;
            }
            if (pass.value.indexOf(' ') >= 0) {
                swal("Password can't contain whitespace!", " ", "error");
                pass.focus();
                return false;
            }
        } else {
            swal("Password must contain one digit and one special character at least and starts with uppercase character!", " ", "error");
            pass.focus();
            return false;
        }
    }
}

function matchpass(pass, confpass) {
    if (pass.value == confpass.value) {
        return true;
    } else {
        swal("password must be same!", " ", "warning");
        confpass.focus();
        return false;
    }
}
function genderSelect(genderSelector,fname) {
    if (genderSelector.value == "Default") {
        swal("Select your Gender from the list", " ", "warning");
        genderSelector.focus();
        return false;
    } else {
        swal('Hi '+ fname.value, "Welcome To Our Restaurent ", "success");
        return true;
    }
}

function ValidateEmail(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        return true;
    } else {
        swal("You have entered an invalid email address!", " ", "error");
        email.focus();
        return false;
    }
}

function phonenumber(phoneNum) {
    var ph_lenght = phoneNum.value.length
    if (ph_lenght == 11) {
        return true;
    } else {
        swal("Enter Valid Phone Number!", " ", "warning");
        phoneNum.focus();
        return false;
    }
}

$("button").click(function() {
    $('html,body').animate({
        scrollTop: $(".rev_form").offset().top},
        1800);
});

$("input.button").click(function() {
    $('html,body').animate({
        scrollTop: $(".smotop").offset().top},
        1800);
});