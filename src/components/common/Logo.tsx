export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Ocean wave base */}
      <path
        d="M4 44c6-6 12-2 18-6s10-8 18-4 12 6 20 2"
        stroke="url(#wave1)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M4 50c6-4 14 0 20-4s10-6 16-2 12 4 20 0"
        stroke="url(#wave2)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      {/* Sun / horizon */}
      <circle cx="42" cy="22" r="10" fill="url(#sun)" />
      {/* Sailboat silhouette */}
      <path
        d="M22 38l-4 0 6-18 2 0z"
        fill="url(#sail1)"
      />
      <path
        d="M24 20l8 18h-8z"
        fill="url(#sail2)"
        opacity="0.85"
      />
      <rect x="17" y="38" width="14" height="2.5" rx="1.25" fill="#0e7490" />
      {/* Gradients */}
      <defs>
        <linearGradient id="wave1" x1="4" y1="40" x2="60" y2="40">
          <stop stopColor="#0891b2" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
        <linearGradient id="wave2" x1="4" y1="48" x2="60" y2="48">
          <stop stopColor="#22d3ee" />
          <stop offset="1" stopColor="#67e8f9" />
        </linearGradient>
        <radialGradient id="sun" cx="42" cy="22" r="10" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fbbf24" />
          <stop offset="1" stopColor="#f97316" />
        </radialGradient>
        <linearGradient id="sail1" x1="22" y1="20" x2="22" y2="38">
          <stop stopColor="#f0f9ff" />
          <stop offset="1" stopColor="#bae6fd" />
        </linearGradient>
        <linearGradient id="sail2" x1="28" y1="20" x2="28" y2="38">
          <stop stopColor="#0891b2" />
          <stop offset="1" stopColor="#0e7490" />
        </linearGradient>
      </defs>
    </svg>
  )
}
