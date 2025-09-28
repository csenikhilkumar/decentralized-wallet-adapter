import { useWallet } from "@solana/wallet-adapter-react"
import { ed25519 } from "@noble/curves/ed25519"
import bs58 from "bs58"

export function SignMessage() {
  const { publicKey, signMessage } = useWallet()

  async function onclick() {
    if (!publicKey) throw new Error("⚠️ Wallet not connected (public key required)")
    if (!signMessage) throw new Error("⚠️ Wallet doesn't support message signing")

    const message = document.getElementById("message").value
    if (!message) return alert("⚠️ Please enter a message")

    const encodedMessage = new TextEncoder().encode(message)
    const signature = await signMessage(encodedMessage)

    if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) {
      throw new Error("❌ Message signature invalid")
    }

    alert(`✅ Success!\nMessage signature:\n${bs58.encode(signature)}`)
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
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
        id="message"
        placeholder="Enter your message..."
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
        onClick={onclick}
        style={{
          background: "linear-gradient(90deg, #00c853, #00b0ff)",
          color: "white",
          padding: "0.6rem 1.5rem",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "600",
          fontSize: "1rem",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => {
          e.target.style.transform = "scale(1.05)"
          e.target.style.boxShadow = "0 0 12px rgba(0,192,255,0.6)"
        }}
        onMouseOut={(e) => {
          e.target.style.transform = "scale(1)"
          e.target.style.boxShadow = "none"
        }}
      >
        ✍️ Sign Message
      </button>
    </div>
  )
}
