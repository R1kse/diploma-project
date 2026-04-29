/* global React */
// Shared primitives for Paidaly
const { useState } = React;

// Line icons (stroke-based, 24 viewbox)
const Icon = ({ d, size = 20, stroke = 'currentColor', sw = 1.8, fill = 'none' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    {typeof d === 'string' ? <path d={d}/> : d}
  </svg>
);

const I = {
  home:     'M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10',
  search:   <g><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></g>,
  bag:      'M4 8h16l-1.2 12.1a1 1 0 01-1 .9H6.2a1 1 0 01-1-.9L4 8zM8 8V6a4 4 0 018 0v2',
  user:     <g><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4.5 4.5-7 8-7s7 2.5 8 7"/></g>,
  clock:    <g><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></g>,
  heart:    'M12 20s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.5-7 10-7 10z',
  plus:     'M12 5v14M5 12h14',
  minus:    'M5 12h14',
  chev:     'M9 6l6 6-6 6',
  chevL:    'M15 6l-6 6 6 6',
  chevD:    'M6 9l6 6 6-6',
  close:    'M6 6l12 12M18 6L6 18',
  map:      <g><path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2V6z"/><path d="M9 4v16M15 6v16"/></g>,
  pin:      <g><path d="M12 22s-7-7-7-12a7 7 0 0114 0c0 5-7 12-7 12z"/><circle cx="12" cy="10" r="2.5"/></g>,
  phone:    'M22 17v3a2 2 0 01-2.2 2 19 19 0 01-8.3-3 19 19 0 01-6-6A19 19 0 012.5 4.8 2 2 0 014.5 3h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2L8.2 10.8a16 16 0 006 6l1.4-1.4a2 2 0 012-.5c.9.3 1.8.5 2.7.6A2 2 0 0122 17z',
  bike:     <g><circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-8h4l2 4h2M14 6h3"/></g>,
  leaf:     'M4 20c0-8 8-16 16-16 0 8-8 16-16 16zM4 20c6-6 8-8 12-10',
  flame:    'M12 22a6 6 0 006-6c0-3-2-5-3-8-1 2-3 3-3 5-1-1-2-2-2-4-3 3-4 5-4 7a6 6 0 006 6z',
  check:    'M4 12l5 5L20 6',
  bell:     <g><path d="M6 17V11a6 6 0 0112 0v6l2 2H4l2-2z"/><path d="M10 20a2 2 0 004 0"/></g>,
  star:     'M12 3l2.6 6 6.4.6-4.8 4.3 1.5 6.3L12 17l-5.7 3.2 1.5-6.3L3 9.6 9.4 9 12 3z',
  grid:     <g><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></g>,
  list:     'M4 6h16M4 12h16M4 18h16',
  set:      <g><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 01-4 0v-.1a1.7 1.7 0 00-1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 010-4h.1a1.7 1.7 0 001.5-1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3h.1a1.7 1.7 0 001-1.5V3a2 2 0 014 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8v.1a1.7 1.7 0 001.5 1H21a2 2 0 010 4h-.1a1.7 1.7 0 00-1.5 1z"/></g>,
  chart:    'M3 21h18M7 17v-5M12 17V8M17 17v-9',
  truck:    <g><path d="M1 16V6a1 1 0 011-1h11v11"/><path d="M13 9h5l3 4v3h-3"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></g>,
  wallet:   <g><rect x="3" y="6" width="18" height="14" rx="2.5"/><path d="M3 10h18M16 15h2"/></g>,
  card:     <g><rect x="2" y="5" width="20" height="14" rx="2.5"/><path d="M2 10h20M6 15h4"/></g>,
  route:    <g><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M6 8.5V14a4 4 0 004 4h5.5"/></g>,
  dot:      <circle cx="12" cy="12" r="4"/>,
  filter:   'M4 5h16l-6 8v6l-4-2v-4L4 5z',
};

// Organic blob SVG bg
const Blob = ({ color = '#CFE4C5', style }) => (
  <svg viewBox="0 0 200 200" style={style} preserveAspectRatio="none">
    <path fill={color} d="M42,-58C54,-47,62,-32,65,-17C68,-2,65,14,57,27C49,40,35,50,19,56C3,62,-14,64,-28,58C-42,52,-53,38,-59,22C-65,6,-66,-12,-59,-26C-52,-40,-37,-50,-22,-57C-7,-64,8,-68,22,-66C36,-64,30,-70,42,-58Z" transform="translate(100 100)"/>
  </svg>
);

// Illustrated plate (no photos; decorative)
const Plate = ({ variant = 'salad', size = '100%', radius = 0 }) => {
  const w = 220, h = 160;
  const variants = {
    salad: (
      <>
        <defs>
          <radialGradient id={`bg-${variant}`} cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#EFF7E2"/>
            <stop offset="100%" stopColor="#CFE4C5"/>
          </radialGradient>
        </defs>
        <rect width={w} height={h} fill={`url(#bg-${variant})`}/>
        <circle cx="110" cy="80" r="62" fill="#fff"/>
        <circle cx="110" cy="80" r="62" fill="none" stroke="#E8EFE2" strokeWidth="2"/>
        {/* greens */}
        <path d="M80 60 Q90 45 110 55 Q130 40 140 60 Q155 70 140 95 Q120 115 95 105 Q75 95 80 60Z" fill="#6AA84F"/>
        <path d="M90 70 Q100 55 115 65 Q130 55 135 75" stroke="#4B7F33" strokeWidth="2" fill="none"/>
        {/* tomato */}
        <circle cx="95" cy="95" r="7" fill="#E07070"/>
        <circle cx="128" cy="88" r="6" fill="#E8877A"/>
        {/* avocado */}
        <ellipse cx="115" cy="72" rx="10" ry="6" fill="#A7C957" transform="rotate(-15 115 72)"/>
        <ellipse cx="115" cy="72" rx="4" ry="2" fill="#7B9544" transform="rotate(-15 115 72)"/>
        {/* seeds */}
        <circle cx="100" cy="82" r="1.5" fill="#8A6A00"/>
        <circle cx="120" cy="98" r="1.5" fill="#8A6A00"/>
        <circle cx="135" cy="90" r="1.5" fill="#8A6A00"/>
      </>
    ),
    bowl: (
      <>
        <rect width={w} height={h} fill="#E8F2DC"/>
        <circle cx="110" cy="82" r="60" fill="#2E3A2E"/>
        <circle cx="110" cy="82" r="52" fill="#3D4F3D"/>
        {/* rice */}
        <path d="M70 70 Q110 55 150 70 L150 95 Q110 105 70 95Z" fill="#F5EFD8"/>
        {/* salmon */}
        <ellipse cx="90" cy="80" rx="18" ry="10" fill="#F4A079"/>
        <path d="M75 78 L105 82 M75 83 L105 87" stroke="#E08A65" strokeWidth="1.2"/>
        {/* edamame */}
        <circle cx="130" cy="75" r="4" fill="#A7C957"/>
        <circle cx="138" cy="82" r="4" fill="#A7C957"/>
        <circle cx="125" cy="88" r="4" fill="#A7C957"/>
        {/* corn */}
        <rect x="118" y="68" width="3" height="3" fill="#F9C74F"/>
        <rect x="122" y="71" width="3" height="3" fill="#F9C74F"/>
      </>
    ),
    smoothie: (
      <>
        <rect width={w} height={h} fill="#F3E8F0"/>
        {/* glass */}
        <path d="M85 45 L135 45 L130 130 Q110 140 90 130Z" fill="#fff" stroke="#E3C8DE" strokeWidth="1.5"/>
        <path d="M88 55 L132 55 L127 128 Q110 136 93 128Z" fill="#D47AA5"/>
        <ellipse cx="110" cy="50" rx="24" ry="5" fill="#B85E8A"/>
        {/* straw */}
        <rect x="105" y="25" width="4" height="35" fill="#3A9E5F" rx="2"/>
        {/* berries */}
        <circle cx="100" cy="48" r="3.5" fill="#8B1E4F"/>
        <circle cx="118" cy="50" r="3.5" fill="#8B1E4F"/>
      </>
    ),
    soup: (
      <>
        <rect width={w} height={h} fill="#FDF4E4"/>
        <ellipse cx="110" cy="90" rx="72" ry="20" fill="#E8D7B8"/>
        <path d="M40 85 Q40 120 110 130 Q180 120 180 85 L170 85 Q170 115 110 122 Q50 115 50 85Z" fill="#fff"/>
        <ellipse cx="110" cy="85" rx="60" ry="16" fill="#F3A847"/>
        <ellipse cx="90" cy="82" rx="5" ry="2" fill="#CF7B1C"/>
        <ellipse cx="120" cy="86" rx="6" ry="2.5" fill="#CF7B1C"/>
        <ellipse cx="105" cy="88" rx="4" ry="1.5" fill="#2E7D4C"/>
        <ellipse cx="128" cy="82" rx="3" ry="1.2" fill="#2E7D4C"/>
      </>
    ),
    oats: (
      <>
        <rect width={w} height={h} fill="#F4EFE1"/>
        <circle cx="110" cy="85" r="55" fill="#fff" stroke="#E8DFC6" strokeWidth="2"/>
        <circle cx="110" cy="85" r="45" fill="#E8D6A8"/>
        <circle cx="95" cy="75" r="5" fill="#8B1E4F"/>
        <circle cx="122" cy="80" r="5" fill="#8B1E4F"/>
        <circle cx="108" cy="92" r="5" fill="#C94A8A"/>
        <ellipse cx="118" cy="70" rx="6" ry="3" fill="#F4D35E" transform="rotate(20 118 70)"/>
        <ellipse cx="98" cy="93" rx="6" ry="3" fill="#F4D35E" transform="rotate(-10 98 93)"/>
      </>
    ),
    toast: (
      <>
        <rect width={w} height={h} fill="#FAF0DE"/>
        <rect x="60" y="50" width="100" height="70" rx="8" fill="#E8B87C"/>
        <rect x="66" y="56" width="88" height="58" rx="4" fill="#D99A5B"/>
        {/* avocado mash */}
        <path d="M70 62 Q110 55 150 62 L150 85 Q110 95 70 85Z" fill="#A7C957"/>
        {/* egg */}
        <circle cx="110" cy="78" r="14" fill="#fff"/>
        <circle cx="110" cy="78" r="6" fill="#F9C74F"/>
        {/* seeds */}
        <circle cx="85" cy="70" r="1.5" fill="#4B7F33"/>
        <circle cx="135" cy="72" r="1.5" fill="#4B7F33"/>
      </>
    ),
    chicken: (
      <>
        <rect width={w} height={h} fill="#EAF2DF"/>
        <ellipse cx="110" cy="82" rx="70" ry="50" fill="#fff"/>
        <ellipse cx="110" cy="82" rx="70" ry="50" fill="none" stroke="#E0E8D5" strokeWidth="2"/>
        <path d="M70 75 Q95 65 115 78 Q135 70 150 82 Q140 95 115 92 Q90 95 70 75Z" fill="#E8B87C"/>
        <path d="M75 78 L145 85 M80 83 L140 88" stroke="#A77046" strokeWidth="1.5"/>
        <circle cx="90" cy="95" r="5" fill="#6AA84F"/>
        <circle cx="125" cy="100" r="5" fill="#6AA84F"/>
        <circle cx="140" cy="90" r="4" fill="#E07070"/>
      </>
    ),
  };
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: size, height: size, borderRadius: radius, display: 'block' }} preserveAspectRatio="xMidYMid slice">
      {variants[variant] || variants.salad}
    </svg>
  );
};

