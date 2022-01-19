function solution(numbers, hand) {
    const coords = [[3, 1], [0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]];
    let ans = '';
    
    // x좌표 차이 + y 좌표 차이 = 거리
    let left = [3, 0];
    let right = [3, 2];
    
    let lefts = [1, 4, 7];
    let rights = [3, 6, 9];
    
    numbers.map(num => {
        if (lefts.indexOf(num) > -1) {
            left = coords[num];
            ans += 'L';
        }
        else if (rights.indexOf(num) > -1) {
            right = coords[num];
            ans += 'R';
        }
        else {
            // 거리 계산
            let [cur_x, cur_y] = coords[num];
            
            const l_dis = Math.abs(left[0] - cur_x) + Math.abs(left[1] - cur_y);
            const r_dis = Math.abs(right[0] - cur_x) + Math.abs(right[1] - cur_y);
            
            if (l_dis < r_dis) {
                left = [cur_x, cur_y];
                ans += 'L';
            }
            else if (l_dis > r_dis) {
                right = [cur_x, cur_y];
                ans += 'R';
            }
            else {
                if (hand === 'left') {
                    left = [cur_x, cur_y];
                    ans += 'L';
                }
                else {
                    right = [cur_x, cur_y];
                    ans += 'R';
                }
            }
        }
    });
    
    return ans;
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],"right")