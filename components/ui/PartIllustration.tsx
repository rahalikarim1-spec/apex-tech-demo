/**
 * Procedural technical-drawing illustrations used where real Apex part photography
 * is not yet available. Pure SVG: zero image weight, crisp at any size.
 * Swap for <Image> once real photos exist (see ProjectMedia).
 */
export function PartIllustration({ kind = 'manifold', className = '', label }: { kind?: 'manifold' | 'housing' | 'shaft' | 'gear'; className?: string; label?: string }) {
  const stroke = '#8DA8B8';
  return (
    <svg viewBox="0 0 400 260" role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true} className={className}>
      <defs>
        <pattern id={`g-${kind}`} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="#8DA8B8" strokeOpacity=".12" />
        </pattern>
      </defs>
      <rect width="400" height="260" fill={`url(#g-${kind})`} />
      <g fill="none" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round">
        {kind === 'manifold' && (
          <>
            <path d="M90 90l70-30 150 0 0 90-70 40-150 0z" fill="#101C29" />
            <path d="M90 90h150l70-30M240 90v90" />
            <circle cx="140" cy="135" r="16" /><circle cx="140" cy="135" r="7" />
            <circle cx="200" cy="135" r="16" /><circle cx="200" cy="135" r="7" />
            <circle cx="260" cy="135" r="12" stroke="#397A9C" />
            <path d="M40 220h320M40 214v12M360 214v12" stroke="#397A9C" />
          </>
        )}
        {kind === 'housing' && (
          <>
            <rect x="80" y="60" width="240" height="140" rx="10" fill="#101C29" />
            <rect x="104" y="84" width="192" height="92" rx="6" />
            <circle cx="96" cy="72" r="5" /><circle cx="304" cy="72" r="5" /><circle cx="96" cy="188" r="5" /><circle cx="304" cy="188" r="5" />
            <path d="M130 108h60M130 130h100M130 152h80" stroke="#397A9C" />
            <path d="M80 226h240M80 220v12M320 220v12" stroke="#397A9C" />
          </>
        )}
        {kind === 'shaft' && (
          <>
            <path d="M40 110h60v-20h50v-14h120v14h50v20h40v40h-40v20h-50v14H150v-14h-50v-20H40z" fill="#101C29" />
            <path d="M40 130h320" strokeDasharray="10 5 2 5" stroke="#397A9C" />
            <path d="M150 90v80M270 90v80" />
            <path d="M40 216h320M40 210v12M360 210v12" stroke="#397A9C" />
          </>
        )}
        {kind === 'gear' && (
          <>
            <circle cx="200" cy="130" r="70" fill="#101C29" /><circle cx="200" cy="130" r="26" /><circle cx="200" cy="130" r="50" strokeDasharray="4 4" />
            <path d="M200 40v20M200 200v20M110 130h20M270 130h20M136 66l14 14M250 180l14 14M264 66l-14 14M150 180l-14 14" />
          </>
        )}
      </g>
    </svg>
  );
}
