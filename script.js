const links = document.querySelectorAll("a[target='myFrame']");
links.forEach((link) => {
    link.addEventListener("click", function (event) {
        const url = this.href;
        localStorage.setItem("currentURL", url);
        document.getElementById("myFrame").src = url;
        window.location.hash = url.split("/").pop();
        event.preventDefault();
    });
});

window.onload = function () {
    const url = localStorage.getItem("currentURL");
    if (url) {
        document.getElementById("myFrame").src = url;
    }
}

const bgBtn = document.querySelectorAll("li");

const selectedLi = localStorage.getItem("selectedLi");
if (selectedLi) {
    bgBtn.forEach((li) => {
        if (li.classList.contains(selectedLi)) {
            li.classList.add("active");
        } else {
            li.classList.remove("active");
        }
    });
}

bgBtn.forEach((link) => {
    link.addEventListener("click", function (event) {
        bgBtn.forEach((li) => {
            li.classList.remove("active");
        });
        this.classList.add("active");

        localStorage.setItem("selectedLi", this.classList[0]);
    });
});

const hash = window.location.hash.substring(1);
if (hash) {
    bgBtn.forEach((li) => {
        if (li.classList.contains(hash)) {
            li.click();
        }
    });
}
