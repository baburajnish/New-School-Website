function updeteSelectedStudent() {
    var student = getSelectedStudent();
    student.email = document.getElementById('txtEmail').value;
    student.password = document.getElementById('txtPassword').value;
    student.userName = document.getElementById('txtName').value;
    student.dob = document.getElementById('txtDob').value;
    student.mob = document.getElementById('txtMob').value;
    student.gender = document.getElementById('radioMale').checked;
    student.qualifiction = document.getElementById('graduation').checked;
    student.address = document.getElementById('txtAddress').value;
    clear();
}
function clear() {
    
    document.getElementById('txtEmail').value = "";
    document.getElementById('txtPassword').value = "";
    document.getElementById('txtName').value = "";
    document.getElementById('txtDob').value = "";
    document.getElementById('txtMob').value = "";
    document.getElementById('radioMale').checked =false;
    document.getElementById('graduation').checked =false;
    document.getElementById('txtAddress').value ="";


}

function getSelectedStudent() {
    var student = new Student("baburajnish@gmail.com", "raj1234", "Rajnish Tiwari",
        "22-08-1988", "7205332706", "true", "true", "AT/PO-Brarajnagar(Odisha)");
    return student;

}
function DisplayStudent() {
    var student = getSelectedStudent()
    document.getElementById('txtEmail').value = student.email;
    document.getElementById('txtPassword').value = student.password;
    document.getElementById('txtName').value = student.userName;
    document.getElementById('txtDob').value = student.dob;
    document.getElementById('txtMob').value = student.mob;
    document.getElementById('radioMale').checked = student.gender;
    document.getElementById('graduation').checked = student.qualifiction;
    document.getElementById('txtAddress').value = student.address;
    

}

