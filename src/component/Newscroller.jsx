// components/NewsScroller.js
import React, { useEffect, useRef, useState } from 'react';

const NewsScroller = ({ news }) => {
  const scrollRef = useRef(null);
  const itemHeight = 70;
  const [index, setIndex] = useState(0);
  const extendedNews = [...news, news[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.style.transition = 'top 0.5s ease-in-out';
      scrollRef.current.style.top = `-${index * itemHeight}px`;

      if (index === news.length) {
        setTimeout(() => {
          scrollRef.current.style.transition = 'none';
          scrollRef.current.style.top = '0px';
          setIndex(1);
        }, 600);
      }
    }
  }, [index]);

  return (
    <div className="scroll-container" style={{ height: itemHeight, overflow: 'hidden' }}>
      <div className="scroll-inner" ref={scrollRef} style={{ position: 'relative' }}>
        {extendedNews.map((text, i) => (
          <div className="scroll-item" key={i} style={{ height: itemHeight }}>
            <div className="xb-item--description" style={{ fontSize: '14px' }}>{text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsScroller;
