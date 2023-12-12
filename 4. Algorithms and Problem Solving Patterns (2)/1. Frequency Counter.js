// Frequency Counters
//
// 자바스크립트의 객체를 이용해서 다양한 값과 빈도를 수집한다.
// 이 패턴은 알고리즘과 과제에 있는 여러 데이터와 입력값이
// 서로 비슷한 값으로 구성되어 있는지, 서로 간의 아나그램인지,
// 값이 다른 값에 포함되는지 여부를 비교하거나, 데이터를 입력값이나 두 개 이상의 빈도
// 혹은 특정하게 발생하는 빈도와 비교할 때 유용합니다.
//
// ex1. 2개의 배열을 허용하는 same이라는 함수를 작성하십시오.
//
// 배열의 모든 값이 2개의 배열을 허용하는 same이라는 함수를 작성하십시오.
// 배열의 모든 값이 두 번째 배열에 해당하는 값을 가지면 true를 반환해야 한다.

// same([1,2,3], [4,1,9]) -> true
// same([1,2,3], [1,9]) -> false
// same([1,2,1], [4,4,1]) -> false (must be same frequency)

// 1. A naive solution
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1 ) {
            return false;
        }
        arr.splice(correctIndex, 1);
    }
    return true;
}

// Time Complexity - N^2

// 2. Refactored
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for (let key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

// 빈도 카운터 패턴이 사용된 코드이다.
// 각 배열에 한 번씩 개별적으로 루프를 적용할 수 있다.
// 두 개의 루프가 두 개의 중첩된 개별 루프보다 훨씬 낫다!

// Time Complexity - N

// ex2. Anagrams
// 두 개의 문자열을 취하여 두 문자열이 서로의 아나그램이면 true가 반환된다.

// validAnagram('', '') -> true
// validAnagram('aaz', 'zza') -> false
// validAnagram('anagram', 'nagaram') -> true
// validAnagram('rat', 'car') -> false
// validAnagram('awesome', 'awesom') -> false
// validAnagram('qwerty', 'qeywrt') -> true
// validAnagram('texttwisttime', 'timetwisttext') -> true

function validAnagram (first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    console.log(lookup);

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}

validAnagram('texttwisttime', 'timetwisttext');