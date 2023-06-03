/**
 * @name HideChatLogs
 * @author Lx
 * @description Plugin to hide all the chat logs on your chat ban
 */

window.addEventListener("load", () => {
    const interval = setInterval(() => {
        const elements = document.querySelectorAll(
            ".reform-card-chat-log-game, .reform-card-chat-log-body, .reform-card-scrollable-game.selected"
        );

        elements.forEach((element) => {
            element.remove();
        });
    }, 1);
});
