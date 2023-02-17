import React, {ReactNode} from 'react';

import './Button.css';

const ButtonOld = ({children, size = 'regular', color = 'primary'}) => {
  return (
    <button className={`button button__size-${size} button__color-${color}`}>{children}</button>
  );
};

export default ButtonOld;
