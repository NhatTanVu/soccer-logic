search_text.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        search_button.click();
    }
});

search_button.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        search_button.click();
    }
});

search_button.onclick = function (e) {
    var searchText = search_text.value;
    document.querySelectorAll("#players tr td:first-of-type span").forEach(function (item) {
        if (item.innerHTML.toLowerCase().indexOf(searchText.toLowerCase()) < 0) {
            item.closest("tr").style.display = "none";
        }
        else {
            item.closest("tr").style.display = null;
        }
    });
};