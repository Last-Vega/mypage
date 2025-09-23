import React from 'react';
import './Separator.scss';

interface SeparatorProps {
  color?: string;
}

const Separator: React.FC<SeparatorProps> = ({ color = '#26A69A' }) => {
  return (
    <div 
      className="separator-container"
      style={{ '--separator-color': color } as React.CSSProperties}
    >
      <div className="separator">❖</div>
    </div>
  );
};

export default Separator;
