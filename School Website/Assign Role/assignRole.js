
$(document).ready(function () {

    displayedUser();


});

function getSelectedUser() {
    var user=new User("1","Rajnish Tiwar",true);
    return user;
}
function displayedUser() {
    var user = getSelectedUser();
    $('#lblId').html(user.Id);
    $('#lblName').html(user.Name);
    $('#chkStudent').prop("checked", user.Role);
    var cantiner = $('#canteiner');
    var lblName = $("<label>");
  

}

























