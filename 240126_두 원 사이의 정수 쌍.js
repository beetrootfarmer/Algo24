function solution(r1, r2) {
    var answer = 0;
    let querter = 0;
    // 두 원의 반지름(모두 중심이 원점)
    // 두 원 중 더 큰 원을 찾기 
    // 포함하는 범위 : 
    // (1) 큰원이 지나는 (0,R) (R,0) (-R,0) (0,-R) 
    // (2) 큰 원 안의 사각형 (-(R-1),-(R-1)) ((R-1),(R-1)) ((R-1),-(R-1)) (-(R-1),(R-1))
    // (3) 최소 범위/ 작은원이 지나는 (0,r) (r,0) (-r,0) (0,-r)
    // (2)와 (3) 사이의 정수 지점을 찾아서 count 

    //(4) (2)와 (3) 사이의 정수 지점 
    //(5) 작은원과 큰원 사이(0,r) ~ (0,R) 정수
    // (4)*4 + (5)*4

    // (4) (r-1,r-1)~(R-1, R-1)
    const R = r1>r2?r1:r2
    const r = r1<r2?r1:r2
    const rm1 = r-1
    for(let x = rm1; x<R; x++){
        for(let y = rm1; y<R; y++){
            if(x== rm1 && y == rm1){
                continue
            } else{
                // console.log(`x : ${x} ,  y : ${y}`)
                querter += 1
            }
        }
    }

    // (5)
    for(let i = r; i<=R; i++){
        // console.log(`0,x 에서 y ${i}`)
        querter += 1
    }
    
    answer = querter*4
    return answer;
}