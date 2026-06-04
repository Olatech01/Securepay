export const COLORS = {
    primary: "#111111",
    secondary: "#666666",
    background: "#FFFFFF",
    surface: "#F7F7F7",
    accent: "#FF4C3B",
    border: "#EEEEEE",
    error: "#FF4444",
};

export const Actions = [
    { id: 1, name: "Money Transfer", icon: "cash-outline", path: "/money" },
    { id: 2, name: "Paybill", icon: "receipt-outline", path: "/paybill" },
    { id: 3, name: "Bank Transfer", icon: "swap-horizontal-outline", path: "/bank-transfer" },
    { id: 4, name: "Withdraw", icon: "wallet-outline", path: "/withdraw" },
];

export const Services = [
    {
        id: 1,
        name: "Recharge",
        icon: "phone-portrait-outline",
    },
    {
        id: 2,
        name: "Charity",
        icon: "heart-outline",
    },
    {
        id: 3,
        name: "Loan",
        icon: "cash-outline",
    },
    {
        id: 4,
        name: "Gifts",
        icon: "gift-outline",
    },
    {
        id: 5,
        name: "Insurance",
        icon: "umbrella-outline",
    },
];

export const RECENT_TRANSFERS = [
    { id: 1, name: "Dr Kamal", icon: require('../assets/images/user.png'), route: "/orders", amount: "$40.00" },
    { id: 2, name: "Jonathan", icon: require('../assets/images/user.png'), route: "/addresses", amount: "$25.00" },
    { id: 4, name: "Taofeeqat", icon: require('../assets/images/user.png'), route: "/", amount: "$10.00" },
    { id: 5, name: "Mustapha", icon: require('../assets/images/user.png'), route: "/", amount: "$50.00" },
];


export const bills = [
    { id: "internet", name: "Internet Bill", icon: "wifi-outline", color: "#51D7B4" },
    { id: "electricity", name: "Electricity Bill", icon: "flash-outline", color: "#FF6363" },
    { id: "water", name: "Water Bill", icon: "water-outline", color: "#456EFE" },
    { id: "other", name: "Other", icon: "grid-outline", color: "#8E949A" },
];


export const BANk_LISTS = [
    {
        id: 1,
        name: "Byline Bank",
        icon: require('../assets/images/byline.png')
    },
    {
        id: 2,
        name: "Shamrack Bank",
        icon: require('../assets/images/shamrack.png')
    },
    {
        id: 3,
        name: "M&T Bank",
        icon: require('../assets/images/mt.png')
    },
    {
        id: 4,
        name: "Truist Financial",
        icon: require('../assets/images/trust.png')
    },
]

export const getStatusColor = (status: string) => {
    switch (status) {
        case "placed":
            return "bg-yellow-50 text-yellow-900";
        case "processing":
            return "bg-indigo-50 text-indigo-900";
        case "shipped":
            return "bg-purple-50 text-purple-900";
        case "delivered":
            return "bg-green-50 text-green-900";
        case "cancelled":
            return "bg-red-50 text-red-900";
        default:
            return "bg-gray-50 text-gray-900";
    }
};
