function para(t){var n=Math.abs(t);return n=Math.pow(1.04,n),n*=-1,n+=52,n<30&&(n=30),n}$(document).ready(function(){$(".text").keyup(function(){var t=para($("#tp_txt").text().length),n=para($("#bt_txt").text().length);$("#tp_txt").css("font-size",t),$("#bt_txt").css("font-size",n)}),$("#download").click(function(){html2canvas($("#image"),{onrendered:function(t){var n=t.toDataURL("image/png");document.getElementById("download").href=n}})})});