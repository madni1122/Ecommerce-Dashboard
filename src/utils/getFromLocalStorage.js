import React from 'react';

const getFromLocalStorage = (name) => {
  let stored = JSON.parse(localStorage.getItem(name));
  return stored;
};

export default getFromLocalStorage;
