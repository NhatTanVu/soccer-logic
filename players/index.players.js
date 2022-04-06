// index.html?na=Mohamed%20Salah&no=11&cl=Liverpool&po=Forward&fb=momosalah&tw=mosalah&inst=mosalah&nat=Egypt&dob=15-Jun-1992%20(29)&ht=175cm&pc=2020%2F2021_Liverpool_37_3_22

window.onload = function (event) {
    console.log("name = " + (name = getQueryVariable("na")));
    console.log("number = " + (number = getQueryVariable("no")));
    console.log("club = " + (club = getQueryVariable("cl")));
    console.log("position = " + (position = getQueryVariable("po")));
    console.log("facebook = " + (facebook = getQueryVariable("fb")));
    console.log("twitter = " + (twitter = getQueryVariable("tw")));
    console.log("instagram = " + (instagram = getQueryVariable("inst")));
    console.log("nationality = " + (nationality = getQueryVariable("nat")));
    console.log("date of birth = " + (dob = getQueryVariable("dob")));
    console.log("height = " + (height = getQueryVariable("ht")));
    console.log("goal = " + (goal = getQueryVariable("goal")));

    if (name) {
        document.title += " | " + name;
        document.querySelector('meta[name="description"]').setAttribute("content", document.querySelector('meta[name="description"]').getAttribute("content") + " | " + name);

        document.querySelectorAll(".player_name").forEach(function (item) {
            item.innerHTML = name;
        });
        player_photo.src = "../images/Players/" + name + ".png";
    }
    if (number) {
        document.querySelectorAll(".player_number").forEach(function (item) {
            item.innerHTML = number;
        });
    }
    else {
        document.querySelectorAll(".player_number").forEach(function (item) {
            item.innerHTML = "&nbsp;";
        });
    }
    if (club) {
        document.querySelectorAll(".club_name").forEach(function (item) {
            item.innerHTML = club;
        });
        document.querySelectorAll(".club_photo").forEach(function (item) {
            item.src = "../images/Teams/" + club + ".png";
        });
        document.querySelectorAll(".club_link").forEach(function (item) {
            item.href = "../teams/index.html?team=" + club;
        });
    }
    if (position) {
        player_position.innerHTML = position;
    }
    if (!facebook && !twitter && !instagram) {
        follow_player.style.visibility = "hidden";
    }
    else {
        if (facebook) {
            player_facebook.href = "https://www.facebook.com/" + facebook + "/";
        }
        else {
            player_facebook.parentElement.style.display = "none";
        }
        if (twitter) {
            player_twitter.href = "https://twitter.com/" + twitter + "?s=20";
        }
        else {
            player_twitter.parentElement.style.display = "none";
        }
        if (instagram) {
            player_instagram.href = "https://www.instagram.com/" + instagram + "/?hl=en";
        }
        else {
            player_instagram.parentElement.style.display = "none";
        }
    }
    if (nationality) {
        player_nationality.innerHTML = nationality;
    }
    if (dob) {
        player_dob.innerHTML = dob.split(" ")[0] + (dob.split(" ")[1] ? " " + dob.split(" ")[1] : "");
    }
    if (height) {
        player_height.innerHTML = height;
    }
    if (goal) {
        player_goal.innerHTML = goal;
    }
    else {
        player_goal.innerHTML = "0";
    }
};