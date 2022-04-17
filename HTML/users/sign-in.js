function onSubmit(event) {
    if (this.checkValidity()) {
        if (email.value == "test@gmail.com" && password.value == "test") {
            setAuthInfo(email.value, "Test", "User", new Date());
            var timeLeft = 3000;

            document.querySelector(".dialog > .title").innerHTML = "Sign In";
            document.querySelector(".dialog > .content").innerHTML = "Signed In. Redirect in " + (timeLeft / 1000) + "s...";
            document.querySelector(".dialog").style.display = "flex";
            document.querySelector(".dialog + .overlay").style.display = "block";

            window.setInterval(function () {
                if (timeLeft > 0) {
                    timeLeft -= 1000;
                    document.querySelector(".dialog > .content").innerHTML = "Signed In. Redirect in " + (timeLeft / 1000) + "s...";
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
            summary_message.style.visibility = "visible";
            summary_message.innerHTML = "<span style='color: var(--errors-color);'>Invalid email or password!</span>";
        }
    }
    event.preventDefault();
}