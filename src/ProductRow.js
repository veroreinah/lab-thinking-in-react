import React from 'react';

export const ProductRow = ({ name, price, stocked }) => {
  let style = {
    color: 'black'
  };
  if (!stocked) {
    style = {
      color: 'red'
    };
  }

  return (
    <div>
      <span style={style}>{name}</span> - {price}
    </div>
  );
}
