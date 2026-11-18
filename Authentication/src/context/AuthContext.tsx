import { createContext } from "react";
import type {User} from '../types/auth'

type AuthContextType = {
    currentUser: User | null;
    login: (username: string, password: string) => boolean;
    logour: ()=>void;
};

export const AuthContext = createContext<AuthContextType | null>(null);