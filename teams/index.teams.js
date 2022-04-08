window.onload = function () {
    console.log("team = " + (team = getQueryVariable("team")));
    if (team) {
        document.title += " | " + team;
        document.querySelector('meta[name="description"]').setAttribute("content", document.querySelector('meta[name="description"]').getAttribute("content") + " | " + team);

        document.querySelectorAll(".club_name").forEach(function (item) {
            item.innerHTML = team;
        });

        document.querySelectorAll(".club_photo").forEach(function (item) {
            item.src = "../images/Teams/" + team + ".png";
        });

        if (DATA[team]) {
            if (DATA[team].stadium_name)
                stadium_name.innerHTML = DATA[team].stadium_name;
            if (DATA[team].official_website)
                document.querySelectorAll(".official_website").forEach(function (item) {
                    item.href = DATA[team].official_website.href;
                    item.textContent = DATA[team].official_website.textContent;
                });
            if (DATA[team].previous_standing || DATA[team].current_standing || DATA[team].next_standing) {
                if (DATA[team].previous_standing) {
                    previous_standing.innerHTML = "";
                    DATA[team].previous_standing.forEach(function (item) {
                        previous_standing.innerHTML += "<td>" + item + "</td>";
                    });
                }
                else {
                    previous_standing.innerHTML = "";
                }

                if (DATA[team].current_standing) {
                    current_standing.innerHTML = "";
                    DATA[team].current_standing.forEach(function (item) {
                        current_standing.innerHTML += "<td>" + item + "</td>";
                    });
                }
                else {
                    current_standing.innerHTML = "";
                }
                if (DATA[team].next_standing) {
                    next_standing.innerHTML = "";
                    DATA[team].next_standing.forEach(function (item) {
                        next_standing.innerHTML += "<td>" + item + "</td>";
                    });
                }
                else {
                    next_standing.innerHTML = "";
                }
            }
        }

        if (team == 'Arsenal') {
            no_latest_goals.style.display = "none";
            latest_goals.style.display = "table";
            document.querySelector("[data-tab-content='squad']").style.visibility = "visible";
        }
        if (team == 'Arsenal' || team == 'Fulham') {
            no_matches.style.display = "none";
            document.querySelectorAll(".matches").forEach(function (item) {
                item.style.display = "block";
            });
            document.querySelector("[data-tab-content='results']").style.visibility = "visible";
        }
    }
};