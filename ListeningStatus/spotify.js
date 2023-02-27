import axios from "https://esm.run/axios";
let opened = false;
const callbackURL = AuthCallback.createURL();
import config from "./config.json"

// Build token request URL with our gateway

export async function getToken() {
    if (
        DataStore.has("access_token") && (DataStore.get("spotify-expires") - new Date().getTime()) > 60 * 1000) return DataStore.get("access_token");
    console.log("getting new token")
    const scopes = [
        "user-read-currently-playing",
        "user-top-read",
        "user-modify-playback-state",
    ];
    const query = new URLSearchParams({
        scope: scopes.join(" "),
        redirect_uri: callbackURL,
    });

    if (!opened) { 
        window.open(
            "https://spotify.leagueloader.app/login?" + query.toString()
        );
        opened = true;

        // Wait for authorized, or 180s (timeout) by default
        const response = await AuthCallback.readResponse(
            callbackURL /*, 180000 */
        );

        if (response === null) {
            console.log("180s timeout trying to get response from auth callback")
        } else {
            const params = new URLSearchParams(response);
            const data = JSON.parse(window.atob(params.get("data")));
            if (data.access_token) {
                await DataStore.set('access_token', data.access_token)
                let now = new Date();
                await DataStore.set('spotify-expires', now.getTime() + (data.expires_in * 1000));
                return data.access_token
            } else {
                console.log(
                    "Response don't have access token"
                );
            }
        }
    }
}

export async function nowPlayingSpot() {
    const token = config.spotifyTempKey

    const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    };

    const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {headers})

    if (response.data.is_playing){
        return {
            name: response.data.item.name,
            artist: response.data.item.artists[0].name,
        };
    } else return false
}
