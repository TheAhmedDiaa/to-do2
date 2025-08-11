# Do-Me App

A modern, interactive to-do list application built with **React**, **Vite**, and **Tailwind CSS**. The Do-Me App features beautiful animations, keyboard navigation, and a user-friendly interface for managing your daily tasks.

---

## Features

- **Task Management:** Add, remove, mark as done, and reorder tasks.
- **Date & Time:** Assign a date and time to each task.
- **Animated UI:** Smooth, modern animations using GSAP and Framer Motion.
- **Keyboard Navigation:** Navigate and reorder tasks using your keyboard.
- **Dialog Popups:** Friendly modal dialogs for errors and feedback.
- **Responsive Design:** Looks great on all devices with Tailwind CSS.
- **Accessibility:** Semantic HTML and ARIA features for better accessibility.

---

## Unique Aspects

- **Rich Animations:** Custom animated components like `SplitText` (animated header), `AnimatedList` (animated, keyboard-navigable task list), and `StarBorder` (animated button border).
- **Reusable Components:** Modular structure for easy maintenance and extension.
- **Dialog Feedback:** Uses modal dialogs for user feedback instead of browser alerts.

---

## Project Structure

```
To-Do2/
├── public/                 # Static assets
├── src/
│   ├── Animations/         # Reusable animation components
│   ├── Components/         # UI components (AnimatedList, SplitText, etc.)
│   ├── dialog/             # Dialog/modal components
│   ├── input/              # Input and form logic
│   ├── TextAnimations/     # Text animation components
│   ├── App.jsx             # Main app component
│   ├── App.css             # App-level styles
│   ├── index.css           # Global styles
│   └── main.jsx            # Entry point
├── index.html              # HTML template
├── package.json            # Project dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

---

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the development server:**
   ```sh
   npm run dev
   ```

3. **Build for production:**
   ```sh
   npm run build
   ```

---

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GSAP](https://greensock.com/gsap/) & [Framer Motion](https://www.framer.com/motion/) for animations

---

## Credits

- Animated components inspired by [reactbits.dev](https://reactbits.dev/default/).
- Built with the [Vite React template](https://vitejs.dev/guide/).

---

## License

This project is licensed under the MIT License.
