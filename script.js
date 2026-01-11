// Getting button and card box references
let addBtn = document.getElementById("addBtn");
let clearBtn = document.getElementById("clearBtn");
let cardBox = document.getElementById("cardBox");

// Add card button click
addBtn.onclick = function () {

    // Getting input values
    let question = document.getElementById("question").value;
    let answer = document.getElementById("answer").value;
    let type = document.getElementById("type").value;

    // Validation check
    if (question === "" || answer === "") {
        alert("Please fill both question and answer");
        return;
    }

    // Creating new card
    let card = document.createElement("div");
    card.className = "card";

    // Adding content inside card
    card.innerHTML = `
        <p><b>Type:</b> ${type}</p>
        <p>${question}</p>
        <p style="display:none">${answer}</p>
    `;

    // Click card to show/hide answer
    card.onclick = function () {
        let ans = card.querySelectorAll("p")[2];
        ans.style.display =
            ans.style.display === "none" ? "block" : "none";
    };

    // Add card to page
    cardBox.appendChild(card);

    // Clear input fields
    document.getElementById("question").value = "";
    document.getElementById("answer").value = "";
};

// Clear all cards button
clearBtn.onclick = function () {
    cardBox.innerHTML = "";
};