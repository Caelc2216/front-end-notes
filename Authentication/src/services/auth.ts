import { users } from "../data/user";
import type { User } from "../types/auth";

export function login(
    username: string,
    password: string,
): User | null {
    const user = users.find(
        g => g.username == username && g.password == password
    );
    
    return user ?? null;
}