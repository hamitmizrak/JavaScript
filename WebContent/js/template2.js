/* ++++++++++++++++++++++++++++++++++++ querySelector +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//querySelector
//function querySelectorMethod() {
//alert("Tıklandı")
//document.getElementById("addParagrafId").innerHTML = "Değiştirsin";

//querySelector ==> getElementById(),getElementsByTagName(),getElementsByName(),getElementsByClasName()
//querySelector() ==> kim olursa olsun ilk yapıyı çağırmak için kullanıyoruz.
//document.querySelector("p").innerHTML = "Değiştirsin";
//}

//function querySelectorMethod() {
//document.getElementById("addParagrafId2").innerText = "query eklendi";
//document.querySelector("#addParagrafId2").innerText = "query eklendi";
//document.querySelector(".addParagrafClass2").innerText = "query eklendi";
//document.querySelector("p").innerText = "query eklendi";
// document.querySelector("#deneme > p").innerText = "query eklendi";
//}

/* ++++++++++++++++++++++++++++++++++++ querySelectorAll +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
// function querySelectorMethodAll() {
//   var pDizisi = document.querySelectorAll("p");
//  // console.log(pDizisi);

//  for( temp  in pDizisi){
//    pDizisi[temp].innerHTML="Değişti";
//  }
// }

/* ++++++++++++++++++++++++++++++++++++ addEventListener("click",function(){}) +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//addEventListener
// function eklendi() {
//document.getElementById("addId").addEventListener();
//document.getElementById("addId").addEventListener("click",function(){});  ==> Anonymous function(){}
//   document.getElementById("addId").addEventListener("click", function () {
//     alert("Butona tıklanıldı");
//     console.log("Butona tıklanıldı");
//     document.querySelector("p").innerHTML = "Butona tıklanıldı 44";
//   });
// }

//DOM
function butunHtml() {
  document.getElementById("htmlId").innerHTML = "<h1>inner Html Eklendi</h1>";
}

function butunText() {
  document.getElementById("textId").innerText = "<h1>inner Html Eklendi</h1>";
}

function inlineCss() {
  document.getElementById("cssId").style.color = "red";
  document.getElementById("cssId").style.fontSize = "121px";
  document.getElementById("cssId").style.background = "blue";
  document.getElementById("cssId").style.border = "19px dotted green";
}

//classList.add();
function internalCss() {
  document.getElementById("cssId2").classList.add("cssAll44");
}

/* ++++++++++++++++++++++++++++++++++++ querySelector +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
