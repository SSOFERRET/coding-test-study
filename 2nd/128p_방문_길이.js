// 소요시간: 약 30분
// 자료구조: 해시

function solution(dirs) {
    let [x, y] = [0, 0];
    let route = {};
    let count = 0;

  //지나왔던 길인지 여부를 재빨리 검색할 수 있도록 해시 자료구조로 루트를 저장하였다.
  
    for (let i = 0; i < dirs.length; i++) {
        const [a, b] = [x, y];
        if (dirs[i] === "U" && y <= 4) y++;
        else if (dirs[i] === "D" && y >= -4) y--;
        else if (dirs[i] === "R" && x <= 4) x++;
        else if (dirs[i] === "L" && x >= -4) x--;

        const back = `${a},${b}`;
        const forward = `${x},${y}`;
        if (back === forward) continue;

        if (!route[back]) route[back] = [];
        if (!route[forward]) route[forward] = [];
        if (!route[back].includes(forward) && !route[forward].includes(back)) count++;
        if (!route[back].includes(forward)) route[back].push(forward);
        if (!route[forward].includes(back)) route[forward].push(back);
    }
    return count;
}
