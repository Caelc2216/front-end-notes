type IconProps = { className?: string }

// Shared settings so every icon matches: 16px, stroke uses the current text color
const base = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
}

// Total employees
export function UserIcon({ className }: IconProps) {
    return (
        <svg {...base} className={className}>
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
        </svg>
    )
}

// Active projects
export function ProjectsIcon({ className }: IconProps) {
    return (
        <svg {...base} className={className}>
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M8 9h8M8 13h8M8 17h5" />
        </svg>
    )
}

// Tasks completed
export function CheckIcon({ className }: IconProps) {
    return (
        <svg {...base} className={className}>
            <path d="M5 12l5 5L19 7" />
        </svg>
    )
}

// Pending reviews
export function AlertIcon({ className }: IconProps) {
    return (
        <svg {...base} className={className}>
            <path d="M12 6v8" />
            <path d="M12 18h.01" />
        </svg>
    )
}
