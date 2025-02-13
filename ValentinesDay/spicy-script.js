function showSecret() {
    let secretMsg = document.getElementById("secretMessage");
    secretMsg.classList.remove("hidden");

    // Add glow effect when revealed
    secretMsg.style.animation = "glow 1.5s infinite alternate";
}

// Generate multiple flames at random positions
function createFlames() {
    const fireContainer = document.querySelector(".fire-container");

    for (let i = 0; i < 20; i++) { // Adjust number of flames
        let flame = document.createElement("div");
        flame.classList.add("fire-flame");

        // Random positioning and animation delay
        flame.style.left = Math.random() * 100 + "vw";
        flame.style.animationDuration = Math.random() * 4 + 2 + "s";
        flame.style.animationDelay = Math.random() * 2 + "s";

        fireContainer.appendChild(flame);
    }
}

// Run the flame generator
createFlames();
