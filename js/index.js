/*
*   信息栏-切换
*/
window.onload = function () {
    var oTp = document.getElementById('tp');
    var str = ["img/body/info/info1.jpg","img/body/info/info2.jpg","img/body/info/info3.jpg","img/body/info/info4.jpg"];
    var img = 0;
    setInterval(function () {
        img++;
        if (img >=str.length){
            img = 0;
        }
        oTp.src = str[img];
    },6000)
}

/*
*   手机返回主界面
*/
/*window.onload = function () {
    var oIphone_but = document.getElementById('iphone_but');
    var oIphone_if = document.getElementById('iphone_if');
    var iphone = 0;
    oIphone_but.onclick = function () {
        oIphone_if.className = 'if_no';
        iphone = iphone+1;
        if (iphone%2===0){
            oIphone_if.className = 'if_yes';
        }
    }
}*/
var oIphone_but = document.getElementById('iphone_but');
var oIphone_if = document.getElementById('iphone_if');
oIphone_but.onclick = function back() {
    oIphone_if.src = 'iphone/iphone.html';
}

/*
*   功能
*/
var oLs = document.getElementById('index_ls');
var oAs = document.getElementById('index_as');
var oLink = document.getElementById('index_link');

oLs.onclick = function () {
    oLink.href = "css/index.css"
}
oAs.onclick = function () {
    oLink.href = "css/index_as.css"
}