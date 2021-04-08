let hiddenBtn = document.getElementById("hiddenBtn")
let leftBox = document.querySelector('.left-contain') as HTMLDivElement
let titleBox = leftBox.getElementsByTagName("span")
let mainContain = document.querySelector('.right-contain') as HTMLDivElement
let introduceBtn = document.getElementById("introduce");
let introduceList = document.querySelector('.introduce-list') as HTMLUListElement
let codeBtn = document.querySelector('.code') as HTMLUListElement
let codeList = document.querySelector('.code-list') as HTMLUListElement
let inLiBox = introduceList.getElementsByTagName('li')
let codeBox = codeList.getElementsByTagName('li')

console.log(inLiBox);
console.dir(inLiBox);

// 控制侧边栏的展开
let isOpen = true;
// 控制游戏介绍的展开与隐藏
let introduceOpen = true;
// 控制代码介绍的展开与隐藏
let codeOpen = true;



hiddenBtn.addEventListener('click', function () {
    if (isOpen) {
        handleOpen('100px', '0px', '150px', false)
    } else {
        handleOpen('200px', '16px', '250px', true)
    }
})

introduceBtn.addEventListener("click", handleListOpen)
codeBtn.addEventListener("click", handleCodeListOpen)

// 展开与隐藏的函数
function handleOpen(width: string, fontSize: string, paddingLeft: string, openStatus: boolean) {
    leftBox.style.width = width
    for (let i = 0; i < titleBox.length; i++) {
        titleBox[i].style.fontSize = fontSize
    }
    mainContain.style.paddingLeft = paddingLeft
    isOpen = openStatus
}

function handleListOpen() {
    if (introduceOpen) {
        for (let i = 0; i < inLiBox.length; i++) {
            inLiBox[i].style.height = '0'
            inLiBox[i].style.borderBottom = 'none'
            inLiBox[i].style.fontSize = '0'
        }
        introduceOpen = false
    } else {
        for (let i = 0; i < inLiBox.length; i++) {
            inLiBox[i].style.height = '50px'
            inLiBox[i].style.borderBottom = '1px solid yellow'
            inLiBox[i].style.fontSize = '16px'
        }
        introduceOpen = true
    }
}

function handleCodeListOpen() {
    if (codeOpen) {
        for (let i = 0; i < codeBox.length; i++) {
            codeBox[i].style.height = '0'
            codeBox[i].style.borderBottom = 'none'
            codeBox[i].style.fontSize = '0'
        }
        codeOpen = false
    } else {
        for (let i = 0; i < codeBox.length; i++) {
            codeBox[i].style.height = '50px'
            codeBox[i].style.borderBottom = '1px solid yellow'
            codeBox[i].style.fontSize = '16px'
        }
        codeOpen = true
    }

}