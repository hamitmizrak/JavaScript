//"use strict"
/*
katı kurallar bütünüdür. 
Güvenliği sağlamak.
a=5; yazamayız mutlaka var a=5; yazmamız gerekir.
değişken veya nesne silinmesine izin verilmez.
var x=5;
delete x;
fonksiyonda aynı parametre yazılmasına izin verilmez.
function name (x1,x1);
Escape karakter yazamayız.
Sekizli sayıyı kullanamayız.
with izin verilmez
public  izin verilmez.
private  izin verilmez.
protected  izin verilmez.
static  izin verilmez.
yield  izin verilmez.
let  izin verilmez.
package  izin verilmez.
implements izin verilmez.
interface  izin verilmez.
*/

//comment= Yorumlama
//tek satırlım yorumlama

//kısaltma: Ctrl+K

/* 
çoklu satırlar
*/

/* ++++++++++++++++++++++++++++++++++++++++++++++ OUTPUT +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//output
// console.log("yazılımcının kodlamada işlem yapabilmesini sağlayan yapıdır")
// window.alert("window alert")
// alert("Ekrandan Göster");
// document.write("document write 44")

//js yazmıyoruz: <script></script>

/* ++++++++++++++++++++++++++++++++++++++++++++++ DEĞİŞKENLER+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
// dinamik için değişkenler
// değişkenlerde white space= boşluk yazalım
//var = global değişkenlerde kullanabiliyoruz ancak tehlikelidir.
//global değişkenler
// var kalem = 'Adel 44';
// document.write(kalem);
// kalem="Rotring";
// document.write(" "+kalem);

//let-const: ortak yönleri localdir
//let-const: farklı yönleri const: değiştiremezsiniz.
//local değişkenler
// let _sayi =44;
// document.write(_sayi);
// _sayi=999;

/*local değişkenler const: sabittir değiştirmezsin */
// const sabit=55;
// alert($sabit);

/* Büyük resme bakış */
// var xyz;
// xyz=44; //ondalık sayı
// xyz=44.55; //virgülü sayı
// xyz="Hamit Mızrak"; //kelimesel
// xyz=true; //boolean
// xyz=["Hamit","Mızrak","JavaScript"];
// xyz={adi:"Hamit",soyadi:"Mızrak",dil:"JavaScript"}

/* +++++++++++++++++++++++++++++++++++++++++++++++++UNDEFINED +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* undefined : içeriği girilmemiz yapılara denir */
// var sayi;
// alert(sayi);

/* ++++++++++++++++++++++++++++++++++++++++++++ OPERARÖRLER +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* OPERATÖRLER */
//operatörler:
// Mantıksal Operators    (logic operators)  Bitwise  &=ve |=veya ^=değil
// Mathematics Operators (matematik operatörler) + - * / %  x**y
// Comparison Operators  >  ,  <  ,  >=  ,  <=  ,   !   ==   ===
// 10=="10" (true)   10==="10" (false)
// increment –deincrement  X++  , , X--
// Postfix increment –deincrement ++X  --Y
// 1byte=8 bit (0 ve/veya =1 bit)

// var sayi1 = 100,
//   sayi2 = 20,
//   sonuc;
// Mantıksal Operators
// if(sayi1==10  && sayi2==20){}
// if(sayi1==10  || sayi2==20){}

// Mathematics Operators
// sonuc=sayi1+sayi2;
//sonuc=sayi1-sayi2;
// sonuc=sayi1*sayi2;
//sonuc=sayi1/sayi2;
//sonuc=sayi1%sayi2;
//alert(sonuc);

// increment  deincrement  X++  , , X--
//var counter = 10;
//counter++;
//counter=counter+1;
//counter+=1;
//alert(counter);

// var counter2 = 10;
//  counter2--;
// alert(counter2);

// Postfix increment –deincrement ++X  --Y
// var counter = 10;
// alert("1.alert "+counter++);
// alert("2.alert "+counter);

// var counter2 = 10;
// alert(++counter);

// var counter2 = 10;
//  counter2--;
// alert(counter2);

// ==  ve  === karar veriliyor.
// var sayi4 = 10;
// var sayi5 = "10";
// if (sayi4 == sayi5) {
//   alert("sayılar türe bakmadan eşittir");
// }

// if (sayi4 === sayi5) {
//   alert("sayılar türe bakmadan eşittir");
// } else {
//   alert("sayılar türe bakarak karar ver");
// }

