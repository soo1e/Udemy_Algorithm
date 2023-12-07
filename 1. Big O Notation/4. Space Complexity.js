// 공간 복잡도

// 입력이 커질수록 알고리즘이 얼마나 많은 공간을 차지하는지 생각해보자.
// 알고리즘 자체에 대해 얼마나 많은 공간을 차지할까
//
//
// 알고리즘 자체가 어떤 영향을 받는지 고민해보자.
// 불, 숫자, null, undefined는 똑같은 공간을 차지한다.
// 문자열은 다르다. O(n)의 공간을 차지한다.
// Reference 타입, object, array 등도 O(n)의 공간을 차지한다.

function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

// 여기서는 공간에 집중해보자
// 배열의 길이와는 상관 없이 total이라는 변수가 있고 다른 i라는 숫자가 공간을 차지한다.
// 이 두 변수는 어떠한 상황에도 존재한다.
// 따라서 공간 복잡도는 O(1)라고 생각한다.

function double(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
}

// 배열의 크기가 늘어나서 무한에 가까워 질수록 공간은 어떻게 될까?
// 새로운 배열을 만드는 코드가 있고 또한 입력 값에 따라 차지하는 공간은 입력된 배열의 크기와 비례해서 커지게 된다.
// 따라서 공간 복잡도는 O(n)이라고 생각한다.

