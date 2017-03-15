
window.onload = function () {
    DisplayStudent();
    displayRegistaredStudent();

};



function getSelectedStudent() {
    var student = new Student("baburajnish@gmail.com", "raj1234", "Rajnish Tiwari",
        "22-08-1988", "7205332706", "Male", "Graduation", "AT/PO-Brarajnagar(Odisha)", "Inda");
    return student;

}
function DisplayStudent() {
    var student = getSelectedStudent()
    document.getElementById('lblEmail').innerHTML = student.email;
    document.getElementById('lblPassword').innerHTML = student.password;
    document.getElementById('lblName').innerHTML = student.userName;
    document.getElementById('lblDob').innerHTML = student.dob;
    document.getElementById('lblMob').innerHTML = student.mob;
    document.getElementById('lblMale').innerHTML = student.gender;
    document.getElementById('lblGraduate').innerHTML = student.qualifiction;
    document.getElementById('lblAddress').innerHTML = student.address;
    document.getElementById('lblCountry').innerHTML = student.country;
   



}
