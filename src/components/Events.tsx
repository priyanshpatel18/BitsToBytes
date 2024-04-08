import store from '@/store/store';
import React, { useEffect, useRef } from 'react';

export default function Events(): React.ReactNode {
  const eventsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      if (eventsContainerRef.current) {
        const containerRect = eventsContainerRef.current.getBoundingClientRect();
        const topRelativeToViewport = containerRect.top + window.screenTop;
        console.log(topRelativeToViewport);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [])

  return (
    <div className="bg-[#42B6E3] w-full" ref={eventsContainerRef}>
      <div className="w-full flex flex-col items-center">
        <h1 className={`text-[transparent] ${store.getState().calSans} text-stroke-dark text-[10rem] uppercase tracking-[1rem]`}>Events</h1>

      </div>
    </div>
  )
}
