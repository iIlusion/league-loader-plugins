import axios from "https://esm.run/axios";
import config from "./config.json"

const lastfmUrl = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${config.lastfmUser}&api_key=${config.lastfmKey}&format=json&limit=1`;

export async function nowPlayingFM() {
    const response = await axios.get(lastfmUrl)
    const track = response.data.recenttracks.track[0];
    if (track["@attr"] && track["@attr"].nowplaying) {
        return {
            name: track.name,
            artist: track.artist["#text"]
        }
    } else return false;
}
