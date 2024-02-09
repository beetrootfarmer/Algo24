function mineral5(picks, minerals){
    let minerals5 = []
    let inner = []
    let costCheck = {0:0} // index of minerals5 : cost
    const costMineral = {'diamond' : 1, 'iron' : 2, 'stone' : 3}
    // 이후에 costCheck를 작은 순서대로 배치하고 순서대로(diamond, iron, stone) 수확
    let minerals5Idx = 0
    minerals.map((m,i) =>{
        
        if((i%5) == 0 && (i > 0)){
            minerals5.push(inner)
            minerals5Idx += 1
            costCheck[minerals5Idx] = 0

            inner = []
        }
        costCheck[minerals5Idx] += costMineral[m]
        inner.push(m)
        if(i+1 == minerals.length){
            minerals5.push(inner)
        }
    })
    
    // console.log(minerals5)
    
    // costCheck 기준으로 minerals5를 작은 수 기준 정렬 후 받아오기
    const sortable = Object.entries(costCheck)
        .sort(([, a], [, b]) => a - b)
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
    
    console.log(sortable)
    return minerals5
}

// 앞에서부터 5개씩잘라서 2차원 배열 만들고 곡괭이별 피로도 파악> 비교해서 효율적으로 곡괭이 순서 할당
function solution(picks, minerals) {
    var answer = 0; 
    // console.log(picks) [dia, iron, stone]
    // console.log(minerals)
    // 딕셔너리를 만들어서 접근하도록
    const diaP = {'diamond' : 1, 'iron' : 1, 'stone' : 1}
    const ironP = {'diamond' : 5, 'iron' : 1, 'stone' : 1}
    const stoneP = {'diamond' : 25, 'iron' : 5, 'stone' : 1}

    const ml = minerals.length
    const totalPicks = Math.ceil(ml /5)  // 필요한 총 곡갱이 갯수
    let minEffort = ml * 25

    mineral5(picks, minerals)
    
    console.log('answer: ' + answer)
    return answer;
}
let picks = [1, 3, 2]
let mnr = ["diamond", "iron", "stone", "iron", "iron", "diamond", "diamond", "diamond"]
solution(picks, mnr)