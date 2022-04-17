function onSubmit() {
    if (this.checkValidity()) {
        var timeLeft = 3000;
        var message = "Your feedback was sent. Thanks for contacting us!";

        document.querySelector(".dialog > .title").innerHTML = "Feedback";
        document.querySelector(".dialog > .content").innerHTML = message + ". Redirect in " + (timeLeft / 1000) + "s...";
        document.querySelector(".dialog").style.display = "flex";
        document.querySelector(".dialog + .overlay").style.display = "block";

        window.setInterval(function () {
            if (timeLeft > 0) {
                timeLeft -= 1000;
                document.querySelector(".dialog > .content").innerHTML = message + ". Redirect in " + (timeLeft / 1000) + "s...";
            }
            else {
                window.location.replace("../index.html");
            }
        }, 1000);
        submit_button.disabled = true;
        cancel_button.disabled = true;
    }
    event.preventDefault();
}

function onCancel() {
    window.location.replace("../index.html");
}

window.onload = function () {
    if (isAuth()) {
        var auth = getAuthInfo();
        if (auth.first_name)
            first_name.value = auth.first_name;
        if (auth.last_name)
            last_name.value = auth.last_name;
        if (auth.email)
            email.value = auth.email;
    }
};