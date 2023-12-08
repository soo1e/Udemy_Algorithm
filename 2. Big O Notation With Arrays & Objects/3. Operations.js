// Array
// push - O(1)
// pop - O(1)
// shift - O(N)
// unshift - O(N)
// concat - O(N) -> 여러 배열을 합쳐준다
// slice - O(N) -> 배열을 가져온다
// splice - O(N) -> 엘리멘터를 제거하고 추가한다.
// sort - O(N * log N)
// forEach/map/filter/reduce/etc. - O(N)

// 객체와 배열을 봤을 때 가장 중요한 점은 객체는 모든 것을 더 빠르게 하지만, 정렬되어 있지 않고
// 배열은 정렬되어 있지만, 끝에 추가하고 제거하는 것이 시작에 추가하고 제거하는 것보다 훨씬 빠르다는 것이다.