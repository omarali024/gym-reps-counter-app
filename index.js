let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function resetAll() {
    count = 0
    countEl.textContent = 0
    saveEl.textContent = "Result: "
}

const tabs = document.querySelectorAll(".weight-tab");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        // Remove 'active' from all tabs
        tabs.forEach(t => t.classList.remove("active"));
        // Add 'active' to the clicked tab
        tab.classList.add("active");
    });
});

