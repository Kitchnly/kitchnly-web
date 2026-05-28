type DoodleProps = { className?: string; 'aria-hidden'?: boolean };

const stroke = 'currentColor';

export function ChiliDoodle({ className, ...rest }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden {...rest}>
      <path
        d="M14 46c10-2 22-8 30-20 1-2 4-2 5 0 2 5-2 14-10 21-9 7-20 8-25 5-2-1-2-4 0-6z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44 26c2-3 6-7 12-9"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M48 22l4-4" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function RollingPinDoodle({ className, ...rest }: DoodleProps) {
  return (
    <svg viewBox="0 0 80 40" fill="none" className={className} aria-hidden {...rest}>
      <rect
        x="14"
        y="12"
        width="52"
        height="16"
        rx="6"
        stroke={stroke}
        strokeWidth="2"
      />
      <path
        d="M14 20H4M66 20h10"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M22 14v12M30 14v12M38 14v12"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export function HerbDoodle({ className, ...rest }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden {...rest}>
      <path
        d="M32 56c0-18 6-32 18-44"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M32 40c-4-4-2-10 4-12M32 30c-3-4 0-9 6-10M32 22c-2-4 2-8 8-8"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M32 44c4-4 10-2 12 4M32 32c4-3 9 0 10 6M32 24c4-2 8 2 8 8"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SteamDoodle({ className, ...rest }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden {...rest}>
      <path
        d="M18 54c0-6 6-8 6-14s-6-8-6-14 6-8 6-14"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M40 54c0-6 6-8 6-14s-6-8-6-14 6-8 6-14"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TomatoDoodle({ className, ...rest }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden {...rest}>
      <circle cx="32" cy="38" r="18" stroke={stroke} strokeWidth="2" />
      <path
        d="M24 22c2-4 6-6 8-6s6 2 8 6"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M32 14v6M24 18l2 4M40 18l-2 4"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SpoonDoodle({ className, ...rest }: DoodleProps) {
  return (
    <svg viewBox="0 0 32 80" fill="none" className={className} aria-hidden {...rest}>
      <ellipse cx="16" cy="14" rx="10" ry="12" stroke={stroke} strokeWidth="2" />
      <path
        d="M16 26v48"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SparkleDoodle({ className, ...rest }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden {...rest}>
      <path
        d="M12 2v8M12 14v8M2 12h8M14 12h8"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
