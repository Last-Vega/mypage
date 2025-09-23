import React, { useEffect } from 'react';

const Copyright: React.FC = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.footer .reveal');
    revealElements.forEach((el, index) => {
      (el as HTMLElement).style.animation = `fadeInUp 1s ease ${index * 0.25}s both`;
    });
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p className="reveal">
            © All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Copyright;
