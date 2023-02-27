import config from './config.json';
import { nowPlayingFM } from './lastfm';
import { nowPlayingSpot } from './spotify';
let oldMusic;

async function getNowPlaying(mode) {
    switch (mode) {
        case "LASTFM":
            return await nowPlayingFM()
        case "SPOTIFY":
            return await nowPlayingSpot()
    }
}

setInterval(
    async () => {
        let music = await getNowPlaying(config.mode);
        if (!music && oldMusic) {
            await changeStatus(`Now Playing: None`);
            oldMusic = null
            return
        }
        if (!music || music.name == oldMusic) return;
        await changeStatus(`Now Playing: ${music.artist} - ${music.name}`);
        oldMusic = music.name
    },
    500
);

let changeStatus = async (status) =>
    await fetch("/lol-chat/v1/me", {
        method: "PUT",
        body: JSON.stringify({ statusMessage: status }),
        headers: { "Content-Type": "application/json" },
    });
//`ㅤ» ${music.name} «ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ  0:00 ─〇───── 0:00ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ⇄   ◃◃   ⅠⅠ   ▹▹   ↻`