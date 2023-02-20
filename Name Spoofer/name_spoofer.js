let enabled = require("./configs/name_spoofer_config.json")["spoof"];
let name = require("./configs/name_spoofer_config.json")["name"];

window.addEventListener("load", () => {
    const interval = setInterval(() => {
        if (!enabled) return clearInterval(interval)
        const manager = document.getElementById("rcp-fe-viewport-root");
        if (manager) {
            clearInterval(interval);
            new MutationObserver((mutations) => {
                let elements = document.querySelectorAll(
                    ".style-profile-summoner-name, .name, .match-details-team-list .player-history-mode, .custom-member-name, .name-text"
                );
                console.log(elements);
                if (elements.length >= 1) {
                    for (var i = 0; i < elements.length; i++) {
                        elements[i].textContent = name;
                    }
                }
            }).observe(manager, {
                childList: true,
                subtree: true,
            });
        }
    }, 500);
});
