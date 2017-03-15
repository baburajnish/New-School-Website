
window.onload = function () {

    var url = window.location.href;
    var fetchedUrl = url.split('=');
    var fetchedId = fetchedUrl[1];

    getUserById(fetchedId);

};

function getUserById(userId) {
    var users = getRegistaredStudent();
    for (i = 0; i < users.length; i++) {

        if (userId == users[i].id) {
            document.getElementById('txtEmail').value = users[i].email;
            document.getElementById('txtPassword').value = users[i].password;
            document.getElementById('txtName').value = users[i].userName;
            document.getElementById('txtDob').value = users[i].dob;
            document.getElementById('txtMob').value = users[i].mob;
            document.getElementById('radioMale').checked = users[i].gender;
            document.getElementById('graduation').checked = users[i].qualifiction;
            document.getElementById('txtAddress').value = users[i].address;
        }
        
    }

}

function getRegistaredStudent() {
    var student = [
       (new Student("02","rakesh@gmail.com", "rakesh1234", "Rakesh Tiwari", "08-03-1985", "987532706", "Male", "Graduation", "AT/PO-Brarajnagar(Odisha)", "Inda")),
       (new Student("03","rahul@gmail.com", "rahul1234", "Rahul Varma", "06-09-1989", "987538906", "Male", "Graduation", "AT/PO-Jharsuguda(Odisha)", "Inda")),
       (new Student("04","ashok@gmail.com", "ashok1234", "Ashok Sahu", "08-03-1987", "987632706", "Male", "Graduation", "AT/PO-Rayagada(Odisha)", "Inda")),
       (new Student("05","ravi@gmail.com", "ravi1234", "Ravi Sarma", "08-03-1988", "984532706", "Male", "Graduation", "AT/PO-Baleswar(Odisha)", "Inda")),
       (new Student("06","amar@gmail.com", "amar1234", "Amar Barla", "08-03-1986", "987562706", "Male", "Graduation", "AT/PO-Raulkela(Odisha)", "Inda")),
       (new Student("07","asish@gmail.com", "asish1234", "Asish Sony", "08-03-1989", "987382706", "Male", "Graduation", "AT/PO-Sambalpur(Odisha)", "Inda"))
    ];

    return student;
}




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

//function getSelectedStudent() {
//    var student = new Student("baburajnish@gmail.com", "raj1234", "Rajnish Tiwari",
//        "22-08-1988", "7205332706", "true", "true", "AT/PO-Brarajnagar(Odisha)");
//    return student;

//}
//function DisplayStudent() {
//    var student = getSelectedStudent()
//    document.getElementById('txtEmail').value = student.email;
//    document.getElementById('txtPassword').value = student.password;
//    document.getElementById('txtName').value = student.userName;
//    document.getElementById('txtDob').value = student.dob;
//    document.getElementById('txtMob').value = student.mob;
//    document.getElementById('radioMale').checked = student.gender;
//    document.getElementById('graduation').checked = student.qualifiction;
//    document.getElementById('txtAddress').value = student.address;
    

//}

