# Algorithms-Bubble-Selection-Insertion


# BUBBLE SORT

    Bubble sort works by repeatedly swapping the adjacent element if they are in wrong order
    worst case --> when array is sorted in reverse order --> O(n^2)
    best case --> when array is already sorted --> O(n);
    Auxillary space --> O(1);
    stable --> yes
    inplace--> yes
    
# INSERTION SORT

    Iterate from array[1] to array[array.length-1] over the array. 
    Compare the current element to its previous elements. 
    If the current element is smaller than its previous element, compare it to the elements before.
    Move the greater elements one position up to make space for the swapped element.
    Time complexity --> O(n^2)
    Space complexity --> O(1)
    worst Case --> if elements are sorted in reverse order
    inplace --> yes
    stable --> yes
    
# SELECTION SORT

    It works by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning.
    Time --> O(n^2)
    Space --> O(1)
    It never makes more than O(n) swaps, can be used when memory write is a costly operation --> ADV
    Stability --> not stable initially
    In-place --> yes, it doesnot require extra memory
