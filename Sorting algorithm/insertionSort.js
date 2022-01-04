/*
    Overview:
    Iterate from array[1] to array[array.length-1] over the array. 
    Compare the current element to its previous elements. 
    If the current element is smaller than its previous element, compare it to the elements before.
    Move the greater elements one position up to make space for the swapped element.
    Time complexity --> O(n^2)
    Space complexity --> O(1)
    worst Case --> if elements are sorted in reverse order
    inplace --> yes
    stable --> yes

*/

const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        let currentEle = array[i];
        let j = i - 1;  //previous element index
        while (j >= 0 && array[j] > currentEle) {
            //Move elements of array that are greater than currentEle, to one position ahead of their current position
            array[j + 1] = array[j];
            j--;
        }
        //insert the current element in its correct position
        array[j + 1] = currentEle;
    }
    return array;
}

//Driver code
let arr = [12, 10, 11, 3, 2, 1];
console.log(insertionSort(arr));