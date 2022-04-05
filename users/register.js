function onSubmit(event) {
    if (this.checkValidity()) {
        setAuthInfo(email.value, first_name.value, last_name.value, new Date());
        summary_message.style.visibility = "visible";
        var timeLeft = 3000;
        var message = "Registered!";
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

function onCancel(event) {
    window.location.replace("../index.html");
}