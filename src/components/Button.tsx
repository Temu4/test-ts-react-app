import React, {ReactNode} from 'react';

import './Button.css';

type ButtonProps = {
  children: ReactNode;
  size?: 'sm' | 'regular' | 'xl';
  color?: 'primary' | 'secondary';
};

const Button = ({children, size = 'regular', color = 'primary'}: ButtonProps) => {
  return (
    <button className={`button button__size-${size} button__color-${color}`}>{children}</button>
  );
};

export default Button;
