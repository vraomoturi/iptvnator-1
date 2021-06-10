# IPTVnator

IPTV 를 볼 수 있는 프로그램입니다. 

프로그램을 사용하려면 아래 채널 파일을 다운로드 해야 TV를 볼 수 있습니다. 

![app](app.png)

## 채널 추가

아래 링크에서 채널 파일을 다운로드 후 아래 이미지와 같이 원하는 채널을 추가하세요.

 * IPTV 채널(m3u) 압축 파일 : [free_iptv_m3u.zip](https://github.com/hamonikr/iptvnator/releases/download/20210610/free_iptv_m3u.zip)
 * IPTV 채널 파일 github : https://github.com/Free-IPTV/Countries

![add_channel](add_channel.png)

# Install

## HamoniKR (>= 3.0)
```
sudo apt update
sudo apt install iptvnator
```

## Other Ubuntu based distro
```
# add hamonikr apt repo
wget -qO- https://pkg.hamonikr.org/add-hamonikr.apt | sudo -E bash -

# install
sudo apt install iptvnator
```

이 프로젝트는 아래 프로젝트의 포크입니다.

 * upstream : https://github.com/4gray/iptvnator

**IPTVnator** is a video player application that provides support for the playback of IPTV playlists (m3u, m3u8). The application allows to import playlists by using remote URLs or per file upload from the file system. Additionally there is a support of EPG information XMLTV-based which can be provided by URL.

The application is an cross-platform and open source project based on Electron and Angular.

![IPTVnator: Channels list, player and epg list](./iptv-dark-theme.png)

## Features

- M3u and M3u8 playlists support 📺
- Upload playlists from a file system 📂
- Add remote playlists via URL 🔗
- Playlists auto-update feature
- Open playlist from the file system
- Search for channels 🔍
- EPG support (TV Guide) with detailed info
- TV archive/catchup/timeshift
- Group-based channels list
- Save channels as favorites
- HTML video player with hls.js support or Video.js based player
- Internalization, currently 3 languages are supported (en, ru, de)
- Set custom "User Agent" header for a playlist
- Light and Dark theme

## Screenshots:

| Welcome screen: Playlists overview                           | Main player interface with channels sidebar and video player                |
| :----------------------------------------------------------: | :-------------------------------------------------------: |
| ![Welcome screen: Playlists overview](./playlists.png)       | ![Sidebar with channel and video player](./iptv-main.png) |
| Welcome screen: Add playlist via file upload                | Welcome screen: Add playlist via URL                      |
| ![Welcome screen: Add playlist via file upload](./iptv-upload.png) | ![Welcome screen: Add playlist via URL](./upload-via-url.png)             |
| EPG Sidebar: TV guide on the right side                | General application settings
| ![EPG: TV guide on the right side](./iptv-epg.png) | ![General app settings](./iptv-settings.png) |
| Playlist settings                |
| ![Playlist settings](./iptv-playlist-settings.png) |  |

*Note: First version of the application which was developed as a PWA is available in an extra git branch.*


## How to build

Requirements: node.js with npm.

1. Clone this repository and install all project dependencies with:
   ```
   $ npm install
   ```

2. To build the application on your local machine use one of the following commands:
   ```
   # linux
   $ npm run electron:build:linux
   ```

   ```
   #mac
   $ npm run electron:build:mac
   ```

   ```
   # windows
   $ npm run electron:build:windows
   ```

