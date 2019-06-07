function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  for (let i = 0; i < arr.length - 1; i++) {
    const currentElement = arr[i];
    const unsortedPortion = arr.slice(i);
    const min = Math.min(...unsortedPortion);
    const minIndex = arr.indexOf(min);

    // console.log(currentElement, min, minIndex, unsortedPortion);
    // console.warn(arr);

    arr[minIndex] = currentElement;
    arr[i] = min;
  }
}
