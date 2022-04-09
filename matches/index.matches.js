document.getElementById("home-team-button").onclick = function (e) {
    document.querySelector(".line-ups .home-team").style.display = "block";
    document.querySelector(".line-ups .away-team").style.display = "none";
    return false;
};

document.getElementById("away-team-button").onclick = function (e) {
    document.querySelector(".line-ups .away-team").style.display = "block";
    document.querySelector(".line-ups .home-team").style.display = "none";
    return false;
};

if (window.getComputedStyle(document.querySelector(".line-ups .away-team")).display !== "none") {
    document.getElementById("home-team-button").disabled = true;
    document.getElementById("away-team-button").disabled = true;
}
else {
    document.querySelector(".tab-list li[data-tab-content='line-ups']").onclick = function (e) {
        if (window.getComputedStyle(document.querySelector(".line-ups .home-team")).display !== "none") {
            document.getElementById("home-team-button").focus();
        }
        else {
            document.getElementById("away-team-button").focus();
        }
    }
}