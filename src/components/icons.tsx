import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    ...props,
  };
}

/** Brand mark: a simple original "folded-corner document" glyph. */
export function LogoMark(props: IconProps) {
  return (
    <svg {...base(props)} viewBox="0 0 24 24" fill="none">
      <rect x="0.5" y="0.5" width="23" height="23" rx="6" fill="#dc2626" stroke="none" />
      <path
        d="M7.5 5.5A1 1 0 0 1 8.5 4.5h4.5l4 4v10a1 1 0 0 1-1 1h-7.5a1 1 0 0 1-1-1z"
        fill="white"
        fillOpacity={0.97}
        stroke="none"
      />
      <path d="M13 4.5v3a1 1 0 0 0 1 1h3" fill="#fecaca" stroke="none" />
    </svg>
  );
}

export function MergeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M8 3v6.5M16 3v6.5M4 20l4-6.5h8l4 6.5M12 13.5V21" />
      <path d="M8 9.5a4 4 0 0 0 4 4 4 4 0 0 0 4-4" />
    </svg>
  );
}

export function SplitIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="3" width="7" height="18" rx="1.2" />
      <rect x="13" y="3" width="7" height="18" rx="1.2" strokeDasharray="3 3" />
    </svg>
  );
}

export function TrashIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h16M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2m-9 0 1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13" />
      <path d="M10 11v6M14 11v6" />
    </svg>
  );
}

export function RotateIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4.5 12a7.5 7.5 0 1 1 2.5 5.6" />
      <path d="M4 15.5V21h5.5" />
    </svg>
  );
}

export function CompressIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9 4H5a1 1 0 0 0-1 1v4M15 4h4a1 1 0 0 1 1 1v4M9 20H5a1 1 0 0 1-1-1v-4M15 20h4a1 1 0 0 0 1-1v-4" />
      <path d="M9 9h6v6H9z" />
    </svg>
  );
}

export function WatermarkIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M8 16.5 16 7.5" strokeWidth={2.4} />
    </svg>
  );
}

export function HashIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M9 16h6M9 12h6" />
    </svg>
  );
}

export function ImageIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="m4 18 5-5 3 3 4-5 4 5" />
    </svg>
  );
}

export function PdfDocIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M8 3h5l5 5v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M13 3v4a1 1 0 0 0 1 1h4" />
    </svg>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M13 3 5 13.5h5.5L11 21l8-10.5h-5.5z" />
    </svg>
  );
}

export function SparklesIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3v4M12 17v4M4 12h4M16 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
    </svg>
  );
}

export function DeviceIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

export function UploadIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 8 12 3.5 7.5 8M12 3.5V16" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor" stroke="none">
      <path d="M12 2.5l2.9 6 6.6.6-5 4.4 1.5 6.5L12 16.8 6 20l1.5-6.5-5-4.4 6.6-.6z" />
    </svg>
  );
}
