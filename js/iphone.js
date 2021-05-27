/*
*   手机时间
*/
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, // 月份
        "d+": this.getDate(), // 日
        "h+": this.getHours(), // 小时
        "m+": this.getMinutes(), // 分
        "s+": this.getSeconds(), // 秒
        "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
        "S": this.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
//时间调用函数-使用方法
/*
    var time1 = new Date().Format("yyyy-mm-dd");
    var time2 = new Date().Format("yyyy-mm-dd hh:mm:ss");
*/

function getDate(){
    var date = new Date().Format("hh:mm:ss");
    var oNav_time = document.getElementById("nav_time");
    oNav_time.innerHTML = date;
}
setInterval("getDate()",1000);
getDate(); //异步回调