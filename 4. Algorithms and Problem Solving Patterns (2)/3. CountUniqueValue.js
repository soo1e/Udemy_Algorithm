// countUniqueValue

// ex. 배열을 주면 배열에 몇 개의 수가 들어있는지 고유한 수를 센다

// countUniqueValue([1,1,1,1,1,2]) // 2
// countUniqueValue([1,2,3,4,4,4,7,7,12,12,13]) // 8
// countUniqueValue([]) // 0
// countUniqueValue([-2,-1,-1,0,1]) // 4

// [a,b,c,d]에서 a에 i, b에서 j가 시작한다. i와 j가 다르면 j위치로 i를 이동시키고 다시 j를 보낸다. 이렇게 해서 i가 몇번째 인덱스 인지 확인하면 고유한 수를 셀 수 있을 것이다.

// Time Complexity - O(n)
//
// Space Complexity - O(n)

function countUniqueValues(arr) {
    if (arr.length == 0) return 0;
    var i = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}