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
  $("#download").click(function(){
    var imgDtUrl;

    html2canvas(document.getElementById("#image") , {
      onrendered: function (canvas) {
          imgDtUrl = canvas.toDataURL('image/png',1.0);
      }
    });

    document.getElementById('#img_out').src = imgDtUrl;
  });
});
