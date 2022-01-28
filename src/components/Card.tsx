import React, { FC, useState } from 'react';

export enum CardVariant {
  primary='primary',
  outlined='outlined'
}

interface CardProps {
  width: string
  height: string
  variant?: CardVariant
  onClick: (num: number) => void
}

const Card:FC<CardProps> = ({
  width, height, variant, onClick, children
}) => {
  const [number, setNumber] = useState(0);

  const clickHandler = () => {
    setNumber(number + 1)
    onClick(number + 1)
  }

  return (
    <div style={{width: width, height: height,
      backgroundColor: variant === CardVariant.primary ? 'lightgray': 'none',
      border: variant === CardVariant.outlined ? '2px solid gray': 'none',}}
      onClick={clickHandler}  
    >
      {children}
    </div>
  )
}

export default Card