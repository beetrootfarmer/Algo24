function solution(picks, minerals) {
    var answer = 0; 
    let index = 0;
    // console.log(picks) [dia, iron, stone]
    // console.log(minerals)
    
    // 1. 다이아몬드 곡괭이가 있을 경우 모두 처리
    // index = (다이아몬드 곡괭이 갯수 * 5)
    index += picks[0] * 5
    
    let left = minerals.length - (index+1)
    if (left > 0){
        // 2. 철 곡괭이가 있을 경우 처리
        for (let i = index ; i < minerals.length; i++){
            
        }
    } else{
        answer = index
    }
    
    
    // 3. 남은 것들은 돌 곡괭이로 처리
    
    // 다이아몬드 > all / all > 돌 / 철 > 철
    // 철 > 다이아몬드 , 돌 > 철
    // 
    return answer;
}