function onSubmit(event) {
    if (this.checkValidity()) {
        summary_message.style.visibility = "visible";
        if (email.value == "test@gmail.com" && password.value == "test") {
            setAuthInfo(email.value, "Test", "User", new Date());
            var timeLeft = 3000;
            var message = "Signed In!";
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
            sign_in_button.disabled = true;
            register_button.classList.add("disabled");
            register_button.href = "#";
        }
        else {
            summary_message.innerHTML = "<span style='color: var(--errors-color);'>Invalid email or password!</span>";
        }
    }
    event.preventDefault();
}