// ==UserScript==
// @name         CSDN插件。
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       ZZT
// @match        https://blog.csdn.net/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require    http://code.jquery.com/jquery-1.11.0.min.js
// ==/UserScript==
//$("td.normal font").remove();
//$("td.normal").css("font-family","宋体").css("font-size","18px").css("font-style","normal").css("font-weight","normal").css("color","blue");
//$("b").css("font-family","宋体").css("font-size","18px").css("font-style","normal").css("font-weight","normal").css("color","blue");
alert("欢迎来到内部网!")//弹出对话框
console.log('hello!')//后台调试输出

var r=window.confirm("sometext");
if (r==true)
{
    var x="你按下了\"确定\"按钮!";
    alert(x);
}
else
{
    x="你按下了\"取消\"按钮!";
    alert(x);
}

$("div.toolbar-logo toolbar-subMenu-box csdn-toolbar-fl").remove();
$("a.hasAvatar").click(function(){
   // 动作触发后执行的代码!!
   window.location.href = "https://www.runoob.com";
});
//$("input.editbox3x").click(function(){
//    // 动作触发后执行的代码!!
//});
