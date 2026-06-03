import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    useCallback,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "@/constants/api";

// --- Types ---
interface User {
    _id: string;
    name: string;
    email: string;
    role: string;
    isVerified: boolean;
}

interface UserContextType {
    user: User | null;
    token: string | null;
    loading: boolean;
    login: (token: string, user: User) => Promise<void>;
    logout: () => Promise<void>;
    refreshUser: () => Promise<void>;
}

// --- Context ---
const UserContext = createContext<UserContextType | undefined>(undefined);

// --- Provider ---
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    // Fetch user from API using saved token
    const fetchUser = useCallback(async (savedToken: string) => {
        try {
            const response = await api.get("/auth/user", {
                headers: { Authorization: `Bearer ${savedToken}` },
            });
            setUser(response.data.user);
        } catch {
            // Token is invalid or expired — clear everything
            await AsyncStorage.removeItem("token");
            setToken(null);
            setUser(null);
        }
    }, []);

    // On app start, check for saved token
    useEffect(() => {
        const init = async () => {
            try {
                const savedToken = await AsyncStorage.getItem("token");
                if (savedToken) {
                    setToken(savedToken);
                    await fetchUser(savedToken);
                }
            } finally {
                setLoading(false);
            }
        };
        init();
    }, []);

    // Call this after a successful login
    const login = async (newToken: string, newUser: User) => {
        await AsyncStorage.setItem("token", newToken);
        setToken(newToken);
        setUser(newUser);
    };

    // Call this to log out
    const logout = async () => {
        await AsyncStorage.removeItem("token");
        setToken(null);
        setUser(null);
    };

    // Call this to manually re-fetch the user (e.g. after profile update)
    const refreshUser = async () => {
        if (token) await fetchUser(token);
    };

    return (
        <UserContext.Provider
            value={{ user, token, loading, login, logout, refreshUser }}
        >
            {children}
        </UserContext.Provider>
    );
};

// --- Hook ---
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error("useUser must be used within a UserProvider");
    return context;
};