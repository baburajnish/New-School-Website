/// <reference path="C:\Users\babur\onedrive\documents\visual studio 2013\Projects\School Website\School Website\Assign Role/assign-role.html" />
/// <reference path="C:\Users\babur\onedrive\documents\visual studio 2013\Projects\School Website\School Website\Assign Role/assign-role.html" />

function getUsers() {
    var user = [
        (new User("01", "r", "Student")),
       (new User("02", "Rakesh Tiwari", "Student")),
       (new User("03", "Rahul Varma", "Student")),
       (new User("04", "Ashok Sahu", "Student")),
       (new User("05", "Ravi Sarma", "Admin")),
       (new User("06", "Amar Barla", "Principle")),
       (new User("07", "Asish Sony", "Faculty"))
    ];
    return user;
}
function displayedUser() {
    var user = getUsers();
    var userName = $("#txtName").val();
    var container = $("#container");
    container.html("");
    for (var i = 0; i < user.length; i++) {
        var Id = $("<div>");
        var Name = $("<div>");
        var Role = $("<div>");
        var btnDiv = $("<div>", {class:"btn-group-vertical"});
        
        btnAssignRole = $('<input />', {
            class: 'btn btn-info',
            type: 'button',
            value: 'Assign Role',
            id: 'btn_a',
            on: {
                click: function () {
                    window.location.href = "../Assign Role/assign-role.html";
                }
            }
        });
        btnEdit = $('<input/>', {
            class: 'btn btn-info',
            type: 'button',
            value: 'Edit',
            id: 'btn_b',

            on: {
                click: function () {
                    var userId = user[i].Id;
                    window.location.href = "../Edit/edit-view.html?userId="+userId;
                }
            }

        });



        if (userName == user[i].Name) {
            Id.html("<label> Id</label> :"+" " + "<label>" + user[i].Id + "</label>");
            Name.html("<label> Name :</label>" + " " + "<label>" + user[i].Name +"</label>");
            Role.html("<label> Role :</label>" + " " + "<label>" + user[i].Role + "</label>");

            container.append(Id);
            container.append(Name);
            container.append(Role);
            btnDiv.append(btnAssignRole);
            btnDiv.append(btnEdit);
            container.append(btnDiv);
            break;
        }
    }

}




