/*
    It works by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning.
    Time --> O(n^2)
    Space --> O(1)
    It never makes more than O(n) swaps, can be used when memory write is a costly operation --> ADV
    Stability --> not stable initially
    In-place --> yes, it doesnot require extra memory
*/
const selectionSort = (arr) => {
    let start = 0;
    while (start < arr.length - 1) {
        let current = start;
        let min = arr[start];
        for (let j = start + 1; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j];
                current = j;
            }
        }
        if (start !== current) {
            let temp = arr[start];
            arr[start] = min;
            arr[current] = temp;
        }
        /*
            //to make selection sort stable instead of if statement use while loop to insert min in that start position and
            move every elements to right

            while(current > start ){
                arr[current] = arr[current - 1];
                current--;
            }
            arr[start] = min;             
        */
        start++;
    }
    return arr;
};

//Driver code
let narr = [1, 3, 2, 4, 3, 2, 60, 5, 4, 23];
console.log(selectionSort(narr))


/*
//with two for loop

let selectionSort = (arr) => {
    
    for(let i = 0 ;i < arr.length - 1;i++){
        let current = i;
        let min = arr[i];
        for(let j = i + 1;j<arr.length;j++){
            if(arr[j] < min){
                min = arr[j];
                current = j;
            }
        }
        if(i !== current){
            let temp = arr[i];
            arr[i] = min;
            arr[current] = temp;
        }
    }
    return arr;
};
let narr = [1,3,2,4,3,2,60,5,4,23];
console.log(selectionSort(narr))
*/