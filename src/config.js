const config = {
  arrSize: 30,
  heightMultiplier: 5,
  frameDuration: 5, // ms
  animationDuration: 8, // ms
  sorts: [
    {
      id: 'selection',
      func: selectionSort,
    },
    {
      id: 'insertion',
      func: insertionSort,
    },
  ],
};
