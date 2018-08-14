var database = firebase.database();

console.log(database);

database.ref().on("value", function (snapshot) {
    console.log(snapshot.val());
});

database.ref().set({
    favsong: "So Long, Captain"
});

//create a folder called bio
//SET the following data:
//name, age

database.ref("bio/").set({
    name: "Joe",
    age: "27",
});

$("#saveButton").on("click", function () {
    var name = $("#nameInput").val();
    var age = $("#ageInput").val();

    database.ref("bio").push({
        name,
        age,
    });

    $("#bioName").text(name);
    $("#bioAge").text(age);


});