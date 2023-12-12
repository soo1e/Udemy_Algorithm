// Multiple Pointers
//
// 이 패턴의 개념은 인덱스나 위치에 해당하는 포인터나 값을 만든 다음 특정 조건에 따라
// 중간 지점에서부터 시작 지점이나 끝 지점이나 양쪽 지점을 향해 이동시키는 것이다.
//
// ex1. 정렬된 배열을 취하는 sumZero라는 함수를 작성하자.
// 분류가 아니라 정렬된 배열이어야 한다. 다만 오름차순이다.
//
// sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
// sumzero([-2,0,1,3]) // undefined
// sumzero([1,2,3]) // undefined

// Naive Solution
function sumZero(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

// Time Complexity - O(N^2)
// Space Complexity - O(1)

// 다중 포인터를 사용하면 중첩된 루프를 사용하고 여기서 시작하여 각각의 모든 숫자를 찾아 이동하고 또 모든 숫자를 찾아야 하는 작업보다는 훨씬 작업이 줄어든다.

// Refactored
function sumZero2(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right ) {
        let sum = arr[left] + arr[right]
        if(sum === 0 ) {
            return [arr[left], arr[right]];
        } else if (sum > 0 ) {
            right--;
        } else {
            left++;
        }
    }
}

// 리팩토링된 코드다. 하나는 왼쪽에서 0의 위치에서 시작하고 다른 하나는 배열의 마지막 위치에서 시작한다.
//
// Time Complexity - O(N)
// Space Complexity - O(1)