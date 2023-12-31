let names = ["Michael", "Melissa", "Andrea"];
let values = [true, {}, [], 2, "awesome"];

// Access에 관해
// 배열에는 인덱스가 있어서 자바스크립트는 원하는 인덱스로 바로 갈 수 있다.
// 그렇기 때문에 배열이 얼마나 긴지는 중요하지 않다.
//
// Big O of Arrays
// Insertion - 어디에 입력하는지에 따라 다르다 : 뒤에 입력하는 것은 기존의 인덱스에 변화가 생기지 않아 상수 시간이 걸리지만 앞에 입력을 하면 기존의 인덱스가 다 깨지므로 엘리멘트마다 하나씩 작업해야 하므로 O(N) 시간이 걸린다.
// Removal - 어디에 입력하는지에 따라 다르다 : 제거도 마찬가지다. 뒤에 있는 것을 지우는 것은 변화가 생기지 않지만 앞에 제거를 하면 인덱스를 다 엘리멘트마다 작업해줘야 하므로 O(N) 시간이 걸린다.
// Searching - O(N)
// Access - O(1)

