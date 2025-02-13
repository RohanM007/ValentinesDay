document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.body.appendChild(heart);
    }
});

function explodeHeart(choice) {
    let text = document.getElementById("explosionText");

    if (choice === "yes") {
        text.innerHTML = "I love you so much! 💖";
    } else {
        text.innerHTML = "Too late, you're already mine! 😘";
    }

    // Show the message with a fade-in effect
    text.style.opacity = "1";
    text.style.transform = "scale(1)";
    text.style.animation = "fadeIn 1s ease-in-out forwards";

    // Ensure the message stays visible for longer
    setTimeout(() => {
        text.style.animation = "fadeOut 2s ease-in-out forwards";
    }, 4000); // Keep the message for 4 seconds before fading out
}

// Animation styles
const style = document.createElement("style");
style.innerHTML = `
    @keyframes fadeIn {
        0% { transform: scale(0.8); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
    }
    
    @keyframes fadeOut {
        0% { opacity: 1; }
        100% { opacity: 0; }
    }

    #explosionText {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 24px;
        color: pink;
        font-weight: bold;
        text-align: center;
        opacity: 0; /* Start hidden */
        transition: opacity 0.5s ease-in-out;
    }
`;
document.head.appendChild(style);
