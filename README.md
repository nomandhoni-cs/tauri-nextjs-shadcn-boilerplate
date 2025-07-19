<img width="965" height="701" alt="image" src="https://github.com/user-attachments/assets/2051fe20-2911-47ab-b580-3252775d6fd6" />
# 🚀 Tauri + Next.js + Tailwind + Shadcn + Bun Boilerplate

Cross-platform desktop app boilerplate built using:

- 🦀 [Tauri](https://tauri.app) for native desktop power (macOS, Windows, Linux)
- ⚡ [Next.js](https://nextjs.org) as the frontend framework
- 💨 [Tailwind CSS](https://tailwindcss.com) for styling
- ✨ [Shadcn UI](https://ui.shadcn.com) for beautiful, themeable components
- ⚡️ [Bun](https://bun.sh) for ultra-fast tooling
- 🧪 GitHub Actions for CI/CD on **macOS**, **Windows**, and **Linux**

---

## 🧠 Tech Stack

| Layer      | Tech                                    |
| ---------- | --------------------------------------- |
| Runtime    | [Tauri](https://tauri.app)              |
| Frontend   | [Next.js](https://nextjs.org)           |
| Styling    | [Tailwind CSS](https://tailwindcss.com) |
| Components | [Shadcn UI](https://ui.shadcn.com)      |
| Tooling    | [Bun](https://bun.sh)                   |
| CI/CD      | GitHub Actions (macOS, Windows, Linux)  |
| Language   | TypeScript + Rust                       |

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/nomandhoni-cs/tauri-nextjs-shadcn-boilerplate
cd tauri-nextjs-shadcn-boilerplate
```

### 2. Install dependencies

Using **Bun** (recommended):

```bash
bun install
```

Or use your favorite package manager:

```bash
npm install
# or
pnpm install
# or
yarn
```

### 3. Run in development mode

```bash
bun dev
# or
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser, or view it in the Tauri app window.

---

## 📁 Project Structure

```
.
├── app/                  # Next.js app directory
├── src-tauri/            # Tauri (Rust) backend
├── components/           # UI components (shadcn)
├── public/               # Static assets
├── styles/               # Tailwind CSS
├── .github/workflows/    # Cross-platform CI setup
```

---

## 🧪 GitHub Actions CI/CD

This repo includes a GitHub Actions workflow to build and test on:

- 🍎 macOS
- 🪟 Windows
- 🐧 Linux

Builds are triggered on every push and PR. You can view the workflow file at:

```bash
.github/workflows/tauri.yml
```

You can customize this to add release signing, binary packaging, or auto-publish.

---

## 🌙 Theming

This boilerplate uses `shadcn/ui` and supports:

- Light/dark theme toggle via `ModeToggle`
- Tailwind + Radix for accessible, themeable components
- Uses utility classes like `bg-background`, `text-foreground`, etc.

---

## 🧠 Learn More

- [Tauri Documentation](https://tauri.app/v1/guides/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Shadcn UI Docs](https://ui.shadcn.com)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Bun Documentation](https://bun.sh/docs)

---

## 📦 Build for Production

To build the Tauri app:

```bash
bun run build:tauri
```

Or with npm:

```bash
npm run build:tauri
```

To run in release mode:

```bash
bun run tauri dev --release
```

---

## 🌍 Deploy

This app is built for desktop via Tauri.

However, if you want to deploy the frontend as a static site (for demo purposes), use:

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)

Make sure to export the app properly or configure for static output.

---

## 🤝 Contributing

PRs are welcome! Feel free to open issues or suggest improvements.

---

## 📄 License

MIT © [nomandhoni-cs](https://github.com/nomandhoni-cs)

