// https://stackoverflow.com/questions/2090551/parse-query-string-in-javascript
function getQueryVariable(variable) {

    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
}

/* Authentication */
function isAuth() {
    let isAuthenticated = (getAuthInfo().email != null) && (getAuthInfo().signin_time != null);
    if (isAuthenticated) {
        let diff = Math.abs(new Date() - new Date(getAuthInfo().signin_time));
        isAuthenticated &= (diff <= 1000 * 60 * 10); /* <= 10m */
        if (isAuthenticated) {
            setAuthInfo(null, null, null, new Date());
        }
    }
    console.log("isAuthenticated = " + isAuthenticated);
    return isAuthenticated;
}
function setAuthInfo(email, first_name, last_name, signin_time) {
    if (email) {
        localStorage.setItem("email", email);
    }
    if (first_name) {
        localStorage.setItem("first_name", first_name);
    }
    if (last_name) {
        localStorage.setItem("last_name", last_name);
    }
    if (signin_time) {
        localStorage.setItem("signin_time", signin_time);
    }
}
function getAuthInfo() {
    return {
        email: localStorage.getItem("email"),
        first_name: localStorage.getItem("first_name"),
        last_name: localStorage.getItem("last_name"),
        signin_time: localStorage.getItem("signin_time")
    }
}
function clearAuthInfo(reloaded) {
    localStorage.removeItem("email");
    localStorage.removeItem("first_name");
    localStorage.removeItem("last_name");
    localStorage.removeItem("signin_time");
    if (reloaded) {
        window.location.reload();
    }
}
function displayAuthInfo() {
    if (!isAuth()) {
        clearAuthInfo();
        user.innerHTML = '<i class="fa-solid fa-user avatar"></i>';
        sign_in.style.display = null;
        register.style.display = null;
        sign_out.style.display = "none";
    }
    else {
        let auth = getAuthInfo();
        console.log("email = " + auth.email);
        console.log("signin_time = " + auth.signin_time);
        user.innerHTML = "<img class='avatar' src='" + menu.src.replace("icon-menu.svg", "image-avatar.png") + "' />";
        sign_in.style.display = "none";
        register.style.display = "none";
        sign_out.style.display = null;
    }
}

document.getElementById("league-selector").onclick = (e) => {
    document.querySelectorAll(".popup").forEach((item) => {
        if (item.id != "league-selector-popup")
            item.classList.add("hide");
    });
    document.querySelector("#league-selector > svg").classList.toggle("rotate");
    document.querySelector("#league-selector-popup").classList.toggle("hide");
};
document.querySelectorAll("#league-selector-popup li").forEach((item) => {
    item.addEventListener('click', (e) => {
        if (document.querySelector("#league-selector-popup li.active"))
            document.querySelector("#league-selector-popup li.active").classList.remove("active");
        let element = e.target;
        while (element.tagName.toLowerCase() != "li") element = element.parentElement;
        element.classList.add("active");
        let buttonImage = document.querySelector("#league-selector img");
        let selectedImage = document.querySelector("#league-selector-popup li.active img");
        buttonImage.src = selectedImage.src;
        let buttonText = document.querySelector("#league-selector span");
        let selectedText = document.querySelector("#league-selector-popup li.active span");
        buttonText.innerHTML = selectedText.innerHTML;
        document.getElementById("league-selector").click();
    });
});
document.querySelectorAll(".tab-list li").forEach((item) => {
    item.addEventListener('click', (e) => {
        if (document.querySelector(".tab-list li.active"))
            document.querySelector(".tab-list li.active").classList.remove("active");
        let element = e.target;
        while (element.tagName.toLowerCase() != "li") element = element.parentElement;
        element.classList.add("active");
        let tabContent = element.getAttribute("data-tab-content");
        document.querySelectorAll(".tab-content  > *").forEach((item2) => {
            item2.style.display = "none";
        });
        document.querySelector(".tab-content  > ." + tabContent).style.display = null;
    });
});
document.getElementById("user").onclick = (e) => {
    document.querySelectorAll(".popup").forEach((item) => {
        if (item.id != "user-menu")
            item.classList.add("hide");
    });
    document.querySelector("#user-menu").classList.toggle("hide");
};
document.getElementById("menu").onclick = (e) => {
    document.querySelector(".navigation-menu").classList.toggle("mobile");
    document.querySelector(".overlay").classList.toggle("mobile");
    document.querySelector("#menu-close-button").classList.toggle("mobile");
};
document.getElementById("menu-close-button").onclick = (e) => {
    document.querySelector(".navigation-menu").classList.toggle("mobile");
    document.querySelector(".overlay").classList.toggle("mobile");
    document.querySelector("#menu-close-button").classList.toggle("mobile");
};

if (document.querySelector(".tab-list li.active"))
    document.querySelector(".tab-list li.active").click();
displayAuthInfo();