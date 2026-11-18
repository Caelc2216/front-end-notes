export type Role = 'student' | 'instructor' | 'admin';

export type User = {
    id: number,
    username: string,
    password: string,
    roles: Role[]
}