// Placeholder map (isometric street grid)
const MiniMap = ({ h = 200, dark = false }) => {
  const bg = dark ? '#0E1814' : '#EAF2DF';
  const road = dark ? '#1F2E27' : '#fff';
  const line = dark ? '#253632' : '#D3E3CD';
  const park = dark ? '#16241E' : '#D1E3C4';
  return (
    <svg viewBox="0 0 400 240" style={{ width:'100%', height:h, display:'block' }}>
      <rect width="400" height="240" fill={bg}/>
      <rect x="30" y="30" width="140" height="90" rx="6" fill={park}/>
      <rect x="240" y="130" width="130" height="80" rx="6" fill={park}/>
      {/* roads */}
      <path d="M0 80 L400 80" stroke={road} strokeWidth="14"/>
      <path d="M0 160 L400 160" stroke={road} strokeWidth="10"/>
      <path d="M90 0 L90 240" stroke={road} strokeWidth="12"/>
      <path d="M240 0 L240 240" stroke={road} strokeWidth="10"/>
      <path d="M340 0 L340 240" stroke={road} strokeWidth="8"/>
      <path d="M0 80 L400 80" stroke={line} strokeWidth="1" strokeDasharray="5 6"/>
      <path d="M90 0 L90 240" stroke={line} strokeWidth="1" strokeDasharray="5 6"/>
      {/* route */}
      <path d="M90 80 L240 80 L240 200" stroke="#3A9E5F" strokeWidth="4" fill="none" strokeLinecap="round" strokeDasharray="2 8"/>
      {/* pins */}
      <g transform="translate(85 75)"><circle r="9" fill="#3A9E5F"/><circle r="3" fill="#fff"/></g>
      <g transform="translate(236 196)"><path d="M0 0 C -8 -10 -8 -18 0 -24 C 8 -18 8 -10 0 0Z" fill="#1B3A2D"/><circle cx="0" cy="-16" r="4" fill="#fff"/></g>
      <g transform="translate(170 120)"><circle r="10" fill="#8BC34A"/><circle r="10" fill="#8BC34A" opacity="0.3" transform="scale(1.8)"/><text y="4" textAnchor="middle" fontSize="11" fontWeight="800" fill="#fff">🚴</text></g>
    </svg>
  );
};

Object.assign(window, { Icon, I, Blob, Plate, MiniMap });
