# 🕒 Final Countdown

This project was created as part of a **Udemy course** exercise.

It is a simple **Countdown Challenge App**, where the user can start and stop a timer based on a given time limit.  
When the timer reaches zero (or the user manually stops it), a **Toast notification** is shown using **React Portals**
with remaining time and a score system.

---

## 🚀 Technologies and Concepts Practiced

- **React** (Functional Components)
- **React Hooks**:
  - `useState`
  - `useRef`
- **React Portals** (`ReactDOM.createPortal`)
- **Timer control** with `setInterval` and `clearInterval`
- **Direct DOM access** using refs
- **Conditional rendering** in React

---

## 📂 Project Structure

```
/src
  ├── App.jsx
  ├── TimerChallenge.jsx
  ├── ResultModal.jsx
  ├── Toast.jsx
  ├── index.js
  └── index.css
/public
  └── index.html
package.json
README.md
.gitignore
```


## 🛠 How to Run Locally

1. Clone the repository:

    ```
    git clone https://github.com/shefket-mustafa/Final-countdown.git
    ```

2. Navigate into the project directory:

    ```
    cd Final-countdown
    ```

3. Install the dependencies:

    ```
    npm install
    ```

4. Start the development server:

    ```
    npm run dev
    ```

## 📚 What I Learned

- How to use **`useRef`** to interact with timers and DOM elements.
- How to create **Portals** to render components outside the default app DOM tree.
- How to manage and control UI state with **React Hooks**.
- How to trigger side effects (like showing/hiding Toasts) after user actions.

---

## 🎯 Project Goals

- Practice **React refs** for controlling non-rendered values.
- Understand how **Portals** allow rendering React components in different parts of the DOM.
- Improve React fundamentals like hooks, event handlers, and conditional rendering.

---
