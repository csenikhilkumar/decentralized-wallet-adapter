import { useConnection } from "@solana/wallet-adapter-react";
import { useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";



export function ShowBalance(){
    const wallet = useWallet()
    const {connection} = useConnection()

    async function Getbalance (){
        if(wallet.publicKey){
    const balance = await connection.getBalance(wallet.publicKey)
    document.getElementById("balance").innerHTML=balance/LAMPORTS_PER_SOL}
    
        }
        useEffect(()=>{
            Getbalance()
        },[wallet,connection])

    return(
        <div>
            sol balance<span id="balance"></span>
        </div>



    )
}