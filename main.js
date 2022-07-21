// <!-- Bài 1 : So sánh 3 số -->
document.getElementById("btnSapXep").onclick = function () {
  //Dau vao
  var soThu1 = document.getElementById("soThu1").value * 1;
  var soThu2 = document.getElementById("soThu2").value * 1;
  var soThu3 = document.getElementById("soThu3").value * 1;
  var sapXep;

  // Xu ly
  if (soThu1 > soThu2 && soThu1 > soThu3 && soThu2 > soThu3) {
    sapXep = soThu3 + " < " + soThu2 + " < " + soThu1;
  } else if (soThu1 > soThu2 && soThu1 > soThu3 && soThu3 > soThu2) {
    sapXep = soThu2 + " < " + soThu3 + " < " + soThu1;
  } else if (soThu2 > soThu1 && soThu2 > soThu3 && soThu1 > soThu3) {
    sapXep = soThu3 + " < " + soThu1 + " < " + soThu2;
  } else if (soThu2 > soThu1 && soThu2 > soThu3 && soThu3 > soThu1) {
    sapXep = soThu1 + " < " + soThu3 + " < " + soThu2;
  } else if (soThu3 > soThu1 && soThu3 > soThu2 && soThu1 > soThu2) {
    sapXep = soThu2 + " < " + soThu1 + " < " + soThu3;
  } else {
    sapXep = soThu1 + " < " + soThu2 + " < " + soThu3;
  }
  //ouput
  document.getElementById("thongBaoSX").innerHTML = sapXep;
};

// <!-- Bài 2 Chương trình "Chào hỏi" -->
document.getElementById("btnChao").onclick = function () {
  //input
  var thanhVien = document.getElementById("thanhVien").value;
  var xinChao;
  //process
  if (thanhVien == "bo") {
    xinChao = "Xin chào Bố";
  } else if (thanhVien == "me") {
    xinChao = "Xin chào Mẹ";
  } else if (thanhVien == "anh") {
    xinChao = "Xin chào Anh Trai";
  } else if (thanhVien == "em") {
    xinChao = "Xin chào Em Gái";
  } else {
    xinChao = "Vui lòng chọn thành viên";
  }
  //output
  document.getElementById("thongBaoChao").innerHTML = xinChao;
};
// <!-- Bài 3 Đếm số chẵn lẻ -->
document.getElementById("btnDem").onclick = function () {
  //Dau vao
  var number1 = document.getElementById("number1").value * 1;
  var number2 = document.getElementById("number2").value * 1;
  var number3 = document.getElementById("number3").value * 1;
  var count = 0;
  var soLe = 0;
  var soChan = 0;

  // Xu ly
  count = number1 % 2 === 0 ? (soChan += 1) : (soLe += 1);
  count = number2 % 2 === 0 ? (soChan += 1) : (soLe += 1);
  count = number3 % 2 === 0 ? (soChan += 1) : (soLe += 1);

  //ouput
  document.getElementById("thongBaoDem").innerHTML =
    "Số chẵn : " + soChan + ", Số lẻ : " + soLe;
};
// <!-- Bài 4 Đoán hình tam giác -->

document.getElementById("btnDoan").onclick = function () {
  //Input
  var a = document.getElementById("canh1").value * 1;
  var b = document.getElementById("canh2").value * 1;
  var c = document.getElementById("canh3").value * 1;
  var loaiTamGiac = "";
  //Xử lý
  if (a == b && a == c && b == c) {
    loaiTamGiac = "Đây là tam giác đều";
  } else if (a == b || a == c || b == c) {
    loaiTamGiac = "Đây là tam giác cân";
  } else if (c * c == a * a + b * b) {
    loaiTamGiac = "Đây là tam giác vuông";
  } else {
    loaiTamGiac = "Một loại tam giác nào đó";
  }
  //output
  document.getElementById("thongBaoTamGiac").innerHTML = loaiTamGiac;
};
