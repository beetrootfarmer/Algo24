// 앞에서부터 5개씩잘라서 2차원 배열 만들고 곡괭이별 피로도 파악> 비교해서 효율적으로 곡괭이 순서 할당
function solution(picks, minerals) {
    var answer = 0; 
    let index = 0;
    // console.log(picks) [dia, iron, stone]
    // console.log(minerals)
    
    // 1. 다이아몬드 곡괭이가 있을 경우 모두 처리 :: 피로도 1배수
    // index = (다이아몬드 곡괭이 갯수 * 5)
    index += picks[0] * 5
    answer += index
    let ml = minerals.length
    let left = ml - (index+1)
    if (left > 0){
        // 2. 철 곡괭이가 있을 경우 처리 :: 피로도 1배수,다이아 5배
        if(picks[1]>0){
            let ironP = picks[1]
            let ironTired = 0
            
            for (let i = index ; i < ml; i++){
                if(ironTired == 5){
                    ironP -= 1
                    ironTired = 0
                    if(ironP == 0){
                        break;
                    }
                }
                if(minerals[i] == 'diamond'){
                    answer += 5
                }else{
                    answer += 1
                }
                ironTired += 1
            }
            index += picks[1] * 5
        }
        // 3. 남은 것들은 돌 곡괭이로 처리
        if(picks[2]>0 && index<ml){
            left = (picks[2]*5) > (ml-index+1) ? ml : (picks[2]*5)+index
            for (let i = index ; i < left; i++){
                if(minerals[i] == 'diamond'){
                    answer += 25
                }else if(minerals[i] == 'iron'){
                    answer += 5
                }else{
                    answer += 1
                }
            }

        }
    } else{
        answer = index
    }
    
    
    
    // 다이아몬드 > all / all > 돌 / 철 > 철
    // 철 > 다이아몬드 , 돌 > 철
    // 
    return answer;
}