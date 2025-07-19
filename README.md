
# 🎬 Advanced Custom HTML5 Video Player

The **Advanced Custom HTML5 Video Player** is a fully responsive, feature-rich, and customizable multimedia playback interface built entirely using **HTML**, **CSS**, and **JavaScript**. This video player replicates and even enhances traditional video players with interactive features like custom play/pause controls, full-screen toggle, theater mode, Picture-in-Picture (PiP), keyboard shortcuts, volume/mute, and sleek modern styling.

This project is designed to provide both functionality and aesthetics, making it suitable for both **educational use** and **real-world deployment** in web applications.

---

## 📂 Project Structure

```
video-player/
├── index.html      # The main HTML structure
├── style.css       # Custom CSS for layout and visual styling
└── script.js       # JavaScript logic for all video player functionalities
```

---

## 💡 Key Features

| Feature                     | Description                                                              |
| --------------------------- | ------------------------------------------------------------------------ |
| ▶️ Custom Play/Pause        | Fully styled play/pause toggle button                                    |
| 🔊 Mute/Unmute              | Toggle sound with visual icon updates                                    |
| 🎚️ Volume Slider           | Interactive volume control slider                                        |
| ⏩ Seek Bar                  | Lets user skip to any part of the video timeline                         |
| ⏲️ Time Display             | Real-time current time and total duration display                        |
| 🖥️ Fullscreen Mode         | Enter and exit fullscreen with one click or keyboard                     |
| 🎬 Theater Mode             | Toggle a darkened theme for immersive viewing                            |
| 📺 Picture-in-Picture (PiP) | Supports PiP for multitasking while video plays in a small corner window |
| ⌨️ Keyboard Shortcuts       | Full keyboard support for accessibility and efficiency                   |
| 🧠 Dynamic UI Updates       | Buttons and progress bars reflect video status in real-time              |
| 📱 Responsive Design        | Works well across desktops, tablets, and mobile devices                  |

---

## 🌐 Live Demo

A live demo is available with the built-in W3Schools video (`mov_bbb.mp4`) for demonstration. You can replace the video URL or use a local video input field for custom uploads.

---

## 📜 Technologies Used

| Technology | Purpose                              |
| ---------- | ------------------------------------ |
| HTML5      | Structure and `<video>` tag usage    |
| CSS3       | Styling, transitions, responsiveness |
| JavaScript | Video logic and event handling       |

---

## 🔧 Functional Components

### `index.html` (HTML Structure)

* Embeds the `<video>` element with custom `controls` div.
* Contains visual buttons (play, pause, fullscreen, theater, PiP).
* Volume control slider and seek bar included.
* Time and progress display containers.

### `style.css` (Styling & Layout)

* Applies a modern dark-themed UI using **glassmorphism** and **linear gradients**.
* Styles control buttons, sliders, layout spacing.
* Responsive via media queries to support all device widths.
* Animated progress bar to track playback visually.

### `script.js` (Functionality & Logic)

Handles full interactivity through JavaScript events:

* `play/pause` toggle via button and spacebar.
* `volume` control via slider and up/down arrows.
* `seek bar` and `progress bar` update dynamically as video plays.
* `fullscreen` toggle with `f` key.
* `mute/unmute` toggle with `m` key.
* `PiP` functionality with graceful fallback.
* `theater mode` for a dark, immersive environment.
* `ArrowLeft/Right` keys for backward/forward skip.
* `loadedmetadata` event for proper duration display.
* `change` listener for loading local video files (supports drag-and-drop via file input).

---

## 📦 How to Use This Project

### ▶️ Run Locally

1. **Download** or **clone** the repository.
2. Open `index.html` in your preferred browser.
3. Click play or interact with controls and keyboard shortcuts.
4. Optional: Modify the `src` attribute in `<video>` or use `<input type="file">` (already partially supported in JS).

---

## 🎯 Supported File Formats

* `.mp4`, `.webm`, `.ogg` (HTML5-supported formats)
* Ensure browser compatibility for advanced features like PiP and fullscreen APIs.

---

## 🖥️ Keyboard Shortcuts (Quick Reference)

| Key             | Action             |
| --------------- | ------------------ |
| `Space`         | Play / Pause       |
| `f`             | Toggle Fullscreen  |
| `m`             | Mute / Unmute      |
| `→` Arrow Right | Forward +5 seconds |
| `←` Arrow Left  | Rewind -5 seconds  |
| `↑` Arrow Up    | Volume Up          |
| `↓` Arrow Down  | Volume Down        |

---

## 🎨 Customization Ideas

* Replace icons with SVGs or animated Lottie files.
* Add video playlist support.
* Save playback position using `localStorage`.
* Theme switcher (light/dark mode).
* Support captions/subtitles (.vtt).
* Add playback speed controls.
* Add rewind/forward 10s buttons.

---

## ⚠️ Limitations

* Requires modern browser support (for PiP, Fullscreen APIs).
* Local video upload (`input type="file"`) is referenced but not fully integrated in UI.
* No download protection or DRM – intended for educational/media player use.

---

## ✅ Best For

* Learning advanced DOM manipulation.
* Creating multimedia websites or blogs.
* Embedding into e-learning or training platforms.
* Replacing the default `<video>` tag UI with a modern version.

---

## 🧪 Test & Compatibility

✅ Tested on:

* Google Chrome (latest)
* Microsoft Edge
* Firefox (basic features, some limitations with PiP)
* Safari (with minor layout fixes)

---

## 🙋 FAQs

**Q: Can I use my own video?**
Yes, either replace the `src` in the HTML or implement a file input like drag-and-drop. JS already includes partial support.

**Q: Is this open source?**
Yes! Free to use, modify, and distribute with credit.

**Q: Does it work on mobile?**
Yes, fully responsive design adapts to mobile viewports.

---

## 🧑‍💻 Author

**Rakesh L N**
💼 Frontend Developer | 📧 \[[YourEmail@example.com](mailto:YourEmail@example.com)]
🔗 \[GitHub] | \[LinkedIn] | \[Portfolio if any]

---

## 📜 License

This project is open-source and licensed under the **MIT License**. You're free to use, modify, distribute, and even commercialize it, provided attribution is given.

