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
cloud-chain/
├── app/                       # App Router directory for routes
│   ├── (auth)/                # Authentication routes (login, register)
│   ├── dashboard/             # Main dashboard for logged-in users
│   │   ├── upload/            # Upload file interface
│   │   └── settings/          # User settings and profile management
│   └── page.tsx              # Root landing page
│
├── components/                # Reusable UI components
│   ├── ui/                    # Shadcn-based UI components
│   ├── navbar.tsx            # Navigation bar
│   ├── file-card.tsx         # File display card
│   └── sidebar.tsx           # Sidebar for navigation
│
├── lib/                       # Utility libraries
│   ├── supabase.ts           # Supabase client and config
│   ├── clerk.ts              # Clerk auth helpers
│   ├── ipfs.ts               # IPFS integration functions
│   └── utils.ts              # Generic helper functions
│
├── actions/                   # Server actions (Next.js server functions)
│   ├── file-actions.ts       # Upload, delete, and file management actions
│   └── user-actions.ts       # User profile and settings actions
│
├── hooks/                     # Custom React hooks
│   └── useUpload.ts          # Hook to handle file uploads
│
├── public/                    # Static assets
│   └── logo.png              # Logo and other public images
│
├── styles/                    # Global and component styles
│   └── globals.css           # Tailwind base styling
│
├── .env.local                 # Local environment variables
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── next.config.js            # Next.js configuration
├── package.json              # Project metadata and dependencies
└── README.md                 # Project documentation

```

---

## 🛠️ Installation

```bash
git clone https://github.com/cpvasanth/cloud-chain.git
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

Made with ❤️ by @Cpvasanth
