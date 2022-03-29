document.getElementById("league-selector").onclick = (e) => {
    document.querySelector("#league-selector > svg").classList.toggle("rotate");
    document.querySelector("#league-selector-popup").classList.toggle("hide");
};

document.querySelectorAll("#league-selector-popup li").forEach((item) => {
    item.addEventListener('click', (e) => {
        document.querySelector("#league-selector-popup li.active")?.classList.remove("active");
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
        document.querySelector(".tab-list li.active")?.classList.remove("active");
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
document.querySelector(".tab-list li.active")?.click();

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
    //console.log('Query variable %s not found', variable);
}