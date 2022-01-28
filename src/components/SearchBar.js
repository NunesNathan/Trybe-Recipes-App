import React from 'react';
import Input from './Input';

export default function SearchBar() {
  return (
    <div>
      <Input
        dataTestId="search-input"
        placeholder="Search Recipe"
      />
    </div>
  );
}
