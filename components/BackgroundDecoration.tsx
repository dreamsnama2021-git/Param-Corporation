// components/BackgroundDecoration.tsx (debug - will show visible grid)
'use client';

import React from 'react';

export default function BackgroundDecoration(): React.ReactElement {
  return (
    <div 
      className="fixed inset-0 pointer-events-none"
      style={{ 
        zIndex: 0,
        backgroundImage: `
          linear-gradient(to right, rgba(0, 147, 203, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 147, 203, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '30px 30px',
      }}
    />
  );
}