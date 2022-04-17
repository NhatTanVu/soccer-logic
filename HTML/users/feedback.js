function onSubmit() {
    if (this.checkValidity()) {
        summary_message.style.visibility = "visible";
        var timeLeft = 3000;
        var message = "Your feedback was sent. Thanks for contacting us!";
        summary_message.innerHTML = message + " Redirect in " + (timeLeft / 1000) + "s...";
        window.setInterval(function () {
            if (timeLeft > 0) {
                timeLeft -= 1000;
                summary_message.innerHTML = message + " Redirect in " + (timeLeft / 1000) + "s...";
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