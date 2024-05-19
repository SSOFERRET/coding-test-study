function solution(N, K) {
  let arr = Array(N).fill(0).map((_, i) => i+1);
  console.log(arr);
  let counter = 1;
  while(arr.length !== 1) {
    if (counter === K) {
      arr = arr.slice(1);
      counter = 1;
    }
    else {
      arr = [...arr.slice(1), arr[0]];
      counter++;
    }
    console.log(arr);
  }
  return arr[0];
}

solution(7, 3);
