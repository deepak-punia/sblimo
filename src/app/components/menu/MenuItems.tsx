'use client';
import React, { useEffect, useState } from 'react';

const MenuItems = () => {
  const scrollToPercent = (percent: number) => {
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
    // Viewport height
    const viewportHeight = window.innerHeight;

    // Maximum scrollable height
    const scrollableHeight = documentHeight - viewportHeight;

    const targetScrollY = (scrollableHeight * percent) / 100;
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
  };
  const [isScrolled, setIsScrolled] = useState(false);
  const [isQuote, setIsQuote] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50); // Change 50 to the scroll threshold you prefer
      setIsQuote(offset > 8500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const menuItem = document.getElementById('main-menu');

    if (menuItem) {
      if (isScrolled) {
        menuItem.style.transition = 'background-color 0.3s, opacity 0.3s';
        menuItem.style.backgroundColor = 'black';
        menuItem.style.opacity = '0.9';
      } else {
        menuItem.style.backgroundColor = ''; // Reset to original style
        menuItem.style.opacity = '';
      }
    }
  }, [isScrolled]);
  useEffect(() => {
    const quoteItem = document.getElementById('getquote');
    if (quoteItem) {
      if (isQuote) {
        quoteItem.style.opacity = '0';
      } else {
        quoteItem.style.opacity = '1';
      }
    }
  }, [isQuote]);

  return (
    <ul className="hidden md:flex p-5 items-center justify-between text-white text-xl font-medium gap-16">
      <li
        className="link-style"
        data-replace="Home"
        onClick={() => scrollToPercent(0)}
      >
        <span>Home</span>
      </li>
      <li
        className="link-style"
        data-replace="Services"
        onClick={() => scrollToPercent(46)}
      >
        {' '}
        <span>Services</span>
      </li>
      <li
        className="link-style"
        data-replace="Price"
        onClick={() => scrollToPercent(74)}
      >
        {' '}
        <span>Price</span>
      </li>
      <li
        className="link-style"
        data-replace="Contact"
        onClick={() => scrollToPercent(91)}
      >
        {' '}
        <span>Contact</span>
      </li>
    </ul>
  );
};

export default MenuItems;
