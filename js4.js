function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");

    /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    {
        document.getElementById("myDropdown").classList.toggle("show");
    }
// Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
}
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}




    var myInput = document.getElementById("psw");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");

    // When the user clicks on the password field, show the message box
    myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

    // When the user clicks outside of the password field, hide the message box
    myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}

    // When the user starts to type something inside the password field
    myInput.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
} else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
    } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
    }

    // Validate numbers
        var numbers = /[!@#$%^&*]/g;
        if(myInput.value.match(numbers)) {
            number.classList.remove("invalid");
            number.classList.add("valid");
        } else {
            number.classList.remove("valid");
            number.classList.add("invalid");
        }

        // Validate length
        if(myInput.value.length >= 8) {
            length.classList.remove("invalid");
            length.classList.add("valid");
        } else {
            length.classList.remove("valid");
            length.classList.add("invalid");
        }

}

// Validate email
var myyInput = document.getElementById("usrname");
var gmail = document.getElementById("gmail");


// When the user clicks on the password field, show the message box
myyInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myyInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}

myyInput.onkeyup = function() {
    var mail = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g;
    if(myyInput.value.match(mail)) {
        gmail.classList.remove("invalid");
        gmail.classList.add("valid");
    } else {
        gmail.classList.remove("valid");
        gmail.classList.add("invalid");
    }
}

// Validate confirm password
var myyyInput = document.getElementById("cpsw");
var check = document.getElementById("check");

// When the user clicks on the password field, show the message box
myyyInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myyyInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}
myyyInput.onkeyup = function() {
    if (document.getElementById('psw').value ===
        document.getElementById('cpsw').value) {
        check.classList.remove("invalid");
        check.classList.add("valid");
    } else {
        check.classList.remove("valid");
        check.classList.add("invalid");
    }
}


function edit_row(no)
{
    document.getElementById("edit_button"+no).style.display="none";
    document.getElementById("save_button"+no).style.display="block";

    var name=document.getElementById("name_row"+no);
    var major=document.getElementById("major_row"+no);
    var group=document.getElementById("group_row"+no);

    var name_data=name.innerHTML;
    var major_data=major.innerHTML;
    var group_data=group.innerHTML;

    name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
    major.innerHTML="<input type='text' id='country_text"+no+"' value='"+major_data+"'>";
    group.innerHTML="<input type='text' id='group_text"+no+"' value='"+group_data+"'>";
}

function save_row(no)
{
    var name_val=document.getElementById("name_text"+no).value;
    var major_val=document.getElementById("major_text"+no).value;
    var group_val=document.getElementById("group_text"+no).value;

    document.getElementById("name_row"+no).innerHTML=name_val;
    document.getElementById("major_row"+no).innerHTML=major_val;
    document.getElementById("group_row"+no).innerHTML=group_val;

    document.getElementById("edit_button"+no).style.display="block";
    document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
    document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
    var new_name=document.getElementById("new_name").value;
    var new_major=document.getElementById("new_major").value;
    var new_group=document.getElementById("new_group").value;

    var table=document.getElementById("data_table");
    var table_len=(table.rows.length)-1;
    var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='major_row"+table_len+"'>"+new_major+"</td><td id='group_row"+table_len+"'>"+new_group+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

    document.getElementById("new_name").value="";
    document.getElementById("new_major").value="";
    document.getElementById("new_group").value="";
}
