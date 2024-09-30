# Music Player

## Overview
The Music Player is a simple web application that allows users to play and manage a small selection of music tracks. The app features an intuitive user interface for controlling playback, displaying track information, and navigating between songs.

## Features
- Play, pause, and skip through a playlist of songs.
- Displays the current track's title, artist, and album art.
- Shows the current time and total duration of the track.
- Interactive progress bar to seek through the track.
- Responsive design that works on various devices.

## Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/manojk0303/Music-app.git
```

### 2. Navigate to the project directory
```bash
cd Music-app
```

### 3. Open `index.html` in your browser
No additional setup is required; the app works with local files for music and images.

## Usage
- Upon loading the page, the first song in the playlist is displayed with its details.
- Click on the play button to start playing the track.
- Use the previous and next buttons to navigate through the playlist.
- The progress bar allows you to see the current playback position and seek to a different part of the track.

## Technologies Used
- **HTML5**, **CSS3**, and **JavaScript**
- **Font Awesome** for icons

## Music Array
The app uses a predefined array of music objects, each containing:
- `name`: The file name of the music track (without extension).
- `musicName`: The display name of the track.
- `artistName`: The name of the artist.

### Example:
```javascript
const musicArray = [
    {
        name: "littleDoYouKnow",
        musicName: "Little Do You Know",
        artistName: "Alex & Seirra"
    },
    {
        name: "heatWaves",
        musicName: "Heat Waves",
        artistName: "Glass Animals"
    },
    // More songs...
];
```

## Live Demo
The application is deployed and available [here](https://manojk0303.github.io/Music-app/).

## Screenshots
![image](https://github.com/user-attachments/assets/028a4472-7a30-4b7a-8466-d0bc259d3830)
![image](https://github.com/user-attachments/assets/0cc757a0-d4a2-49fb-bca6-87d85bf79e65)


## License
This project is open-source and available under the MIT License.
