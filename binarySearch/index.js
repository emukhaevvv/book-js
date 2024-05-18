const binarySearch = (key, array, min, max) => {
  const mid = Math.floor(min + max / 2);

  if (max < min) {
    return -1;
  }

  if (array[mid] < key) {
    return binarySearch(key, array, mid + 1, max);
  } else if (array[mid] > key) {
    return binarySearch(key, array, min, mid - 1);
  } else {
    return key;
  }
};
