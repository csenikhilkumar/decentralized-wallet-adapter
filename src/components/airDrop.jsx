import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function AirDrop() {
    const { connection } = useConnection();
    const wallet = useWallet();

    async function onClick() {
        let amount = document.getElementById("amount").value;
        await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
        alert("Airdropped " + amount + " SOL to " + wallet.publicKey.toBase58());
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                marginTop: "20px",
            }}
        >
            <input
                id="amount"
                type="text"
                placeholder="Enter SOL amount"
                style={{
                    padding: "10px",
                    border: "2px solid #4cafef",
                    borderRadius: "8px",
                    width: "200px",
                    fontSize: "16px",
                    outline: "none",
                }}
            />
            <button
                onClick={onClick}
                style={{
                    padding: "10px 18px",
                    border: "none",
                    borderRadius: "8px",
                    backgroundColor: "#2196f3",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                }}
            >
                Request Airdrop
            </button>
        </div>
    );
}
