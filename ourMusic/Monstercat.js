// import songList from './songList.json' assert {type : 'json'};

// 배너바꾸기
const musicData = [
    {
        albumSrc: "https://cdx.monstercat.com?encoding=webp&url=https%3A%2F%2Fwww.monstercat.com%2Frelease%2FMCS1394%2Fcover&width=512",
        title: "FLYING",
        artist: "CURBI",
        artistSrc: ["https://cdx.monstercat.com?encoding=webp&url=https%3A%2F%2Fwww.monstercat.com%2Fartist%2Fcurbi%2Fphoto%3Ftype%3Dprofile%268e03fbff-a169-4722-b18c-9b85097456a4&width=256"],
        color: "mediumpurple",
    },
    {
        albumSrc: "https://cdx.monstercat.com?encoding=webp&url=https%3A%2F%2Fwww.monstercat.com%2Frelease%2FMCS1429%2Fcover&width=512",
        title: "DEAD MAN WALKING",
        artist: "GRANT & ELLIS",
        artistSrc: ["https://cdx.monstercat.com?encoding=webp&url=https%3A%2F%2Fwww.monstercat.com%2Fartist%2Fgrant%2Fphoto%3Ftype%3Dprofile%262b5b6c0a-94cb-48ad-8280-1cd28e25132a&width=256","https://cdx.monstercat.com?encoding=webp&url=https%3A%2F%2Fwww.monstercat.com%2Fartist%2FEllis%2Fphoto%3Ftype%3Dprofile%26065e0207-8989-40c5-b6b8-438750283571&width=256"],
        color: "mediumpurple",
    },
    {
        albumSrc: "https://cdx.monstercat.com?encoding=webp&url=https%3A%2F%2Fwww.monstercat.com%2Frelease%2FMCS1476%2Fcover&width=512",
        title: "THE DEAD MARCH",
        artist: "SULLIVAN KING & RAY VOLPE",
        artistSrc: ["https://cdx.monstercat.com?encoding=webp&url=https%3A%2F%2Fwww.monstercat.com%2Fartist%2Fsullivanking%2Fphoto%3Ftype%3Dprofile%26cf35e804-1ecd-46eb-8cdb-ff7d89833000&width=256", "https://cdx.monstercat.com?encoding=webp&url=https%3A%2F%2Fwww.monstercat.com%2Fartist%2Fray-volpe%2Fphoto%3Ftype%3Dprofile%268f92b04a-64a9-4d15-8363-c7207692f231&width=256"],
        color: "mediumpurple",
    },
    {
        albumSrc: "https://cdx.monstercat.com?encoding=webp&url=https%3A%2F%2Fwww.monstercat.com%2Frelease%2FMCS1430%2Fcover&width=512",
        title: "OVER THE WATER",
        artist: "ATTLAS & MANGO",
        artistSrc: ["https://cdx.monstercat.com?encoding=webp&url=https%3A%2F%2Fwww.monstercat.com%2Fartist%2FATTLAS%2Fphoto%3Ftype%3Dprofile%26611f7767-4f2d-4213-9138-4046c1ac81cf&width=256", "https://cdx.monstercat.com?encoding=webp&url=https%3A%2F%2Fwww.monstercat.com%2Fartist%2Fmango%2Fphoto%3Ftype%3Dprofile%264d49cf6a-f96c-4dc0-87ee-2b9cccd2657f&width=256"],
        color: "coral",
    },
    {
        albumSrc: "https://cdx.monstercat.com?encoding=webp&url=https%3A%2F%2Fwww.monstercat.com%2Frelease%2FMCS1341%2Fcover&width=512",
        title: "DO IT ALL AGAIN",
        artist: "PUNCTUAL FEAT. JORDAN SHAW",
        artistSrc: ["https://cdx.monstercat.com?encoding=webp&url=https%3A%2F%2Fwww.monstercat.com%2Fartist%2Fpunctual%2Fphoto%3Ftype%3Dprofile%26d642467e-f948-4bf5-8d2b-d31c421befeb&width=256", "https://cdx.monstercat.com?encoding=webp&url=https%3A%2F%2Fwww.monstercat.com%2Fartist%2Fjordan-shaw%2Fphoto%3Ftype%3Dprofile%267efff825-43fe-42ec-9849-317586a17737&width=256"],
        color: "rgb(149, 180, 180)",
    }
]

// 앨범이미지
let $albumImg = document.querySelector('#albumImg');
// 버튼
let $buttonIndex = document.querySelector('#index');
// 인덱스
let index = 0;

// 타이틀
let $title = document.getElementById('title');
// 아티스트
let $artist = document.getElementById('artist');
// 아티스트 이미지
let $artistImg = document.getElementById('artistImgBox');
// viewmore
let $viewmore =document.querySelector('#viewmore');
// 박스
let $box = document.querySelector('#box');


for(let el of $buttonIndex.children){
    el.addEventListener('click', change);
}



function change(){

    $artistImg.innerHTML = '';

    for(let el of $buttonIndex.children){
        el.style.backgroundColor = "black";

    }
    this.style.backgroundColor = "white";

    // 버튼이 눌렸을때 인덱스를 index에 저장(musicData에 해당 인덱스를 보여주기 위함)
    index = [...$buttonIndex.children].findIndex(item=>item==this);


    // 변경 내용
    $albumImg.src = musicData[index].albumSrc;
    $title.innerHTML = musicData[index].title;
    $artist.innerHTML = musicData[index].artist;
    
    // 아티스트 이미지 변경
    for(let el of musicData[index].artistSrc){
        const $div = document.createElement('div');
        $div.classList.add('artistImg');
        $div.style.background = `url(${el}) no-repeat center`;
        $div.style.backgroundSize = 'cover';
        $artistImg.append($div);
    }

    // viewmore 색변경
    $viewmore.style.backgroundColor = musicData[index].color;
    // 뒤에 백그라운드 변경
    $box.style.background = `url(${musicData[index].albumSrc}) no-repeat center`;
    $box.style.backgroundSize = 'cover';
    // 넘어가는 효과
    $box.style.animation = 'effect1 1s ease';
    // 애니메이션을 수행한뒤 지워줘야 다른것을 플레이해줄때 또 애니메이션이 보임
    setTimeout(()=>{
        $box.style.animation = '';
    },1000);
 
}

// 5초마다 넘어가기

// setInterval(auto, 5000);
let btnIndex = 0;
function auto(){
    console.log(btnIndex);
    btnIndex++;
    if(btnIndex>$buttonIndex.children.length-1){
        btnIndex=0;
    }
    for(let el of $buttonIndex.children){
        el.style.backgroundColor = 'black';
    }
    $buttonIndex.children[btnIndex].style.backgroundColor = 'white';
}

// 카드 만들기
/* 
const $latestSection = document.querySelector('#latestList');
for ( item of songList) {
    console.log('정상작동');
    const $listItem = document.createElement('div');
    $listItem.innerHTML = `
        <img src=${item.src} />
        <span>${item.title}</span>
        <span>${item.singer}</span>
    `;
    $latestSection.append($listItem);
}
*/