//마우스 올렸을 떄 txt 색상 변하게 하기

let button = document.querySelector(".buttons");

button.addEventListener(
  "mouseover",
  (e) => {
    e.target.style.color = "black";
  },
  false
);

button.addEventListener(
  "mouseout",
  (e) => {
    e.target.style.color = "white";
  },
  false
);

// 이벤트 타겟 (버튼) 영역에 hover하면 다 적용되는게 아니라, span 위치까지 가야 변경됨.
// 묶어서 변경할 수 있는 방법은?
