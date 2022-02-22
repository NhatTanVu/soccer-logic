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