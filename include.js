function includeHTML() {
    document.querySelectorAll("[data-include]").forEach(el => {
        fetch(el.getAttribute("data-include"))
            .then(response => response.text())
            .then(data => {
                el.innerHTML = data;
            });
    });
}
includeHTML();
