# ☁️ CloudChain

CloudChain is a next-generation hybrid cloud storage platform inspired by Google Drive. It offers secure file storage and management by blending centralized cloud infrastructure with decentralized storage solutions like IPFS/Filecoin. Built with a modern tech stack — React 19, Next.js 15, Appwrite, Tailwind CSS, ShadCN, and TypeScript — CloudChain ensures speed, privacy, and scalability for the future of personal and enterprise file storage.

---

## 🚀 Features

* 🔒 **Secure File Upload & Download**
* 🌐 **Hybrid Storage Architecture**

  * Centralized storage via Appwrite
  * Decentralized storage via IPFS/Filecoin *(upgradeable)*
* 🧾 **File Metadata & Management**
* 🎨 **Sleek UI with TailwindCSS & ShadCN**
* ⚙️ **React Server Components (RSC) + App Router (Next.js 15)**
* 🌙 **Dark/Light Theme Toggle (default: Dark)**
* 💾 **Downloadable Resume & GitHub Activity**
* 💬 **Integrated Blog System** *(optional/upgrade)*
* 🔧 **Admin Panel for File Management** *(optional/upgrade)*

---

## 🧱 Tech Stack

| Technology        | Purpose                      |
| ----------------- | ---------------------------- |
| **React 19**      | Frontend UI Components (RSC) |
| **Next.js 15**    | SSR, Routing & API Handling  |
| **TypeScript**    | Static Typing                |
| **Appwrite**      | Auth, Storage & DB Backend   |
| **IPFS/Filecoin** | Decentralized File Storage   |
| **Tailwind CSS**  | Styling Framework            |
| **ShadCN**        | UI Component Library         |
| **Framer Motion** | Smooth Animations            |

---

## 📂 Project Structure

```
cloudchain/
├── app/
│   ├── api/               # API routes
│   ├── dashboard/         # Main dashboard
│   ├── upload/            # Upload logic & forms
│   └── layout.tsx         # Root layout with theme
├── components/            # Reusable UI components
├── lib/                   # Helper functions & utils
├── styles/                # Global styles & theme configs
├── public/                # Static files
├── types/                 # TypeScript interfaces & types
└── README.md              # Project info
```

---

## 🛠️ Installation

```bash
git clone https://github.com/<your-username>/cloudchain.git
cd cloudchain
pnpm install
pnpm dev
```

Make sure your `.env.local` contains:

```
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT_ID=<project_id>
NEXT_PUBLIC_APPWRITE_BUCKET_ID=<bucket_id>
```

> For decentralized storage, you’ll need to run an IPFS node or connect to services like Web3.Storage or NFT.Storage.

---

## 🌐 Deployment

Deploy CloudChain on:

* **Vercel**
* **Netlify**
* **Render**
* Or self-host using Docker *(optional setup)*

---

## 🛡️ Security & Privacy

* Files are **hashed** before storage.
* IPFS ensures content immutability and censorship resistance.
* User authentication and authorization powered by Appwrite.


---

## 🤝 Contributing

We welcome contributors! Fork the repo, create a new branch, and submit a PR.

```bash
git checkout -b feat/your-feature
pnpm dev
```

---

## 🧠 Inspiration

> “A file should live beyond the cloud — decentralized, persistent, and secure.”
> — *CloudChain Vision*

---

## 📜 License

MIT © Vasanthakumar C | CloudChain 2025
