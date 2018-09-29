import React from 'react';

function ProductRow({ product }) {
  return (
    <div>
      {product.name} | {product.price}
    </div>
  );
}

export default ProductRow;