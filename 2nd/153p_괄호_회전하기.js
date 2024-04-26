function solution(s) {
// 각 괄호의 짝이 뭔지 빨리 찾을 수 있도록 해시로 묶어줌.
    const pairs = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }

    let count = 0;

  // s 문장을 한바퀴 돌리는 포문
    for (let i = 0; i < s.length; i++) {
        let stack = [];
        
      // s의 괄호를 앞에서부터 하나씩 stack 배열에 push 하고 올바른 괄호일 때 pop() 하는 포문. 
        for (let i = 0; i < s.length; i++) {
            if (pairs[stack[stack.length-1]] === s[i]) 
                stack.pop();
            else stack.push(s[i]);
        }
      
      // 안의 포문 빠져나와 올바른 괄호일 경우 count++ 하고, 다음 순서를 위해 첫번째 괄호를 맨뒤로 보낸다. 
        if (stack.length === 0)
            count++;
        s = s.substring(1)+s[0];
    }
    return count;
}
