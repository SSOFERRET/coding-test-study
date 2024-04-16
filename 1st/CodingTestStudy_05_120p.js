function solution(arr1, arr2) {
    const answer = [];
    const len = arr2[0].length;

    arr1.forEach((v, i) => {
        const row = [];
        for (let j = 0; j < len; j++) {
            const value = v.reduce((a, c, k) => a + c * arr2[k][j], 0);
            row.push(value);
        }
        answer.push(row);
    })
    return answer;
}