/* ++++++++++++++++++++++++++++++++++++++ TYPEOF  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* typeof*/
// var nedir=44;       //number
// var nedir = 44.44;  //number
// var nedir="44";     //string
// var nedir=true;     //boolean
// var sonuc = typeof nedir;
// window.alert(sonuc);
//  if(sonuc==="number"){
//      alert("sayıdır")
//  }else{
//      alert("sayı değildir")
//  }

/* +++++++++++++++++++++++++++++++++++++ PROMPT  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/*prompt*/
// var isim = prompt("adınızı giriniz");
// console.log(isim);
// document.write(isim);
// alert(isim);
// window.alert(isim);

/* ++++++++++++++++++++++++++++++++ FUNKSIYON+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* function */
//function -1  : parametresiz Returnsuz
// function parametresizReturnsuz() {
//   alert("parametresiz Returnsuz");
// }
//parametresizReturnsuz();

//function -2  : parametreli Returnsuz
// function parametreliReturnsuz(sayi) {
//   alert("parametreli Returnsuz " + sayi);
// }
//parametreliReturnsuz(44);

//function -3  : parametresiz Returnlu
// function parametresizReturnlu() {
//   return "Hamit Mızrak";
// }
// var degisken = parametresizReturnlu();
// alert(degisken);

//function -4  : parametreli Returnlu
// function parametreliReturnlu(sayi1, sayi2) {
//   return sayi1 + sayi2;
// }
// var degisken = parametreliReturnlu(10,20);
// alert(degisken);

