# TwitchSubtitles
Live Subtitles that can be placed on top of a stream. [Github Hosted Link](https://codedigital.github.io/TwitchSubtitles/)
### This website/app does:
- [X] Improve your streams by adding awesome text for your viewers to see what you're saying!
- [X] Record and interpret your voice on a chroma key for ease of use.
- [ ] Enslave Humanity.

## How do you use it?
**Note: This only works on Google Chrome!**
##### 1. Make sure Chrome hardware acceleration is disabled!
##### 2. Go to https://codedigital.github.io/TwitchSubtitles/
##### 3. Allow the website access to your microphone.
##### 4. Start speaking! (It may not always instantly activate. If it doesn't, you may need to reload the page!)

## How does it work?
Making use of the Google speech recognition AI (which is implemented in the p5.js speech library and better explained there), what you say during a livestream or video recording is displayed on a green chroma key screen for your viewers to read. A paragraph (`<p>`) element is changed whenever the speech recognition AI detects that things are being said.

## Libraries Used
- [p5.js](https://p5js.org/)
- [p5.js Speech](http://ability.nyu.edu/p5.js-speech/)

## Special Thanks
- [PixelogicDev](https://www.twitch.tv/pixelogicdev) for inspiring me!
- My family for being cool
