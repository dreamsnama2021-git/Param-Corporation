// components/BackgroundDecoration.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundDecoration(): React.ReactElement {
  return (
    <>
     

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-[-1]" />
    </>
  );
}
