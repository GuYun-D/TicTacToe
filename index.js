// 获取九个格子
var cells = document.querySelectorAll(".cell");
// 获取提示div
var gameBord = document.querySelector("#bord");
// 枚举玩家
var Player;
(function (Player) {
    Player["x"] = "x";
    Player["o"] = "o";
})(Player || (Player = {}));
// 玩家变量
var currentPlayer = Player.x;
// let currentPlayer: Player = Player.x
// 每个添加点击事件
cells.forEach(function (item) {
    // 类型断言
    var cell = item;
    /**
     * 事件对象也应该进行类型断言
     */
    cell.addEventListener('click', clickCill, { once: true });
});
// 处理单元格click事件函数
function clickCill(event) {
    // 获取被点击的对象
    var target = event.target;
    // 添加类名
    target.classList.add(currentPlayer);
    // 切换玩家
    currentPlayer = currentPlayer === Player.x ? Player.o : Player.x;
    // 切换提示，移除游戏面板中的x和o的类名，添加下一个玩家对应的类名
    gameBord.classList.remove(Player.x, Player.o);
    gameBord.classList.add(currentPlayer);
}
