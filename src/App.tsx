import React from 'react';
import { TonConnectButton } from '@tonconnect/ui-react'
import {useSendTonContract } from '../src/hooks/useSendTon'
import './App.css'
import "@twa-dev/sdk"

function App() {
  const {sendTon} = useSendTonContract();
  
  return (
    <>
    <div>
      <TonConnectButton/>
    </div>
    <div>
      <h1> Test APP </h1>
      <p> OURO </p>
    </div>
    <div>
      <button onClick={sendTon}>
        SEND
      </button>
    </div>
    </>
  )
}

export default App
