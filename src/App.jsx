import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider, WalletMultiButton, WalletDisconnectButton } from '@solana/wallet-adapter-react-ui'
import "@solana/wallet-adapter-react-ui/styles.css"

import { AirDrop } from './components/airDrop'
import { ShowBalance } from './components/showBalance'
import { SendToken } from './components/sendToken'
import { SignMessage } from './components/signMessage'

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #4b0082, #000000, #1c1c1c)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        color: "white",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(15px)",
          borderRadius: "20px",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4)",
          padding: "2.5rem",
          border: "1px solid rgba(255, 255, 255, 0.15)",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "800",
            textAlign: "center",
            marginBottom: "2rem",
            background: "linear-gradient(90deg, #00ffff, #ff00ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
           Solana Wallet Playground
        </h1>

        <ConnectionProvider endpoint="http://api.devnet.solana.com">
          <WalletProvider wallets={[]} autoConnect>
            <WalletModalProvider>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "2rem",
                }}
              >
                <WalletMultiButton
                  style={{
                    padding: "0.6rem 1.2rem",
                    borderRadius: "12px",
                    fontWeight: "600",
                    color: "white",
                    background: "linear-gradient(90deg, #00c853, #00b0ff)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = "scale(1.05)"
                    e.target.style.boxShadow = "0 0 15px rgba(0, 192, 255, 0.6)"
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "scale(1)"
                    e.target.style.boxShadow = "none"
                  }}
                />

                <WalletDisconnectButton
                  style={{
                    padding: "0.6rem 1.2rem",
                    borderRadius: "12px",
                    fontWeight: "600",
                    color: "white",
                    background: "linear-gradient(90deg, #ff1744, #ff9100)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = "scale(1.05)"
                    e.target.style.boxShadow =
                      "0 0 15px rgba(255, 87, 34, 0.6)"
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "scale(1)"
                    e.target.style.boxShadow = "none"
                  }}
                />
              </div>

              <div style={{ display: "grid", gap: "1.5rem" }}>
                <div
                  style={{
                    padding: "1.5rem",
                    borderRadius: "15px",
                    background: "rgba(0, 0, 0, 0.5)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)"
                    e.currentTarget.style.boxShadow =
                      "0 6px 20px rgba(0, 0, 0, 0.6)"
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                >
                  <AirDrop />
                </div>

                <div
                  style={{
                    padding: "1.5rem",
                    borderRadius: "15px",
                    background: "rgba(0, 0, 0, 0.5)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)"
                    e.currentTarget.style.boxShadow =
                      "0 6px 20px rgba(0, 0, 0, 0.6)"
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                >
                  <ShowBalance />
                </div>

                <div
                  style={{
                    padding: "1.5rem",
                    borderRadius: "15px",
                    background: "rgba(0, 0, 0, 0.5)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)"
                    e.currentTarget.style.boxShadow =
                      "0 6px 20px rgba(0, 0, 0, 0.6)"
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                >
                  <SendToken />
                </div>

                <div
                  style={{
                    padding: "1.5rem",
                    borderRadius: "15px",
                    background: "rgba(0, 0, 0, 0.5)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)"
                    e.currentTarget.style.boxShadow =
                      "0 6px 20px rgba(0, 0, 0, 0.6)"
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                >
                  <SignMessage />
                </div>
              </div>
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </div>
    </div>
  )
}

export default App
