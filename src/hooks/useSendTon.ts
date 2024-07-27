import { Address, OpenedContract, toNano } from "ton-core";
import { SendLightContract, SendTon } from "../wrappers/SendLightContract";
import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonClient } from "./useTonClient";
import { useTonConnect } from "./useTonConnect";
import { SwapTonContract } from "../wrappers/SwapTonContract";


export function useSendTonContract(){
    const {client} = useTonClient()
    const {sender} = useTonConnect()
    const sendTonContract = useAsyncInitialize(async()=>{
        if(!client) return;

        const contract = SendLightContract.fromAddress(Address.parse("EQCKNM8n6H4tJoUEKrFnVbEgU7xaco7eYv_i5XI7aKyzR1r2"))
        return client.open(contract) as OpenedContract<SwapTonContract>
    }, [client])
    

    return {
        sendTon: () => {
        const message: SendTon = {
            $$type: "SendTon",
            amountTon: toNano("1.0")
        }
        sendTonContract?.send(sender, {
            value: toNano("1.05")
        }, message)
        }
    }
}