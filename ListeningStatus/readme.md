# Listening Status

## To-Do
- Button to enable/disable ingame
- Auto get/renew spotify access token
- Add spotify timestamp
- Add button ingame to change status string

## What this does
Changes your status within the client to the song you are currently listening to according to your Spotify/LastFM

![status](https://user-images.githubusercontent.com/49544373/221472119-7f8bf8b7-e9bc-4ad4-b4c7-f94b79d7608a.gif)


## How to use
- Download [League Loader](https://leagueloader.app) V1.0.0 or above
- ^ If League Loader release version is V0.6.0 or lower than V1.0.0, donwload from the latest automated builds of each commit ([Here](https://github.com/nomi-san/league-loader/actions)), you need to be logged into a github account
- Download Listening Status folder
- Paste folder inside your League Loader plugins folder

### Spotify
- Login in your spotify account in your browser
- Go to [spotify console](https://developer.spotify.com/console/get-users-currently-playing-track)
- Click in green button GET TOKEN
- Check the "Required scopes for this endpoint: user-read-currently-playing"
- Click in green button REQUEST TOKEN
- Copy the generated token in OAuth Token label
- Paste token in "spotifyTempKey" on config.json
- Change "mode" to SPOTIFY

### LastFM
- Login in your LastFM account in your browser
- Create a [LastFM API Account](https://www.last.fm/api/account/create)
- Copy the API Key in next screen
- Paste the LastFM API Key in config.json on "lastfmKey" and write your LastFM User in "lastfmUser"
- Change "mode" to LASTFM