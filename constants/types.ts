
export type ActionsItemProps = {
    item: { id: string | number; name: string; icon: string };
    isSelected?: boolean;
    onPress?: () => void;
};

export type ServiceItemProps = {
    item: { id: string | number; name: string; icon: string };
    isSelected?: boolean;
    onPress?: () => void;
}

export type HeaderProps = {
    title?: string;
    showBack?: boolean;
    showSearch?: boolean;
    showCart?: boolean;
    showMenu?: boolean;
    showLogo?: boolean;
    showNotification?: boolean;
};

export type FieldConfig = {
    label: string;
    placeholder: string;
    key: string;
    secureTextEntry?: boolean;
    keyboardType?: "default" | "numeric" | "email-address";
    withFingerprint?: boolean;
};

export const fieldConfigs: Record<string, FieldConfig[]> = {
    internet: [
        { label: "Provider Name", placeholder: "e.g. MTN, Airtel, Spectranet", key: "provider" },
        { label: "Account Number", placeholder: "Enter account number", key: "account" },
        { label: "Amount (₦)", placeholder: "0.00", key: "amount", keyboardType: "numeric" },
    ],
    electricity: [
        { label: "Distribution Company", placeholder: "e.g. EKEDC, IKEDC, AEDC", key: "disco" },
        { label: "Meter Number", placeholder: "Enter meter number", key: "meter" },
        { label: "Amount (₦)", placeholder: "0.00", key: "amount", keyboardType: "numeric" },
    ],
    water: [
        { label: "Water Board", placeholder: "e.g. LSWC", key: "board" },
        { label: "Customer ID", placeholder: "Enter customer ID", key: "customerId" },
        { label: "Amount (₦)", placeholder: "0.00", key: "amount", keyboardType: "numeric" },
    ],
    other: [
        { label: "Company Name", placeholder: "Enter company name", key: "company" },
        { label: "Reference Number", placeholder: "Enter reference number", key: "reference" },
        {
            label: "Password",
            placeholder: "Password",
            key: "password",
            secureTextEntry: true,
            withFingerprint: true,
        },
    ],
};
