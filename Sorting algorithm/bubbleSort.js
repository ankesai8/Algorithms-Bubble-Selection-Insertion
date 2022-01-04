/*
    Bubble sort works by repeatedly swapping the adjacent element if they are in wrong order
    worst case --> when array is sorted in reverse order --> O(n^2)
    best case --> when array is already sorted --> O(n);
    Auxillary space --> O(1);
    stable --> yes
    inplace--> yes
*/

//Bubblesort function --> Iterative solution
const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let swapped = false;
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                //swap the elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        //to make sure loop doesnot goes on when the array is already sorted
        if (swapped === false) {
            break;
        }
    }
    return arr;
};

//Driver code
let narr = [1, 2, 3, 5, 4, 6, 7, 23, 14, 15, 18];
console.log(bubbleSort(narr))   //[1,2,3,4,5,6,7,14,15,18,23]

// Alternative to iterative solution --> Recursive Bubble Sort

const recursiveBubbleSort = (array, n) => {
    //Base condition
    if (n === 1) return array;

    for (let i = 0; i < n - 1; i++) {
        if (array[i] > array[i + 1]) {
            //Swap the elements
            let temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
        }
        recursiveBubbleSort(array, n - 1)
    }

    return array;
};

//Driver code
let narr = [1, 2, 43, 25, 4, 6, 17, 23, 14, 15, 18];
console.log(recursiveBubbleSort(narr, narr.length))