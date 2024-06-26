// 소요 시간: 약 1h

function solution(N, stages) {
    let challengingCnt = Array(N).fill(0);
    let players = stages.length;

    // 각 스테이지 별 멈춰있는 플레이어 수 카운트
    for (let i = 0; i < players; i++) {
        const stoppedLevel = stages[i];
        if (stoppedLevel <= N) {
            challengingCnt[stages[i]-1]++;
        }  
    }

    // 각 스테이지 별 (클리어 못한 플레이어 수)/(스테이지에 도전한 플레이어 수)를 구하고,
    // 각 수치의 인덱스 값을 보존하기 위하여 배열에 저장함.
    let failureOfStages = challengingCnt.map((v, i) => {
        const failure = v/players;
        players -= v;
        return [i+1, failure];
    })

    // sort로 내림차순으로 나열한 뒤 각 수치의 인덱스 값을 풀어준다.
    return failureOfStages.sort((a, b) => b[1] - a[1]).map(([a, b]) => a);
}
