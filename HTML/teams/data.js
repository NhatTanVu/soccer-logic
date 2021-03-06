var DATA = {
    "Manchester City": {
        "stadium_name": "Etihad Stadium",
        "official_website": {
            "href": "http://www.mancity.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
            "textContent": "www.mancity.com"
        },
        "current_standing": [1, "Manchester City", 38, 51, 86],
        "next_standing": [2, "Manchester United", 38, 29, 74]
    },
    "Manchester United": {
        "stadium_name": "Old Trafford",
        "official_website": {
            "href": "http://www.manutd.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
            "textContent": "www.manutd.com"
        },
        "previous_standing": [1, "Manchester City", 38, 51, 86],
        "current_standing": [2, "Manchester United", 38, 29, 74],
        "next_standing": [3, "Liverpool", 38, 26, 69]
    },
    "Liverpool": {
        "stadium_name": "Anfield",
        "official_website": {
            "href": "http://www.liverpoolfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
            "textContent": "www.liverpoolfc.com"
        },
        "previous_standing": [2, "Manchester United", 38, 29, 74],
        "current_standing": [3, "Liverpool", 38, 26, 69],
        "next_standing": [4, "Chelsea", 38, 22, 67]
    },
    "Chelsea": {
        "stadium_name": "Stamford Bridge",
        "official_website": {
            "href": "https://www.chelseafc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
            "textContent": "www.chelseafc.com"
        },
        "previous_standing": [3, "Liverpool", 38, 26, 69],
        "current_standing": [4, "Chelsea", 38, 22, 67],
        "next_standing": [5, "Leicester City", 38, 18, 66]
    },
    "Leicester City": {
        "stadium_name": "King Power Stadium",
        "official_website": {
            "href": "http://www.lcfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
            "textContent": "www.lcfc.com"
        },
        "previous_standing": [4, "Chelsea", 38, 22, 67],
        "current_standing": [5, "Leicester City", 38, 18, 66],
        "next_standing": [6, "West Ham United", 38, 15, 65]
    },
    "West Ham United": {
        "stadium_name": "London Stadium",
        "official_website": {
            "href": "http://www.whufc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
            "textContent": "www.whufc.com"
        },
        "previous_standing": [5, "Leicester City", 38, 18, 66],
        "current_standing": [6, "West Ham United", 38, 15, 65],
        "next_standing": [7, "Tottenham Hotspur", 38, 23, 62]
    },
    "Tottenham Hotspur": {
        "stadium_name": "Tottenham Hotspur Stadium",
        "official_website": {
            "href": "http://www.tottenhamhotspur.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
            "textContent": "www.tottenhamhotspur.com"
        },
        "previous_standing": [6, "West Ham United", 38, 15, 65],
        "current_standing": [7, "Tottenham Hotspur", 38, 23, 62],
        "next_standing": [8, "Arsenal", 38, 16, 61]
    },
    "Arsenal": {
        "stadium_name": "Emirates Stadium",
        "official_website": {
            "href": "https://www.arsenal.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
            "textContent": "www.arsenal.com"
        },
        "previous_standing": [7, "Tottenham Hotspur", 38, 23, 62],
        "current_standing": [8, "Arsenal", 38, 16, 61],
        "next_standing": [9, "Leeds United", 38, 8, 59]
    },
    "Leeds United": {
        "stadium_name": "Elland Road",
        "official_website": {
            "href": "http://www.leedsunited.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
            "textContent": "www.leedsunited.com"
        },
        "previous_standing": [8, "Arsenal", 38, 16, 61],
        "current_standing": [9, "Leeds United", 38, 8, 59],
        "next_standing": [10, "Everton", 38, -1, 59]
    },
    "Everton": {
        "stadium_name": "Goodison Park",
        "official_website": {
            "href": "http://www.evertonfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
            "textContent": "www.evertonfc.com"
        },
        "previous_standing": [9, "Leeds United", 38, 8, 59],
        "current_standing": [10, "Everton", 38, -1, 59],
        "next_standing": [11, "Aston Villa", 38, 9, 55]
    },
    "Aston Villa": {
        "stadium_name": "Villa Park",
        "official_website": {
            "href": "https://www.avfc.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
            "textContent": "www.avfc.co.uk"
        },
        "previous_standing": [10, "Everton", 38, -1, 59],
        "current_standing": [11, "Aston Villa", 38, 9, 55],
        "next_standing": [12, "Newcastle United", 38, -16, 45]
    },
    "Newcastle United": {
        "stadium_name": "St. James' Park",
        "official_website": {
            "href": "http://www.nufc.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
            "textContent": "www.nufc.co.uk"
        },
        "previous_standing": [11, "Aston Villa", 38, 9, 55],
        "current_standing": [12, "Newcastle United", 38, -16, 45],
        "next_standing": [13, "Wolverhampton Wanderers", 38, -16, 45]
    },
    "Wolverhampton Wanderers": {
        "stadium_name": "Molineux Stadium",
        "official_website": {
            "href": "http://www.wolves.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
            "textContent": "www.wolves.co.uk"
        },
        "previous_standing": [12, "Newcastle United", 38, -16, 45],
        "current_standing": [13, "Wolverhampton Wanderers", 38, -16, 45],
        "next_standing": [14, "Crystal Palace", 38, -25, 44]
    },
    "Crystal Palace": {
        "stadium_name": "Selhurst Park",
        "official_website": {
            "href": "http://www.cpfc.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
            "textContent": "www.cpfc.co.uk"
        },
        "previous_standing": [13, "Wolverhampton Wanderers", 38, -16, 45],
        "current_standing": [14, "Crystal Palace", 38, -25, 44],
        "next_standing": [15, "Southampton", 38, -21, 43]
    },
    "Southampton": {
        "stadium_name": "St. Mary's Stadium",
        "official_website": {
            "href": "https://www.southamptonfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
            "textContent": "www.southamptonfc.com"
        },
        "previous_standing": [14, "Crystal Palace", 38, -25, 44],
        "current_standing": [15, "Southampton", 38, -21, 43],
        "next_standing": [16, "Brighton and Hove Albion", 38, -6, 41]
    },
    "Brighton and Hove Albion": {
        "stadium_name": "Amex Stadium",
        "official_website": {
            "href": "https://www.brightonandhovealbion.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
            "textContent": "www.brightonandhovealbion.com"
        },
        "previous_standing": [15, "Southampton", 38, -21, 43],
        "current_standing": [16, "Brighton and Hove Albion", 38, -6, 41],
        "next_standing": [17, "Burnley", 38, -22, 39]
    },
    "Burnley": {
        "stadium_name": "Turf Moor",
        "official_website": {
            "href": "http://www.burnleyfootballclub.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
            "textContent": "www.burnleyfootballclub.com"
        },
        "previous_standing": [16, "Brighton and Hove Albion", 38, -6, 41],
        "current_standing": [17, "Burnley", 38, -22, 39],
        "next_standing": [18, "Fulham", 38, -26, 28]
    },
    "Fulham": {
        "stadium_name": "Craven Cottage",
        "official_website": {
            "href": "http://www.fulhamfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
            "textContent": "www.fulhamfc.com"
        },
        "previous_standing": [17, "Burnley", 38, -22, 39],
        "current_standing": [18, "Fulham", 38, -26, 28],
        "next_standing": [19, "West Bromwich Albion", 38, -41, 26]
    },
    "West Bromwich Albion": {
        "stadium_name": "The Hawthorns",
        "official_website": {
            "href": "http://www.wba.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
            "textContent": "www.wba.co.uk"
        },
        "previous_standing": [18, "Fulham", 38, -26, 28],
        "current_standing": [19, "West Bromwich Albion", 38, -41, 26],
        "next_standing": [20, "Sheffield United", 38, -43, 23]
    },
    "Sheffield United": {
        "stadium_name": "Bramall Lane",
        "official_website": {
            "href": "http://www.sufc.co.uk/?utm_source=www.premier-league-website&utm_campaign=website&utm_medium=link",
            "textContent": "www.sufc.co.uk"
        },
        "previous_standing": [19, "West Bromwich Albion", 38, -41, 26],
        "current_standing": [20, "Sheffield United", 38, -43, 23]
    },
}