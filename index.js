window.onload = function(){
  sastavnica_change(+$('#ddL').val());
  logo_color_change();
}

function change(what) {
  $what = $(what);
  id = $what.attr("name")
  if (id=="katedra" && $what.val().length > 0) {
    $("#katedra").parent().show();
  }
  $("#" + id).html($what.val());
  if (id=="mail") {
    $("#" + id).attr("href", "mailto:"+$what.val())
  }
  if (id=="web") {
    $("#" + id).attr("href", $what.val())
  }
}
function download() {
  var pre = "<html> <head> <meta charset='UTF-8'> </head> <body> <div>";
  var post = "</div></body></html>";
  var blob = new Blob([pre + $("#table_box").html() + post], {
    type: "text/html;charset=utf-8"
  });
  saveAs(blob, "signature-unipu.html");
}

function languange_change(){
  var ddl = $('#ddL').val();
  $('#lblIme').html(data[+ddl].ime +":");
  $('#lblUloga').html(data[+ddl].uloga+":");
  $('#lblBrTele').html(data[+ddl].br_telefona+":");
  $('#lblSastavnica').html(data[+ddl].sastavnica+":");
  $('#lblAdresa').html(data[+ddl].adresa+":");
  $('#lblWeb').html(data[+ddl].web+":");
  $('#lblMail').html(data[+ddl].mail+":");
  $('#td_text').html(data[+ddl].text);
  sastavnica_change(ddl);
  logo_color_change();
}

function sastavnica_change(i){
  $('#opt0').html(sastavnice_data[i].naziv[0]);
  $('#opt1').html(sastavnice_data[i].naziv[1]);
  $('#opt2').html(sastavnice_data[i].naziv[2]);
  $('#opt3').html(sastavnice_data[i].naziv[3]);
  $('#opt4').html(sastavnice_data[i].naziv[4]);
  $('#opt5').html(sastavnice_data[i].naziv[5]);
  $('#opt6').html(sastavnice_data[i].naziv[6]);
  $('#opt7').html(sastavnice_data[i].naziv[7]);
  $('#opt8').html(sastavnice_data[i].naziv[8]);
  $('#opt9').html(sastavnice_data[i].naziv[9]);
  $('#opt10').html(sastavnice_data[i].naziv[10]);
  $('#opt11').html(sastavnice_data[i].naziv[11]);
  $('#opt12').html(sastavnice_data[i].naziv[12]);
}

function logo_color_change(){
  var ddl1 = $('#selectSast').val();
  var ddl2 = $('#ddL').val();
  getMeta(sastavnice_data[+ddl2].url[+ddl1].toString(), +ddl2, +ddl1);
  $('#nav_bar').css("backgroundColor", sastavnice_data[0].color[+ddl1]);
  $('.colorme').css("color", sastavnice_data[0].color[+ddl1]);
  $('#table_box').css("borderColor", sastavnice_data[0].color[+ddl1]);
  $('#logo_img').attr("src", sastavnice_data[+ddl2].url[+ddl1].toString());
  $('#department').html(sastavnice_data[+ddl2].fax + ", "+sastavnice_data[+ddl2].naziv[+ddl1]);
}

function getMeta(url, i1, i2){
  var img = new Image();
  img.onload = function(){
    var r = this.width/this.height;
    if (r == 1){
      $('#logo_img').css("width", "110px");
    }
    else if(r > 1){
      $('#logo_img').css("width", "220px");
    }
  };
  img.src = url;
}
