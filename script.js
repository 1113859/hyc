document.addEventListener("DOMContentLoaded", () => {
    function createBubble() {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");

        const size = Math.random() * 50 + 30;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;

        bubble.style.left = `${Math.random() * window.innerWidth}px`;

        document.body.appendChild(bubble);

        setTimeout(() => {
            bubble.remove();
        }, 10000);
    }
    setInterval(createBubble, 300); // Create bubbles every 300ms
});