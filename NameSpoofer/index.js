/**
 * @name NameSpoofer
 * @author Lx
 * @description Plugin to hide all usernames on your client
 */

import data from "./config.json";

let { name, spoof } = data;

window.addEventListener("load", () => {
  const inputOptions = {
    placeholder: "New username",
    setupAttribute: "nick-changer-setup",
  };

  setInterval(() => {
    const nickContainer = document.querySelector("div > div.name");
    if (!nickContainer || nickContainer.hasAttribute(inputOptions.setupAttribute)) { return; }
    nickContainer.setAttribute(inputOptions.setupAttribute, "true");

    const flatInput = document.createElement("lol-uikit-flat-input");
    const userInput = document.createElement("input");
    userInput.setAttribute("placeholder", inputOptions.placeholder);
    flatInput.appendChild(userInput);

    nickContainer.addEventListener("click", () => {
      nickContainer.parentNode.replaceChild(flatInput, nickContainer);
      userInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          if (userInput.value.trim().length) {
            flatInput.parentNode.replaceChild(nickContainer, flatInput);
            name = userInput.value;
          }
        }
      });
      userInput.focus();
    });
  }, 1000);
});

window.addEventListener("load", () => {
    const interval = setInterval(() => {
        if (!spoof) return clearInterval(interval);
        const manager = document.getElementById("rcp-fe-viewport-root");
        if (manager) {
            clearInterval(interval);
            new MutationObserver((mutations) => {
                const elements = document.querySelectorAll(
                    ".blocked-player-game-name, .banner-summoner-name, .chat-gnt, .chat-name, .conversation-title, .custom-member-name, .hovercard-open-party-summoners.chat, .hover-card-game-name, .hover-card-game-tag, .hover-card-name, .lol-leagues-list-col-3.lol-leagues-list-col, .lol-leagues-list-item.me.current.ember-view .rank-standing-row-component, .match-details-team-list .player-history-mode, .member-name, .name, .name-text, .parties-player-name, .player-name, .prompted-voting-candidate-name, .scoreboard-row-player-name, .style-profile-search-trail-summoner-name, .style-profile-summoner-name, .message-name, .system-message, .invite-info-name, .lol_parties__invite_dialog_name-and-context, .chat-name, .chat-gnt, .message-box-messages-system-message"
                );

                elements.forEach((element) => {
                    element.textContent = name;
                });
            }).observe(manager, {
                childList: true,
                subtree: true,
            });
        }
    }, 100);
});

setInterval(() => {
    const myMessageBox = document.getElementById("embedded-messages-frame");
    if (myMessageBox) {
        const iframeContent = myMessageBox.contentDocument;
        const messageNames = iframeContent.querySelectorAll(".message-name");
        const systemMessages =
            iframeContent.querySelectorAll(".system-message");

        for (const sysMessage of systemMessages) {
            sysMessage.textContent = `🐱‍👤`;
        }

        for (const chatName of messageNames) {
            if (chatName != name) chatName.textContent = name;
        }
    }

    const elements = document.querySelectorAll(".reform-card-chat-log-name");

    elements.forEach((element) => {
        element.textContent = name;
    });
}, 0.1);
