# Listening Status

## To-Do
- Button to enable/disable ingame
- Auto get spotify access token
- Add spotify timestamp
- Add button ingame to change status string

## What this does
Changes your status within the client to the song you are currently listening to according to your Spotify/LastFM

![status](https://user-images.githubusercontent.com/49544373/221472119-7f8bf8b7-e9bc-4ad4-b4c7-f94b79d7608a.gif)


## How to use
- Download [League Loader](https://leagueloader.app) V1.0.0 or above
- Download Listening Status folder
- Paste folder inside your League Loader plugins folder

- [config.json example](https://i.imgur.com/6txTw01.png)

### Spotify (ITS ONE TIME CONFIG)
- Login in your spotify account in your browser
- Go to [This Website](https://spotify-refresh-token-generator.netlify.app/)
- Click Get Started
- Open spotify developers dashboard
- Create a new app ([image example](https://i.imgur.com/UrolYW0.png))
- Save new app
- You will redirect to the app configs, click on the white/purple button "Settings" on the right side
- Copy "Client ID" and "Client Secret"
- Paste both inside config.json
- Go back to the previous website
- Type your client_id and client_secret and select user-read-currently-playing
- Press Get Spotify Access Code
- You will be redirected to the authorization page of the app you just created, just click agree
- Copy refresh token and paste inside config.json
- Set mode to "SPOTIFY"
- Restart League of Legends client


### LastFM
- Login in your LastFM account in your browser
- Create a [LastFM API Account](https://www.last.fm/api/account/create)
- Copy the API Key in next screen
- Paste the LastFM API Key and LastFM User in config.json
- Set mode to "LASTFM"
