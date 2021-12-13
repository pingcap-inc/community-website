import React, { useEffect, useState } from 'react';

const HackUserProfileSlot = () => {
  const [width, setWidth] = useState(0);

  const resetWidth = () => {
    const el = document.querySelector('.d-header');
    if (el) {
      setWidth((parseInt(getComputedStyle(el).width) ?? 0) + 16);
    }
  };

  useEffect(() => {
    document.addEventListener('load', resetWidth);

    const slotObserver = new MutationObserver((mutations) => {
      resetWidth();
    });

    const observer = new MutationObserver((mutations) => {
      mutations.forEach(function (mutation) {
        mutation.addedNodes.forEach(function (node) {
          if (node.id === 'ember6') {
            resetWidth();
            slotObserver.observe(document.querySelector('.d-header'), {
              subtree: true,
              childList: true,
            });
          }
        });
        mutation.removedNodes.forEach(function (node) {
          if (node.id === 'ember6') {
            resetWidth();
            slotObserver.disconnect();
          }
        });
      });
    });

    observer.observe(document.getElementById('main'), {
      childList: true,
      subtree: true,
    });

    resetWidth();
    return () => {
      document.removeEventListener('load', resetWidth);
      observer.disconnect();
    };
  }, []);

  return <div style={{ width: `${width}px`, height: '1px' }} />;
};

export default HackUserProfileSlot;
