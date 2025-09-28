import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js"

export function SendToken() {
  const wallet = useWallet()
  const { connection } = useConnection()

  async function sendToken() {
    let to = document.getElementById("to").value.trim()
    let amount = parseFloat(document.getElementById("amount").value)

    if (!wallet.publicKey) return alert("⚠️ Wallet not connected")
    if (!to || isNaN(amount) || amount <= 0) return alert("⚠️ Please enter a valid address and amount")

    try {
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: wallet.publicKey,
          toPubkey: new PublicKey(to),
          lamports: amount * LAMPORTS_PER_SOL,
        })
      )

      await wallet.sendTransaction(transaction, connection)
      alert(`✅ Sent ${amount} SOL to ${to}`)
    } catch (err) {
      alert("❌ Transaction failed: " + err.message)
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1.5rem",
        borderRadius: "12px",
        background: "rgba(0,0,0,0.6)",
        border: "1px solid rgba(255,255,255,0.15)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
        marginTop: "1rem",
      }}
    >
      <input
        type="text"
        id="to"
        placeholder="Recipient Address"
        style={{
          width: "100%",
          padding: "0.6rem 1rem",
          borderRadius: "8px",
          border: "1px solid #555",
          outline: "none",
          fontSize: "1rem",
          background: "rgba(255,255,255,0.1)",
          color: "white",
        }}
      />
      <input
        type="number"
        id="amount"
        placeholder="Amount (SOL)"
        style={{
          width: "100%",
          padding: "0.6rem 1rem",
          borderRadius: "8px",
          border: "1px solid #555",
          outline: "none",
          fontSize: "1rem",
          background: "rgba(255,255,255,0.1)",
          color: "white",
        }}
      />
      <button
        onClick={sendToken}
        style={{
          background: "linear-gradient(90deg, #ff4081, #7c4dff)",
          color: "white",
          padding: "0.7rem 1.5rem",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "600",
          fontSize: "1rem",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => {
          e.target.style.transform = "scale(1.05)"
          e.target.style.boxShadow = "0 0 12px rgba(124,77,255,0.6)"
        }}
        onMouseOut={(e) => {
          e.target.style.transform = "scale(1)"
          e.target.style.boxShadow = "none"
        }}
      >
        🚀 Send Token
      </button>
    </div>
  )
}
