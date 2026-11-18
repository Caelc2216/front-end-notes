import type { User } from "../types/auth";

export const users: User[] = [
    {
        id: 1,
        username: 'WeaponX',
        password: '1234',
        roles: ['student']
    },
    {
        id: 2,
        username: 'ProfessorX',
        password: '1234',
        roles: ['student', 'instructor']
    },
]