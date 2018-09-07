$("button").on("click", function (event) {
    event.preventDefault();
    $.ajax({
        method: "POST",
        url: "http://localhost:8080",
        data: {
            email: $("#exampleInputEmail1").val(),
            password: $("#exampleInputPassword1").val()
        }
    }).then(function () { });
})

