// components/ContentProtection.tsx
"use client";

import { useEffect } from "react";

export default function ContentProtection() {
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable keyboard shortcuts for copy, save, inspect, etc.
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent Ctrl+C (copy)
      if ((e.ctrlKey || e.metaKey) && e.key === "c") {
        e.preventDefault();
        return false;
      }
      // Prevent Ctrl+U (view source)
      if ((e.ctrlKey || e.metaKey) && e.key === "u") {
        e.preventDefault();
        return false;
      }
      // Prevent Ctrl+S (save page)
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
        return false;
      }
      // Prevent Ctrl+Shift+I (inspect element)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "i") {
        e.preventDefault();
        return false;
      }
      // Prevent Ctrl+Shift+J (console)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "j") {
        e.preventDefault();
        return false;
      }
      // Prevent Ctrl+Shift+C (inspect element - alternate)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "c") {
        e.preventDefault();
        return false;
      }
      // Prevent F12 (developer tools)
      if (e.key === "F12") {
        e.preventDefault();
        return false;
      }
      // Prevent Ctrl+P (print)
      if ((e.ctrlKey || e.metaKey) && e.key === "p") {
        e.preventDefault();
        return false;
      }
    };

    // Disable text selection via mouse drag
    const handleSelectStart = (e: Event) => {
      e.preventDefault();
      return false;
    };

    // Disable drag events (prevents dragging images/text)
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable copy event
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable cut event
    const handleCut = (e: ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    // Add all event listeners
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("selectstart", handleSelectStart);
    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("copy", handleCopy);
    document.addEventListener("cut", handleCut);

    // Cleanup event listeners on unmount
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("selectstart", handleSelectStart);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("cut", handleCut);
    };
  }, []);

  return null; // This component doesn't render anything
}