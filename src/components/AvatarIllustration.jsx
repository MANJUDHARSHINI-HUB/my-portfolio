/**
 * An original, hand-illustrated flat-vector avatar — not a photo, not any
 * real person. Built entirely from shapes/paths so it inherits the site's
 * emerald + copper palette via CSS variables and can be restyled freely.
 *
 * If a real photo is ever added via `profile.photo` in data.js, Hero.jsx
 * swaps this out automatically.
 */
export default function AvatarIllustration({ className = "" }) {
  return (
    <svg
      viewBox="0 0 420 460"
      className={`avatar-illustration ${className}`}
      role="img"
      aria-label="Illustrated avatar representing S. Manju Dharshini, an AI/ML developer working at a laptop"
    >
      <defs>
        <radialGradient id="haloGrad" cx="50%" cy="42%" r="60%">
          <stop offset="0%" stopColor="var(--emerald-bright)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--emerald-bright)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2a2118" />
          <stop offset="100%" stopColor="#171310" />
        </linearGradient>
        <linearGradient id="topGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="var(--emerald)" />
          <stop offset="100%" stopColor="var(--emerald-deep)" />
        </linearGradient>
        <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#caa07a" />
          <stop offset="100%" stopColor="#b78a63" />
        </linearGradient>
        <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1c2620" />
          <stop offset="100%" stopColor="#10160f" />
        </linearGradient>
      </defs>

      {/* Ambient halo behind the figure */}
      <circle cx="210" cy="190" r="190" fill="url(#haloGrad)" />

      {/* Orbit ring accents */}
      <ellipse
        cx="210" cy="185" rx="175" ry="70"
        fill="none" stroke="var(--copper)" strokeOpacity="0.28" strokeWidth="1.2"
        className="avatar-illustration__ring avatar-illustration__ring--a"
      />
      <ellipse
        cx="210" cy="185" rx="150" ry="150"
        fill="none" stroke="var(--emerald-bright)" strokeOpacity="0.18" strokeWidth="1"
        className="avatar-illustration__ring avatar-illustration__ring--b"
      />

      {/* Desk / laptop base */}
      <rect x="95" y="352" width="230" height="14" rx="7" fill="#0d0b09" opacity="0.5" />

      {/* Laptop */}
      <g>
        <rect x="140" y="300" width="140" height="92" rx="8" fill="url(#screenGrad)" stroke="var(--copper)" strokeOpacity="0.4" />
        {/* code lines on screen */}
        <rect x="156" y="316" width="46" height="5" rx="2.5" fill="var(--emerald-bright)" opacity="0.85" />
        <rect x="156" y="328" width="72" height="5" rx="2.5" fill="var(--copper-bright)" opacity="0.7" />
        <rect x="156" y="340" width="58" height="5" rx="2.5" fill="#f5f1ea" opacity="0.5" />
        <rect x="156" y="352" width="34" height="5" rx="2.5" fill="var(--emerald-bright)" opacity="0.65" />
        <rect x="156" y="364" width="64" height="5" rx="2.5" fill="#f5f1ea" opacity="0.35" />
        <path d="M140 392 h140 l14 18 h-168 z" fill="#0d0b09" opacity="0.65" />
      </g>

      {/* Body / shoulders */}
      <path
        d="M120 352
           C120 300 150 268 210 268
           C270 268 300 300 300 352
           L300 366 L120 366 Z"
        fill="url(#topGrad)"
      />
      {/* collar */}
      <path d="M188 272 L210 300 L232 272" fill="none" stroke="#0d3a2a" strokeOpacity="0.5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

      {/* Neck */}
      <rect x="196" y="238" width="28" height="38" rx="12" fill="url(#skinGrad)" />

      {/* Head */}
      <ellipse cx="210" cy="196" rx="58" ry="62" fill="url(#skinGrad)" />

      {/* Hair — back volume */}
      <path
        d="M150 190
           C146 130 172 90 210 90
           C248 90 274 130 270 190
           C270 230 258 252 250 260
           C258 220 250 175 226 158
           C238 178 236 205 228 220
           C226 190 214 168 196 160
           C204 182 200 208 190 224
           C176 210 166 190 164 224
           C156 214 150 210 150 190 Z"
        fill="url(#hairGrad)"
      />

      {/* Hair — front fringe */}
      <path
        d="M158 176
           C160 138 182 112 210 112
           C238 112 260 138 262 176
           C250 158 240 148 230 168
           C224 150 216 142 210 142
           C204 142 196 150 190 168
           C180 148 170 158 158 176 Z"
        fill="url(#hairGrad)"
      />

      {/* Ears */}
      <circle cx="154" cy="200" r="7" fill="url(#skinGrad)" />
      <circle cx="266" cy="200" r="7" fill="url(#skinGrad)" />

      {/* Glasses — a small technical/professional signature detail */}
      <g stroke="#20211f" strokeWidth="3" fill="none" strokeLinecap="round">
        <rect x="172" y="192" width="34" height="26" rx="9" fill="rgba(245,241,234,0.06)" />
        <rect x="214" y="192" width="34" height="26" rx="9" fill="rgba(245,241,234,0.06)" />
        <path d="M206 202 h8" />
        <path d="M172 200 h-10" />
        <path d="M248 200 h10" />
      </g>

      {/* Eyes */}
      <circle cx="189" cy="205" r="3.2" fill="#1c1a17" />
      <circle cx="231" cy="205" r="3.2" fill="#1c1a17" />

      {/* Brows */}
      <path d="M180 191 q9 -6 18 0" stroke="#20211f" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <path d="M222 191 q9 -6 18 0" stroke="#20211f" strokeWidth="2.4" fill="none" strokeLinecap="round" />

      {/* Nose */}
      <path d="M210 208 q4 10 -3 16" stroke="#9c775420" strokeWidth="0" fill="none" />
      <path d="M208 210 q3 8 -2 13" stroke="rgba(30,24,18,0.35)" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Smile */}
      <path d="M195 232 q15 12 30 0" stroke="#5a3a24" strokeWidth="2.6" fill="none" strokeLinecap="round" />

      {/* Earrings — copper accent, small luxury detail */}
      <circle cx="154" cy="212" r="2.6" fill="var(--copper-bright)" />
      <circle cx="266" cy="212" r="2.6" fill="var(--copper-bright)" />

      {/* Floating accent dot */}
      <circle cx="320" cy="130" r="4" fill="var(--copper-bright)" className="avatar-illustration__spark" />
      <circle cx="96" cy="150" r="3" fill="var(--emerald-bright)" className="avatar-illustration__spark avatar-illustration__spark--b" />
    </svg>
  );
}