/* +++++++++++++++++++++++++++++++++++++ LOCAL GLOBAL  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
// var _global = "Bu sayfadan her yerden erişim sağlayabilirsiniz";
// alert(_global);

// //this => bu keyword global değişkenleri çağırmak için kullanıyoruz.

// function fonksiyonAdi() {
//   //alert("fonksiyonda çağırdım. " + _global);
//   alert("fonksiyonda çağırdım. " + this._global);
//   let _localDegisken = "Local değişkenim";
//   alert(" " + _localDegisken);
// }
// fonksiyonAdi();

// function fonksiyonAdi2() {
//   //alert("fonksiyonda çağırdım. " + _global);
//   alert("fonksiyonda çağırdım. " + this._global);
//   //alert(" " + _localDegisken);
// }
// fonksiyonAdi2();

/* +++++++++++++++++++++++++++++++++++++ Overloading  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//overloading: fonksiyon isimleri eklerken sıkıntı yaşıyarsak overloading kullanalım.
//overloading: aynı fonksiyon isimli ancak ama ancak parametre sayıları farklı olacak.

// function fonksiyonAdi() {
//     //alert("fonksiyonda çağırdım. " + _global);
//     alert("fonksiyonda çağırdım. " + this._global);
//     var _localDegisken = "Local değişkenim";
//     alert(" " + _localDegisken);
//   }
//   fonksiyonAdi();

//   function fonksiyonAdi(sayi) {
//     //alert("fonksiyonda çağırdım. " + _global);
//     alert("fonksiyonda çağırdım. " + this._global);
//     var _localDegisken = "Local değişkenim";
//     alert(" " + _localDegisken);
//   }
//   fonksiyonAdi(44);

/* ++++++++++++++++++++++++++++++++++++ escape character +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
// alert('"');
// alert("'\"");

/* ++++++++++++++++++++++++++++++++++++ try -  catch +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// try {
//   //kodlarımzda meydana gelecek hatalarını önüne geçmek için kulandığımız bir yapıdır.
//   var sayi = 3 / 0;
//   alert(sayi);
// } catch (error) {
//     alert(error.message);
//   alert("hata meydana geldi");
// } finally {
//   alert("Burası kesin çalışacak yerdir.");
// }

/* ++++++++++++++++++++++++++++++++++++ Math+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
// document.write(Math.PI +"\n");
// document.write(Math.E+"\n");
// document.write(Math.min(4,5,6,10,-50)+"\n");
// document.write(Math.max(4,5,6,10,-50)+"\n");
// document.write(Math.sqrt(25)+"\n");
// document.write(Math.abs(-50)+"\n");
// document.write(Math.pow(2,5)+"\n");
// document.write(Math.floor(4.9)+"\n");
// document.write(Math.ceil(4.1)+"\n");
// document.write(Math.round(4.5)+"\n");
// document.write( Math.round((Math.random()*2+1))   +"\n");

/* ++++++++++++++++++++++++++++++++++++ Number+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
// var sayi = 44;
// document.write(sayi + "\n");

// var sayi2 = 44.52;
// document.write(sayi2 + "\n");

// var sayi3 = 445289652e4;
// document.write(sayi3 + "\n");

// var sayi4 = 445289652e-4;
// document.write(sayi4 + "\n");

// const sayi5 = 0xfa;
// document.write(sayi5 + "\n");

// var sayi6 = 44;
// document.write(sayi6.toString(2) + "\n"); // 2'lik sayı sistemi
// document.write(sayi6.toString(8) + "\n"); // 8'lik sayı sistemi
// document.write(sayi6.toString(16) + "\n"); //16'lık sayı sistemi
// document.write("\n");

//NaN =Not A Number
// document.write(50/25+"\n");
// document.write(50/"25"+"\n");
// document.write(50/"kelime"+"\n");

/* ++++++++++++++++++++++++++++++++++++ Kelime +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// let kelime = "JavA Kelime";
// document.write(kelime.length + "\n");
// document.write(kelime.trim().length + "\n");
// document.write(kelime.toUpperCase() + "\n");
// document.write(kelime.toLowerCase() + "\n");
// document.write(kelime + " sonuna eklendi" + "\n");
// document.write(kelime.concat(" sonuna eklendi") + "\n");
// document.write(kelime.charAt(0) + "\t");

// document.write(kelime.indexOf("v"));
// document.write(kelime.search("v"));
// document.write(kelime.lastIndexOf("m"));

// document.write(kelime.replace("JavA", " javascript"));

// document.write(kelime.substring(0, 2) + " \n"); //0<=x<2
// document.write(kelime.slice(-10, 2) + " \n"); //0<=x<2

//var user = prompt("Harf giriniz");
//document.write(kelime.startsWith(user)+" \n");
// document.write(kelime.startsWith("J") + " \n");
// document.write(kelime.endsWith(" ") + " \n");
// document.write( " \n");
// document.write(kelime.split("") + " \n");
// document.write(kelime.split("a") + " \n");

/* ++++++++++++++++++++++++++++++++++++ cast : dönüştürme +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
// kelimeyi sayıya çevirdi
// var kelime = "10";
// var sayi = 20;
// alert(Number(kelime) + sayi);

// sayıyı kelimeye çevirdi
// var sayi2 = 20;
// var kelime2 = "10";
// alert(String(sayi2) + kelime2);

/* ++++++++++++++++++++++++++++++++++++ if else else-if ternary +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
// var sayi = 15;
// if (sayi <= 10) {
//   document.write("sayı 10 veya küçüktür");
// } else {
//   document.write("sayı 10'dan büyüktür");
// }

//Ternary
// var sayi = 15;
// var result=(sayi <= 10) ? "sayı 10 veya küçüktür" : "sayı 10'dan büyüktür";
// alert(result)

// var tarih,saat;
// tarih= new Date();
// saat=tarih.getHours();
// var result=saat>=16 ? "büyüktür":"küçüktür";
// alert(result);

// var sayi = 40;
// if (sayi == 10) {
//   document.write("sayı 10 ");
// } else if (sayi == 20) {
//   document.write("sayı 20 ");
// } else if (sayi == 30) {
//   document.write("sayı 30 ");
// } else if (sayi == 40) {
//   document.write("sayı 40 ");
// } else {
//   document.write("aradığınız bulunamadı..");
// }

/* ++++++++++++++++++++++++++++++++++++ switch -case +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
// var sayi = 40;
// switch (sayi) {
//   case 10:
//     document.write("sayı 10 ");
//     break;

//   case 20:
//     document.write("sayı 20 ");
//     break;

//   case 30:
//     document.write("sayı 30 ");
//     break;

//   case 40:
//     document.write("sayı 40 ");
//     break;

//   default:
//     document.write("aradığınız bulunamadı..");
//     break;
// }

/* ++++++++++++++++++++++++++++++++++++ loop +for +while +do-while +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// for (var sayi = 0; sayi < 10; sayi++) {
//   document.write(sayi + " ");
// }
// document.write("\n");

// var sayi2 = 0;
// while (sayi2 < 10) {
//   document.write(sayi2 + " ");
//   sayi2++;
// }

// document.write("\n");
// var sayi3 = 0;
// do {
//   document.write("şart sağlasın yada sağlamasın\n 1 kez çalışacak: " + sayi3);
//   sayi3+=1;
// } while (sayi3 < -20);

/* ++++++++++++++++++++++++++++++++++++ return break continue +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

//return: metotu çalışmasını durdurur.
//break : döngü çalışmasını durdurur.
//continue: 1 kere çalışmaz sonra devam eder

// function name(sayi1, sayi2) {
//   return sayi1 + sayi2;
// }

// s1-) 1 ila 20 arasındaki sayıları toplasın (1 ve 20 dahil)
// s2-) tek sayıları toplasın
// s3-) çift sayıları toplasın
// s4-) ancak 5 sayısını  toplamasın ve 8'den sonra toplama yapmasın

//toplamada etkisiz eleman=0
//çarpmada etkisiz eleman=1
// 0 1 2 3 4
// var toplam = 0,
//   tekSayiToplam = 0,
//   ciftSayiToplam = 0;
// for (var i = 0; i <= 4; i++) {
//   toplam = toplam + i;
//   if (i % 2 == 0) {
//     ciftSayiToplam += i;
//   } else {
//     tekSayiToplam += i;
//   }
// }
// document.write("toplamları: " + toplam);
// document.write("çift sayı toplamları: " + ciftSayiToplam);
// document.write("tek sayı toplamları: " + tekSayiToplam);

// toplam = 0;
// for (var i = 0; i <= 11; i++) {
//   if (i == 8) break;
//   if (i == 5) continue;
//   toplam += i;
// }
// document.write("toplamları: " + toplam);

/* ++++++++++++++++++++++++++++++++++++ Date +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
// var tarih = new Date();
// console.log(tarih);
// console.log(tarih.getDate());
// console.log(tarih.getMonth());
// console.log(tarih.getTime());
// console.log(tarih.getFullYear());
// console.log(tarih.getMilliseconds());

// console.log(tarih.setDate(5));
// console.log(tarih.getDate());
// console.log(tarih.toDateString());

// console.log(tarih);

/* ++++++++++++++++++++++++++++++++++++ Object +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//farklı özellikler bütünüdür.
//current brackets,kıvırcık parantez, gövdeli parantez
// var pAdi, pSoyadi;
// pAdi = prompt("adınız");
// pSoyadi = prompt("soyadınız");
// var mouse = {
//   adi: pAdi,
//   soyadi: pSoyadi,
//   diller: 10,
//   okudumu: true,
// };
// if (mouse.okudumu) {
//   document.write("okudu");
// } else {
//   document.write("okumadı");
// }
//alert(mouse.adi+" "+mouse.okudumu+" "+mouse.soyadi);
// let kelime = "JavA Kelime";
// document.write(kelime.length + "\n");
// document.write(kelime.trim().length + "\n");
// document.write(kelime.toUpperCase() + "\n");
// document.write(kelime.toLowerCase() + "\n");
// document.write(kelime + " sonuna eklendi" + "\n");
// document.write(kelime.concat(" sonuna eklendi") + "\n");
// document.write(kelime.charAt(0) + "\t");

// document.write(kelime.indexOf("v"));
// document.write(kelime.search("v"));
// document.write(kelime.lastIndexOf("m"));

// document.write(kelime.replace("JavA", " javascript"));

// document.write(kelime.substring(0, 2) + " \n"); //0<=x<2
// document.write(kelime.slice(-10, 2) + " \n"); //0<=x<2

//var user = prompt("Harf giriniz");
//document.write(kelime.startsWith(user)+" \n");
// document.write(kelime.startsWith("J") + " \n");
// document.write(kelime.endsWith(" ") + " \n");
// document.write( " \n");
// document.write(kelime.split("") + " \n");
// document.write(kelime.split("a") + " \n");
// var soyadi = mouse.soyadi;
// document.write(soyadi.length);

/* ++++++++++++++++++++++++++++++++++++ Debug (Hata Ayıklama) +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//kodlarımızda mantıksal hata yaptık
//document8.write(soyadi.length); //syntax error
//var sayi=9/0;
//var sonuc=9/"9"

//breakpoint
//debug
// function deneme44() {
//   let kelime = prompt("kelime giriniz");
//   document.write("trimsiz kelime eleman sayısı: " + kelime.length);
//   document.write("startsWith kelime eleman sayısı: " + kelime.startsWith("a"));
//   //document.write("trimli kelime eleman sayısı: " + kelime.trim().length);
// }

/* ++++++++++++++++++++++++++++++++++++ Diziler +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//dizide index=0 başlar
//dizilerde length kullanalım
// var dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// document.write(dizi[0]+"\n");

// var toplam = 0;
// var dizi = [];
// for (var sayi = 0; sayi < 10; sayi++) {
//   dizi[sayi] = sayi;
//   toplam += sayi;
// }
// document.write(dizi[9] + " " + toplam);

// var dizi2 = [4, 5.6, true, "JavaScript"];
// alert(dizi2[2]);

/* ++++++++++++++++++++++++++++++++++++ for in +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
// var dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// //iterative for
// for (let i = 0; i < dizi.length; i++) {
//   document.write(dizi[i] + " ");
// }

// //for in
// for (temp in dizi) {
//   document.write(" - " + dizi[temp] + " ");
// }

/* ++++++++++++++++++++++++++++++++++++  delete dizi[1] +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// var dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

//iterative for
// for (let i = 0; i < dizi.length; i++) {
//   document.write(dizi[i] + " ");
// }

// delete dizi[0]

// for (let i = 0; i < dizi.length; i++) {
//   document.write(dizi[i] + " ");
// }

/* ++++++++++++++++++++++++++++++++++++ dizi toString() +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// var dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// dizi.toString();
// var toplam=0;
//iterative for
// for (let i = 0; i < dizi.length; i++) {
//   document.write(dizi[i] + " ");
//   toplam+=dizi[i];
// }
// alert(toplam)

/* ++++++++++++++++++++++++++++++++++++ dizi join() +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//  var dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// dizi.join("*");
// var toplam = 0;
// //iterative for
// for (let i = 0; i < dizi.length; i++) {
//   document.write(dizi[i] + " ");
//   toplam += dizi[i];
// }
// alert(toplam);
// alert(dizi);

/* ++++++++++++++++++++++++++++++++++++ dizi sort()+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// var dizi = [1, 7, 8, 9, 2, 3, 4, 5, 6];
// alert(dizi);
// alert(dizi.length);
// alert(dizi.sort());

/* ++++++++++++++++++++++++++++++++++++ dizi reverse() +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
// var dizi = [1, 7, 8, 9, 2, 3, 4, 5, 6];
// dizi.sort()
// alert(dizi.reverse());

/* ++++++++++++++++++++++++++++++++++++ EKLEMEK +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++ dizi push() +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//push() ==> sonuna 1 eleman eklemek
//LIFO
// var dizi = [1, 2, 3];
// for (temp in dizi) {
//   document.write(dizi[temp] + " ");
// }

// document.writeln();

// dizi.push(4);
// for (temp in dizi) {
//   document.write(dizi[temp] + " ");
// }

/* ++++++++++++++++++++++++++++++++++++ dizi unshift() +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//unshift() ==> başına 1 eleman  eklemek
//LIFO
// var dizi = [1, 2, 3];
// for (temp in dizi) {
//   document.write(dizi[temp] + " ");
// }

// document.writeln();

// dizi.unshift(4);
// for (temp in dizi) {
//   document.write(dizi[temp] + " ");
// }

/* ++++++++++++++++++++++++++++++++++++ ÇIKARMAK +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++ dizi pop() +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//pop() ==> sondan 1 eleman çıkarmak
//LIFO
// var dizi = [1, 2, 3];
// for (temp in dizi) {
//   document.write(dizi[temp] + " ");
// }

// document.writeln();

// dizi.pop();
// for (temp in dizi) {
//   document.write(dizi[temp] + " ");
// }

/* ++++++++++++++++++++++++++++++++++++ dizi shift() +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//shift() ==> başıdan  1 eleman çıkarmak
//LIFO
var dizi = [1, 2, 3];
for (temp in dizi) {
  document.write(dizi[temp] + " ");
}

document.writeln();

dizi.shift();
for (temp in dizi) {
  document.write(dizi[temp] + " ");
}

// dizi ve object

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/*common rules : Genel Kurallar
1-) kelime: tek tırnak , çift tırnak yazabiliriz.
2-) değişkenkerde underscore(_)  veya Dolar ($)
3-) fonksiyon Adları: CamelCase olarak yazalım
4-) Js Case Sensitive bir betik dildir.
5-)
*/

/* Dikkat edilecek hususlar
1-) Local değişkenler kullanın
2-) function birimlerde let kullanalım.
3-) bir yerde native görürsem bilecem ki () yazmadım
4-) var dizi=new Array() ==> bunun yerine  var dizi =[] ; 
5-) var object=new Object() ==> bunun yerine  var dizi ={} ; 

*/

/* Kısayollar
1-) Shift+Alt+F =Formatlama
2-)Ctrl+ (artı tuşu)=ekranı büyütür
3-)Ctrl+ (eksi tuşu)=ekranı küçültür
4-)Ctrl+k comment(yorumlama)

*/
