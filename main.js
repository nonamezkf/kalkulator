let tombol = document.querySelector('.button_section');
let layar = document.querySelector('#layar');

tombol.addEventListener('click', function(e){
    let tombolClick = e.target;
    let nilaiTombol = tombolClick.innerText;
 
    if(nilaiTombol == "C"){
        layar.value = "";
    }
    else if(nilaiTombol == "<"){
        layar.value = layar.value.slice(0, -1);
    }
    else if(nilaiTombol == "="){
        layar.value = eval(layar.value);
    }else{
        layar.value = layar.value + nilaiTombol;
    }
});



















































































































// var layar = document.querySelector("#layar");
// var tombol = document.querySelector(".button_section");
// var resetLayar = false;
// var bolehHitung = false;
// var tmpVal = "";
// var operator = "";

// tombol.addEventListener("click", function (e) {
//   var tombolClick = e.target;
//   var nilaiTombol = tombolClick.innerText;
//   if (nilaiTombol == "C") {
//     layar.value = "";
//     tmpVal = "";

//     /* tambahkan ini untuk clear nilai sementara */
//   } else if (nilaiTombol == "<") {
//     layar.value = layar.value.slice(0, -1);
//   } else if (nilaiTombol == "=") {
//     if (bolehHitung == true) {
//       layar.value = eval(tmpVal + operator + layar.value);
//       bolehHitung = false;
//     }
//   } else if (nilaiTombol == ".") {
//     /* Tambahkan else if dibawah ini agar ketika kamu menulis titik maka tidak langsung melakukan perhitungan */ 
//     layar.value = layar.value + nilaiTombol;
//   } else if (tombolClick.classList.contains("operator")) {
//     if (bolehHitung == true) {
//       layar.value = eval(tmpVal + operator + layar.value);
//       bolehHitung = false;
//     }
//     tmpVal = layar.value;
//     operator = nilaiTombol;
//     resetLayar = true;
//   } else {
//     if (resetLayar == true) {
//       layar.value = nilaiTombol;
//       resetLayar = false;
//       bolehHitung = true;
//     } else {
//       layar.value = layar.value + nilaiTombol;
//     }
//   }
// });
