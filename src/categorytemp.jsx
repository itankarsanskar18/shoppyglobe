import React from 'react';

function Category({ categories, onSelect }) {
  return (
    <ul className='text-left list-disc pl-5'>
      {categories.map((cat, index) => (
        <li
          key={index}
          className='mb-2 capitalize cursor-pointer hover:underline'
          onClick={() => onSelect(cat)}
        >
          {cat}
        </li>
      ))}
    </ul>
  );
}

export default Category;

