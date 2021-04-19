function ValidateForm() {
    var x = document.forms["Basic_form"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out.");
        return false;
    }
}