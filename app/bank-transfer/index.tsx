import AccountDetails from "@/components/Bank/AccountDetails";
import BankList from "@/components/Bank/BankList";
import Confirmation from "@/components/Bank/Confirmation";
import Reconfirmation from "@/components/Bank/Reconfirmation";
import Success from "@/components/Bank/Success";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";



export default function BankTransfer() {
    const [step, setStep] = useState(1)
    return (
        <SafeAreaView edges={["top"]} className="flex-1 bg-white">
            {step === 1 && <BankList onContinue={() => setStep(2)}/> }
            {step === 2 && <AccountDetails onContinue={() => setStep(3)} />}
            {step === 3 && <Confirmation onContinue={() => setStep(4)}/>}
            {step === 4 && <Reconfirmation onContinue={() => setStep(5)}/>}
            {step === 5 && <Success />}
        </SafeAreaView>
    )
}