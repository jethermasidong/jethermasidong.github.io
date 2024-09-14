document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.createElement("button");
    darkModeToggle.textContent = "Lightmode or Darkmode";
    darkModeToggle.style.position = "fixed";
    darkModeToggle.style.bottom = "20px";
    darkModeToggle.style.right = "20px";
    darkModeToggle.style.padding = "10px";
    darkModeToggle.style.cursor = "pointer";
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            darkModeToggle.textContent = "CLICK THIS IF YOU ARE A MORNING BIRD";
        } else {
            darkModeToggle.textContent = "CLICK THIS IF YOU ARE A NIGHT OWL";
        }
    });
});
