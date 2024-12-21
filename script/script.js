const header = document.querySelector("header");
// 헤더 요소 가져오기

let posY = 0;
// 스크롤 위치값 넣을 변수 생성

window.addEventListener("scroll", (e) => {
    // 스크롤 했을 때
    if (posY < window.scrollY) {
        //posY(0)이 윈도우의 스크롤 값보다 작다면
        // 스크롤 하면 window.scrollY의 값이 생기니까 0보다 커짐!
        headerHide();
        // 헤더를 숨기는 함수를 실행
    } else {
        headerShow();
    }
    posY = window.scrollY;
    // 스크롤을 내렸다면 새로운 값이 들어있을것!
});

function headerHide() {
    header.classList.add("hide");
}

function headerShow() {
    header.classList.remove("hide");
}