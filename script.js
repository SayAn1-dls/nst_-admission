document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");

    // Check localStorage for saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.innerHTML = "☀️";
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // Save theme preference in localStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeToggle.innerHTML = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.innerHTML = "🌙";
        }
    });
});

// Function for Ask Question Page
function submitQuestion() {
    let questionInput = document.getElementById("question").value.trim();
    let messageBox = document.getElementById("message");

    if (questionInput === "") {
        messageBox.innerHTML = "Please enter a valid question.";
        messageBox.style.color = "red";
    } else {
        messageBox.innerHTML = "Your question has been submitted!";
        messageBox.style.color = "green";
        document.getElementById("question").value = ""; 
    }
}
