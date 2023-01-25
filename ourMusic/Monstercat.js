const indexButtons = document.querySelectorAll("#index > div");
console.log(indexButtons);

const boxs = document.querySelectorAll("#box > div");
console.log(boxs);

// indexButtons.forEach((btn, btnIdx) => {
//   //박스 아래 버튼 이벤트를 위한 for
//   btn.addEventListener("click", () => {
//     boxs.forEach((box, boxIdx) => {
//       box.style.left = (boxIdx - btnIdx) * 100 + "%";
//     });
//   });
// });

//flex로 만들기
const boxContainer = document.querySelector(".boxContainer");

indexButtons.forEach((btn, btnIdx) => {
  // btn : 박스 아래 버튼
  // btnIdx : 박스의 left 값의 앞자리?
  btn.addEventListener("click", () => {
    boxContainer.style.left = btnIdx * -1 * 100 + "%";
  });
  //btnIdx 가 -100, -200 ... 으로 가야하기 떄문에 * -1을 해준다.
});
