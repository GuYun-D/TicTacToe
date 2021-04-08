var hiddenBtn = document.getElementById("hiddenBtn");
var leftBox = document.querySelector('.left-contain');
var titleBox = leftBox.getElementsByTagName("span");
var mainContain = document.querySelector('.right-contain');
var introduceBtn = document.getElementById("introduce");
var introduceList = document.querySelector('.introduce-list');
var codeBtn = document.querySelector('.code');
var codeList = document.querySelector('.code-list');
var inLiBox = introduceList.getElementsByTagName('li');
var codeBox = codeList.getElementsByTagName('li');
console.log(inLiBox);
console.dir(inLiBox);
// 控制侧边栏的展开
var isOpen = true;
// 控制游戏介绍的展开与隐藏
var introduceOpen = true;
// 控制代码介绍的展开与隐藏
var codeOpen = true;
hiddenBtn.addEventListener('click', function () {
    if (isOpen) {
        handleOpen('100px', '0px', '150px', false);
    }
    else {
        handleOpen('200px', '16px', '250px', true);
    }
});
introduceBtn.addEventListener("click", handleListOpen);
codeBtn.addEventListener("click", handleCodeListOpen);
// 展开与隐藏的函数
function handleOpen(width, fontSize, paddingLeft, openStatus) {
    leftBox.style.width = width;
    for (var i = 0; i < titleBox.length; i++) {
        titleBox[i].style.fontSize = fontSize;
    }
    mainContain.style.paddingLeft = paddingLeft;
    isOpen = openStatus;
}
function handleListOpen() {
    if (introduceOpen) {
        for (var i = 0; i < inLiBox.length; i++) {
            inLiBox[i].style.height = '0';
            inLiBox[i].style.borderBottom = 'none';
            inLiBox[i].style.fontSize = '0';
        }
        introduceOpen = false;
    }
    else {
        for (var i = 0; i < inLiBox.length; i++) {
            inLiBox[i].style.height = '50px';
            inLiBox[i].style.borderBottom = '1px solid yellow';
            inLiBox[i].style.fontSize = '16px';
        }
        introduceOpen = true;
    }
}
function handleCodeListOpen() {
    if (codeOpen) {
        for (var i = 0; i < codeBox.length; i++) {
            codeBox[i].style.height = '0';
            codeBox[i].style.borderBottom = 'none';
            codeBox[i].style.fontSize = '0';
        }
        codeOpen = false;
    }
    else {
        for (var i = 0; i < codeBox.length; i++) {
            codeBox[i].style.height = '50px';
            codeBox[i].style.borderBottom = '1px solid yellow';
            codeBox[i].style.fontSize = '16px';
        }
        codeOpen = true;
    }
}
