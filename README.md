# 🚀 Solana Wallet DApp

This is a simple decentralized application (DApp) built with **React** and the **Solana Wallet Adapter**.  
It allows users to:

- Connect/disconnect their Solana wallet
- Request SOL airdrops
- Check wallet balance
- Send tokens
- Sign messages

---

## 📌 Features
- **Wallet Connection**: Connect to any Solana-supported wallet (e.g., Phantom, Solflare).  
- **Airdrop Request**: Get free SOL on Devnet for testing.  
- **Balance Display**: View your wallet balance in real time.  
- **Send Tokens**: Transfer SOL to another address.  
- **Sign Message**: Sign and verify messages using your wallet.  

---

## 🛠️ Tech Stack
- **React + Vite** (Frontend Framework)
- **@solana/web3.js** (Solana SDK)
- **@solana/wallet-adapter-react** (Wallet connection & hooks)
- **@solana/wallet-adapter-react-ui** (UI components for wallets)
- **bs58** (Base58 encoding for message signatures)
- **@noble/curves/ed25519** (Signature verification)

---

## 📂 Project Structure
```
src/
 ├── App.jsx              # Main app component
 ├── components/
 │   ├── AirDrop.jsx      # Airdrop SOL
 │   ├── ShowBalance.jsx  # Show wallet balance
 │   ├── SendToken.jsx    # Send SOL tokens
 │   ├── SignMessage.jsx  # Sign and verify messages
 ├── index.css            # Global styles
 └── main.jsx             # Entry point
```

---

## ⚡ Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/solana-wallet-dapp.git
cd solana-wallet-dapp
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Run the Development Server
```bash
npm run dev
```

The app will run at [http://localhost:5173](http://localhost:5173).

---

## 🔑 Wallet Setup
Make sure you have a **Solana wallet** installed (like [Phantom](https://phantom.app/)).  
Switch your wallet to **Devnet** for testing.

---

## 🧪 Usage
1. Click **Connect Wallet** to connect Phantom (or other Solana wallet).  
2. Use **Airdrop** to request free SOL.  
3. Check balance with **Show Balance**.  
4. Use **Send Token** to transfer SOL.  
5. Sign and verify messages with **Sign Message**.  

---

## 🌐 Solana Cluster
This project currently connects to:
```
http://api.devnet.solana.com
```
You can change it to `mainnet-beta` or `testnet` if needed.

---

## 📸 Preview
(You can add a screenshot of your UI here)

---

## 🤝 Contributing
Pull requests are welcome! For major changes, open an issue first to discuss what you’d like to change.

---

## 📜 License
This project is licensed under the MIT License.