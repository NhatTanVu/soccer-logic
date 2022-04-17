function onSubmit(event) {
    if (this.checkValidity()) {
        setAuthInfo(email.value, first_name.value, last_name.value, new Date());
        summary_message.style.visibility = "visible";
        var timeLeft = 3000;

        document.querySelector(".dialog > .title").innerHTML = "Register";
        document.querySelector(".dialog > .content").innerHTML = "Registered & Signed In. Redirect in " + (timeLeft / 1000) + "s...";
        document.querySelector(".dialog").style.display = "flex";
        document.querySelector(".dialog + .overlay").style.display = "block";

        window.setInterval(function () {
            if (timeLeft > 0) {
                timeLeft -= 1000;
                document.querySelector(".dialog > .content").innerHTML = "Registered & Signed In. Redirect in " + (timeLeft / 1000) + "s...";
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