function para(i){
  var out = Math.abs(i);
  out = Math.pow(1.04, out);
  out = -1 * out;
  out = out + 52;

  if(out < 30){
    out = 30;
  }

  return out;
}

$(document).ready(function(){
  $(".text").keyup(function(){
    var tp_out =  para($("#tp_txt").text().length);
    var bt_out = para($("#bt_txt").text().length);
    $("#tp_txt").css("font-size", tp_out);
    $("#bt_txt").css("font-size", bt_out);
  });
  $("#process").click(function(){
    html2canvas($("#image"), {
      onrendered: function (canvas) {
        var img = canvas.toDataURL("image/png");
        document.getElementById("download").href = img;
        document.getElementById("prvw").src = img;
      }
    });
  });
});
