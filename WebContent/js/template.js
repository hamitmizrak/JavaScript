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

*/
