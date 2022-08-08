import React, { useMemo, useRef, useState } from 'react';
interface product {
  name: string;
  price: number;
}

export const UseMemo = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState<product[]>([]);

  const nameRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: +price,
      },
    ]);
    setName('');
    setPrice('');
    nameRef.current?.focus();
  };
  const total = useMemo(() => {
    const result = products.reduce((total, product) => {
      console.log('Tinh toan lai ...');
      return total + product.price;
    }, 0);
    return result;
  }, [products]);
  return (
    <div>
      <input
        type="text"
        ref={nameRef}
        value={name}
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={price}
        placeholder="Enter price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total: {total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};
