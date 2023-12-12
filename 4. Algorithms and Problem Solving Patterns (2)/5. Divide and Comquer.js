// Divide and Conquer
// 이 알고리즘은 주로 배열이나 문자열 같은 큰 규모의 데이터셋을 처리한다.

// ex1.
// 주어진 정수들이 정렬된 배열에 있을 때, 'search'라는 함수를 작성한다.
// 이 함수는 값 하나를 받아들이고, 해당 값이 있는 위치의 인덱스를 반환해야 한다. 만약 값이 배열 안에 없으면 -1을 반환해야 한다.

// search([1,2,3,4,5,6],4) // 3
// search([1,2,3,4,5,6],6) // 5
// search([1,2,3,4,5,6],11) // -1

// naive solution
function search(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}

// time complexity - O(N)

// Refactored
function search2 (arraym, val) {
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        let middle = Math.floor ((min + max) / 2);
        let currentElement = array[middle];

        if (array[middle] < val) {
            min = middle + 1;
        }
        else if (array[middle] > val) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}