var database = firebase.database();
database.ref().on("child_added", function (snapshot) {
    var data = snapshot.val();
    var monthsDiff = moment().diff(moment(data.start), "months");
    $("table").append(
        `<tr>
        <td>${data.employeeName}</td>
        <td>${data.role}</td>
        <td>${data.startDate}</td>
        <td>${monthsDiff}</td>
        <td>${data.monthlyRate}</td>
        <td>${monthsDiff * data.rate}<td>
    <tr>`
    );
});

$("#submitButton").on("click", function () {
    event.preventDefault();
    var employeeName = $("#nameInput").val();
    var role = $("#roleInput").val();
    var startDate = $("#dateInput").val();
    var monthlyRate = $("#rateInput").val();
    console.log(employeeName);
    console.log(role);
    console.log(startDate);
    console.log(monthlyRate);

    $("#nameInput").val("");
    $("#roleInput").val("");
    $("#dateInput").val("");
    $("#rateInput").val("");

    database.ref().push({
        employeeName,
        role,
        startDate,
        monthlyRate,
    });


});