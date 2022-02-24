var members = []
var ages = []
var group;
var i;
var output = []
var final = []

//get group data
function getgroupdata() {
    members = []
    ages = []
    group = prompt("group size");
    i = 0
    output = []
    final = []

    for (let i = 1; i <= group; i++) {
        members.push(prompt("name of member: " + i))
        ages.push(prompt(`age of member: ${members[i - 1]}`))
    }
    console.log(members);
    //assess group data
    for (let i = 0; i <= group; i++) {
        if (ages[i] >= 21) {
            output.push("yes")

        } else {

            output.push("no")
        }



    }





    //sort output
    group
    for (let i = 1; i <= group; i++) {
        final.push(members[i] + "allowed to drink?: " + output[i] + ".")
    }
    document.getElementById("output").innerHTML = final;
}


