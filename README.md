# Submit Form with useRef

---
# Project Setup

## 1️⃣ Create the project
```bash
npm create vite@latest Submit-Form-with-useRef
```
## 2️⃣ Move into the project folder
```bash
cd Submit-Form-with-useRef
```
## 3️⃣ Install dependencies
```bash
npm install
```
## 4️⃣ Install Tailwind CSS and Vite plugin
```bash
npm install tailwindcss @tailwindcss/vite
```
##  ⚙️ Configure Vite
Edit your vite.config.js file:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), react()],
})
```
## 🎨 Configure Tailwind
In your index.css, import Tailwind:
```css
@import "tailwindcss";
```
## 🖥️ Run the Project
Start the development server:
```bash
npm run dev
```
---
# 💡 Technologies Used

⚛️**React**

⚡ **Vite**

🎨 **Tailwind CSS**

🧩 **useRef Hook**