function haveSameItems(arr1, arr2) {
  return (
    arr1.length === arr2.length && 
    arr1.every(a => arr2.includes(a))
  );
}

export default haveSameItems;