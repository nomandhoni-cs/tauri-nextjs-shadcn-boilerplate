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

# Contribution Guide

Contributions are welcome! Feel free to open issues or submit pull requests.

Contributions for improving the dashboard, enhancing customizability, and adding new languages for multilingual support are particularly appreciated.

### How to Contribute:

1. **Fork** the repository to your GitHub account.

2. **Clone** the repository to your local machine:
   ```console
   git clone https://github.com/yourW-username/blink-eye.git
   ```
3. **Create a new branch** for your changes:
   ```console
   git checkout -b my-branch
   ```
4. **Make changes** to the code.

5. **Commit** your changes:
   ```console
   git commit -m "commit message"
   ```
6. **Push** your changes to the remote repository:
   ```console
   git push origin my-branch
   ```
7. **Create a pull request** on GitHub.


## Application Setup

### Prerequisites

1. **Tauri** (for building the desktop app)
4. **Rust** (for building the desktop app)
3. **Cargo** (for package management)
2. **Bun** (for package management)

### To build and run Blink Eye (Desktop App):
1. **Install JavaScript dependencies:**

    ```console
    bun install
    ```

2. **Install all Cargo dependencies:**

    ```console
    cargo install --path src-tauri
    ```

3. **Run the app in development mode:**

    ```console
    bun run tauri dev
    ```

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
bun run tauri build
```

Or with npm:

```bash
npm run tauri build
```

To run in release mode:

```bash
bun run tauri dev
```


## 🤝 Contributing

PRs are welcome! Feel free to open issues or suggest improvements.

---

## 📄 License

MIT © [nomandhoni-cs](https://github.com/nomandhoni-cs)

