import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTable({ products }) {
  const p = products.map((e, i) => <ProductRow key={i} product={e}/>)

  return (
    <div>
      <ProductCategoryRow category={products[0].category} />
      {p}
    </div>
  );
}

export default ProductTable;