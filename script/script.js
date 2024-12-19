window.addEventListener("scroll",() => {
    const scrollBar = document.querySelector(".scroll_bar");
    const scrollY = window.scrollY;
    const scrollHeight = document.body.scrollHeight - window.innerHeight;
    // document.body.scrollHeight : 문서의 전체 높이
    // window.innerHeight : 화면에 보여지는 높이
    // 두 값을 빼면 스크롤 할 수 있는 거리를 구할 수 있다. 

    const scrollPercent = (scrollY / scrollHeight) * 100;
    // (현재 스크롤 위치 / 스크롤 가능한 전체 길이) * 100

    scrollBar.style.width = `${scrollPercent}%`
});