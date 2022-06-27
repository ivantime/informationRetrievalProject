var data = [
    [
        "https://en.wikipedia.org/wiki/Tell_Me_Why_(video_game)",
        "Tell Me Why Video Game - Wikipedia",
        "26 Jun 2022",
        "In this intimate mystery, reunited twins Tyler and Alyson Ronan use their supernatural bond to unravel the memories of their loving but troubled childhood..."
    ],
    [
        "https://genius.com/Backstreet-boys-i-want-it-that-way-lyrics",
        "Backstreet Boys – I Want It That Way Lyrics - Genius",
        "12 Apr 1999",
        " Want It That Way Lyrics ; All] Tell me why ; Ain't nothing but a heartache. Tell me why ; a ; Tell me why. I never wanna hear you say. I want it that way [Verse 2 ..."
    ],

    [
        "https://www.youtube.com/watch?v=8r39uFM12iU",
        "Sound Of Legend - Tell Me Why (Official Video) - YouTube",
        "9 Feb 2019",
        "Download And Stream : https://soundoflegend.lnk.to/TellMeWhyFollow Sound Of Legend:http://facebook.com..."
    ],
    [
        "https://subslikescript.com/I-want-it-that-way-brooklyn-99",
        "Brooklyn Nine-Nine (2013–…): Season 5, Episode 17 - Tell Me Why",
        "17 Feb 2021",
        "Do you remember what he was singing? I think it was that song, \"I Want It That Way.\" Backstreet Boys. I'm familiar. Okay."

    ],
    [
        "https://www.tellmewhygame.com",
        "What is the story behind Tell Me Why?",
        "8 Jan 2021",
        "What is the story of Tell Me Why? Tell Me Why is the story of two twins, Alyson and Tyler Ronan, who reunite for the first time in ten years after their mother's death. Upon returning to their childhood home in rural Alaska, the Ronans realize that their shared past may not be as they remember it.",
    ],
    [
        "https://www.vitalmtb.com/cables",
        "Tell me why headset cable routing is a good idea - Vital MTB",
        "1 Jun 2022",
        "You get less cable rub and can get hoses out of the way more easily when running a handlebar bag for bikepacking. You won't have cables ..."
    ],
    [
        "https://books.google.com.sg/tell-me-why",
        "Tell Me Why - Page 213 - Google Books result",
        "2 Jan 2018",
        "A thin, fragile pole extended from the roof and was hooked on to the overhead power cable where it swayed and bucked, and smelled of scorched ozone."
    ],
    [
        "https://www.defendingbigd.com › why-mr-robot-is-a-masterpiece",
        "Me Says: Mr. Robot Is A Television Masterpiece That Deserves No Why...",
        "1 Apr 2020",
        "When you watch Mr. Robot, it's incredibly clear that Esmail is a true student of film and television. The show is absolutely overflowing with ..."
    ]

]

function findSearch(input, arr) {
    if (!input) { return false; }
    else {
        var div_element = ""
        var count = 0;
        var idxPresent = []
        for (var i = 0; i < arr.length; i++) {
            if (arr[i][1] === input) {
                div_element += "<div class=\"col\"> " +
                    "<div id=\"urlText\"><i><u>" + arr[i][0].toString() + "</u></i></div>" + "<div> <div class=\"col\">" +
                    "<div id=\"headerResultText\">" + arr[i][1].toString() + "</div> </div>" + "<div class=\"col\" id=\"dateResultText\">" +
                    "<div>" + arr[i][2].toString() + "</div> </div> <div id=\"bodyResultText\" class=\"col\">" + "<div>" +
                    arr[i][3].toString() + "</div> </div> </div> <div></br></br></div>";
                idxPresent.push(i)
            }
        }
        /*for each item in the array...*/
        var input = input.split(" ");

        for (var i = 0; i < arr.length; i++) {
            // console.log(arr[i][1])
            var pass = false;
            input.some(function (element, idx) {

                if (pass) { pass = false; return true };
                if (element === "" || element === " ") {

                }
                else {
                    console.log(idxPresent.includes(i))
                    if (idxPresent.includes(i) === false) {
                        const indexes = [...arr[i][1].matchAll(new RegExp(element, 'gi'))].map(a => a.index);
                        // console.log(indexes); // [2, 25, 27, 33]

                        /*create a DIV element for each matching element:*/
                        if (indexes.length > 0) {
                            count++;
                            div_element += "<div class=\"col\"> " +
                                "<div id=\"urlText\"><i><u>" + arr[i][0].toString() + "</u></i></div>" + "<div> <div class=\"col\">" +
                                "<div id=\"headerResultText\">" + arr[i][1].toString() + "</div> </div>" + "<div class=\"col\" id=\"dateResultText\">" +
                                "<div>" + arr[i][2].toString() + "</div> </div> <div id=\"bodyResultText\" class=\"col\">" + "<div>" +
                                arr[i][3].toString() + "</div> </div> </div> <div></br></br></div>";
                            pass = true;

                        }
                    }
                }
            })
        }
        return [div_element, count];
    }
}


//Code Source:https://www.w3schools.com/howto/howto_js_autocomplete.asp
function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        closeAllLists();
        if (!this.value) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        var query = this.value.split(" ");

        for (var i = 0; i < arr.length; i++) {
            // console.log(arr[i][1])
            var pass = false;
            query.some(function (element, idx) {

                if (pass) { pass = false; return true };
                if (element === "" || element === " ") {

                }
                else {
                    const indexes = [...arr[i][1].matchAll(new RegExp(element, 'gi'))].map(a => a.index);
                    // console.log(indexes); // [2, 25, 27, 33]

                    /*create a DIV element for each matching element:*/
                    if (indexes.length > 0) {
                        b = document.createElement("DIV");
                        /*make the matching letters bold:*/
                        // b.innerHTML = "<strong>" + arr[i][1].substr(indexes[idx], element.length) + "</strong>";
                        b.innerHTML = arr[i][1];

                        /*insert a input field that will hold the current array item's value:*/
                        b.innerHTML += "<input type='hidden' value='" + arr[i][1] + "'>";
                        /*execute a function when someone clicks on the item value (DIV element):*/
                        b.addEventListener("click", function (e) {
                            /*insert the value for the autocomplete text field:*/
                            inp.value = this.getElementsByTagName("input")[0].value;
                            /*close the list of autocompleted values,
                            (or any other open lists of autocompleted values:*/
                            closeAllLists();
                        });
                        a.appendChild(b);
                        pass = true;

                    }
                }
            })
        }

    });

    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
} 