const topRowClick = document.querySelectorAll(".topRow"); //selects the Top Row
const topClick = document.getElementById("top2to1"); // 2 to 1 button
const midRowClick = document.querySelectorAll(".midRow"); //selects the Middle Row
const midClick = document.getElementById("mid2to1"); // 2 to 1 button
const botRowClick = document.querySelectorAll(".bottomRow"); //selects the Bottom Row
const botClick = document.getElementById("bot2to1"); // 2 to 1 button

//roulette

//roulette

//top row styles
topClick.addEventListener("mouseover", event => {
    topRowClick.forEach((e) => {
        e.style.border.color = "orange";
        e.style.backgroundColor = "white";
    });
});

topClick.addEventListener("mouseout", event => {
    topRowClick.forEach((e) => {
        e.style.backgroundColor = "green";
    });
});

//middle row styles
midClick.addEventListener("mouseover", event => {
    midRowClick.forEach((e) => {
        e.style.backgroundColor = "white";
    });
});

midClick.addEventListener("mouseout", event => {
    midRowClick.forEach((e) => {
        e.style.backgroundColor = "green";
    });
});

//bottom row styles
botClick.addEventListener("mouseover", event => {
    botRowClick.forEach((e) => {
        e.style.backgroundColor = "white";
    });
});

botClick.addEventListener("mouseout", event => {
    botRowClick.forEach((e) => {
        e.style.backgroundColor = "green";
    });
});