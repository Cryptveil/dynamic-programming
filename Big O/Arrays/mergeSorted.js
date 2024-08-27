// given two sorted arrays, merge them into one big sorted array
// the two arrays given are always sorted

const array1 = [0, 3, 4, 31];
const array2 = [4, 6, 30];

// output should be [0, 3, 4, 4, 6, 30, 31]

function compareNumbers(a, b) {
    return a - b;
}

function mergeSortedArrays(arr1, arr2) {
    const merged = arr1.concat(arr2)
    console.log(merged.sort(compareNumbers))
}

// another solution: 

function mergeSortedArrays2(arr1, arr2) {
    const merge = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    let i = 1;
    let j = 1;

    while(arr1Item || arr2Item) {
        if (!arr2Item || arr1Item < arr2Item) {
            merge.push(arr1Item)
            arr1Item = arr1[i];
            i++;
        }
        else {
            merge.push(arr2Item);
            arr2Item = arr2[j];
            j++;
        }
    }

    console.log(merge);
}

mergeSortedArrays(array1, array2);
mergeSortedArrays2(array1, array2);