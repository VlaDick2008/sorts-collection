/**
 * Sorts an array using the bubble sort algorithm.
 *
 * @param {T[]} arr - The array to be sorted.
 * @return {T[]} The sorted array.
 */
export function bubbleSort<T>(arr: T[]): T[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];

        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

/**
 * Sorts an array using the insertion sort algorithm.
 *
 * @param {T[]} arr - The array to be sorted.
 * @return {T[]} The sorted array.
 */
export function insertionSort<T>(arr: T[]): T[] {
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
}

/**
 * Sorts an array using the selection sort algorithm.
 *
 * @param {T[]} arr - The array to be sorted.
 * @return {T[]} The sorted array.
 */
export function selectionSort<T>(arr: T[]): T[] {
  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i + i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
}

/**
 * Sorts an array using the mergesort algorithm.
 *
 * @param {T[]} arr - The array to be sorted.
 * @return {T[]} The sorted array.
 */
export function mergeSort<T>(arr: T[]): T[] {
  const mid = arr.length / 2;

  if (arr.length < 2) {
    return arr;
  }

  const left = arr.slice(0, mid);

  return merge(mergeSort(left), mergeSort(arr));

  function merge(left: T[], right: T[]): T[] {
    let arr: T[] = [];

    do {
      if (left[0] < right[0]) {
        arr.push(left.shift()!);
      } else {
        arr.push(right.shift()!);
      }
    } while (left.length && right.length);

    return [...arr, ...left, ...right];
  }
}

/**
 * Sorts an array using the quicksort algorithm.
 *
 * @param {T[]} arr - The array to be sorted.
 * @param {number} [left=0] - The left index of the array to be sorted.
 * @param {number} [right=arr.length - 1] - The right index of the array to be sorted.
 * @return {T[]} The sorted array.
 */
export function quickSort<T>(arr: T[], left = 0, right = arr.length - 1): T[] {
  if (left >= right) {
    return [];
  }

  let pivotIndex = partition(arr, left, right);
  quickSort(arr, left, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, right);

  return arr;

  function partition<T>(arr: T[], left: number, right: number): number {
    let pivotValue = arr[right];
    let partitionIndex = left;

    for (let i = left; i < right; i++) {
      if (arr[i] < pivotValue) {
        swap(arr, i, partitionIndex);
        partitionIndex++;
      }
    }

    swap(arr, right, partitionIndex);
    return partitionIndex;
  }

  function swap<T>(arr: T[], firstIndex: number, secondIndex: number): T[] {
    let temp = arr[firstIndex];

    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;

    return arr;
  }
}
