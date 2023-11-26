function skillMember() {
    var member = document.getElementById("member");
    var memberValue = member.value;
    var memberRegex = /^[0-9]{1,2}$/;
    if (memberRegex.test(memberValue)) {
        document.getElementById("memberError").innerHTML = "";
        return true;
    } else {
        document.getElementById("memberError").innerHTML = "Member must be 1-2 digits";
        return false;
    }
}