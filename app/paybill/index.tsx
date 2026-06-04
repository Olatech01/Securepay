import Confirmation from "@/components/Confirmation";
import Paybill from "@/components/Paybill";
import Success from "@/components/Success";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// import Paybill from "@/components/bills/Paybill";
// import Confirmation from "@/components/bills/Confirmation";
// import Success from "@/components/bills/Success";

type BillFormData = {
  billId: string;
  formValues: Record<string, string>;
};

export default function Bills() {
  const [step, setStep] = useState(1);
  const [billData, setBillData] = useState<BillFormData | null>(null);

  const handlePaybillContinue = (billId: string, formValues: Record<string, string>) => {
    setBillData({ billId, formValues });
    setStep(2);
  };

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-white">
      {step === 1 && <Paybill onContinue={handlePaybillContinue} />}
      {step === 2 && <Confirmation data={billData} onContinue={() => setStep(3)} />}
      {step === 3 && <Success />}
    </SafeAreaView>
  );
}