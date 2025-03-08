"use client";

import React, { useEffect } from 'react';

export default function SidebarToggleScript() {
  useEffect(() => {
    // Function to handle the sidebar toggle click from the navbar
    function handleToggleClick(e: MouseEvent) {
      e.preventDefault();
      // Find the hidden sidebar trigger and click it
      const sidebarTrigger = document.getElementById('sidebar-trigger');
      if (sidebarTrigger) {
        sidebarTrigger.click();
      }
    }

    // Add event listener to navbar toggle buttons
    const toggleButtons = document.querySelectorAll('[data-sidebar-toggle]');
    toggleButtons.forEach(button => {
      button.addEventListener('click', handleToggleClick as EventListener);
    });

    // Cleanup
    return () => {
      toggleButtons.forEach(button => {
        button.removeEventListener('click', handleToggleClick as EventListener);
      });
    };
  }, []);

  return null; // This component doesn't render anything
}