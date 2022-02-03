function solution(files) {
    let answer = [];
    //HEAD, NUMBER, TAIL 구분
    //NUMBER를 기준으로 앞/뒤 구분 search(정규식)
    let len = files.length;
    const reg = /(\d+)/g; //숫자가 1개이상 매칭되는 정규식(메모리 고려)
    for (let i = 0; i < len; i++) {
      answer.push({ index: i, value: files[i].split(reg) }); //[{index:0~n, value:[HEAD, NUMBER, TAIL]}]
    }
    console.log(answer)
    answer.sort((a, b) => {
        //HEAD의 값을 비교
        const a_head = a.value[0].toLowerCase();
        const b_head = b.value[0].toLowerCase();
        if (a_head < b_head) return -1;
        else if (a_head > b_head) return 1;
        else {
          //HEAD가 같은경우 NUMBER를 비교
          const a_number = Number(a.value[1]); //Number로 앞의 0을 제거
          const b_number = Number(b.value[1]);
          if (a_number > b_number) return 1;
          else if (a_number < b_number) return -1;
          else {
            //HEAD, NUMBER가 같은 경우 index로 순서보장
            if (a.index < b.index) return -1;
            else return 1;
          }
        }
      });
      console.log(answer)
}

solution( ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"])