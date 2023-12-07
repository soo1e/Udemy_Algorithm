// Big O 표기법은 알고리즘의 효율성을 설명하는 방법 중 하나이다.
// 알고리즘의 시간 복잡도나 공간 복잡도를 나타내는데 쓰이는데, 이는 알고리즘의 실행 시간이나 메모리 사용량을 설명하는데 도움을 준다.
// Big O 표기법은 주어진 알고리즘의 실행 시간이나 공간 사용량이 입력값의 크기에 따라 어떻게 변하는지를 설명한다.
// 예를 들어, O(1), O(n), O(n^2) 등으로 표현되는데 O(1)은 입력의 크기에 상관없이 일정한 실행 시간을 의미하고, O(n)은 입력의 크기에 비례해서 실행 시간이 증가하며, O(n^2)는 입력 크기의 제곱에 비례해서 실행 시간이 증가하는 것을 나타낸다.
// 자바스크립트 알고리즘을 공부하면서 Big O 표기법을 이해하면, 어떤 알고리즘이 입력이 커짐에 따라 얼마나 빨리 혹은 느리게 실행되는지 파악하는 데 도움이 된다.
// 이는 알고리즘을 최적화하거나, 효율적인 알고리즘을 선택하는 데 큰 역할을 한다.

// BIG O는 대략적으로 숫자를 세는 것에 대해 붙인 공식적인 표현이다.
// 입력의 크기와 실행시간의 관계를 말한다.
// 전반적인 추세에 대해 주목하는 것이다.

// 선형적 f(n) = n
// 제곱 f(n) = n^2
// 상수 f(n) = 1

// 2번 함수는 항상 3개의 연산을 실행하므로 O(1)이다
// 1번 함수는 n의 수에 따라 달라지므로 O(n)이다

function countUpAndDown(n) {
    console.log("Going up!");
    for (let i = 0; i < n; i++) {
        console.log(i);
    }

    console.log("At the Top!\nGoing down...");
    for (let j = 0; j >= 0; j--) {
        console.log(j);
    }
    console.log("Back down. Bye!")
}

// 이 함수의 Big O를 찾는다면 우선 볼 것은 n이 커질수록 루프를 실행하는 횟수가 늘어나는 것이다.
// O(n)

function printAllpairs(n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            console.log(i, j)
        }
    }
}

// 2개의 루프가 있고 이는 n에 의해 작동한다.
// n이 커질수록 연산들이 n만큼 증가한다.
// 중첩되있기 때문에 O(n^2)이다.




