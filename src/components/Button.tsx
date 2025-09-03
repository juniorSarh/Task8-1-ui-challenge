import React from 'react'

interface ButtonProps {
  backgroundColor: string;
  textColor: string;
  size: 'small' | 'medium' | 'large';
  children?: React.ReactNode; // optional children
}

export default function Button({ backgroundColor, textColor, size, children }: ButtonProps) {
  const styles = {
    backgroundColor,
    color: textColor,
    padding: size === 'small' ? '4px 8px' :
             size === 'medium' ? '8px 16px' :
             '12px 24px',
    fontSize: size === 'small' ? '12px' :
              size === 'medium' ? '16px' :
              '20px',
    border: 'solid',
    borderRadius: '20px',
  };

  return (
    <button style={styles}>
      {children}
    </button>
  );
}
