function solution(answers) {
    const supoza1 = [1,2,3,4,5];
    const supoza2 = [2,1,2,3,2,4,2,5];
    const supoza3 = [3,3,1,1,2,2,4,4,5,5];
    
    const scores = [0,0,0];
    
    for (let i = 0; i < answers.length; i += 1) {
        if (supoza1[i%5] === answers[i]) scores[0] += 1;
        if (supoza2[i%8] === answers[i]) scores[1] += 1;
        if (supoza3[i%10] === answers[i]) scores[2] += 1;
    }
    
    const result = [];
    const max = Math.max(...scores)
    
    scores.forEach((score, i) => {
        if (score === max) result.push(i+1);
    })
    return result;
}