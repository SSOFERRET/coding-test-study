// 소요시간 30분

// 처음 혼자 풀었을 때 아래와 같이 풀었음
const first_solution =(s) => {
    let count = 0;
    for (let i = 0; i < s.length; i += 1) {
        s[i] === "(" ? count += 1 : count -= 1;
        if (count < 0) return false;
    }
    if (count !== 0) return false;
    return true;
}

// 스택 개념 공부하고 다시 풀었을 때의 솔루션
const seconde_solution =(s) => {
    let stack = [];
    if (s[0] === ")") return false;
    stack.push(s[0]);
    s = s.substring(1);
    
    while (s.length) {
        if (stack[stack.length-1] === "(" && s[0] === ")")
            stack.pop();     
        else 
            stack.push(s[0]);
        s = s.substring(1);
    }
    if (stack.length) return false;
    return true;
}
