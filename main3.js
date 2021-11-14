// Izveidot nosacījumu, kurā tiek pārbaudīta mainīgā z vērtība un pozitīvā gadījumā izvada konsolē «TRUE», bet negatīvā gadījumā izvada konsolē «FALSE». 
// Izveidot ciklu, kurā tiek izvadīti visi mainīgā a elementi no masīva.
// Izveidot 4 funkcijas, kur katra veic 1 pamata aritmētisko darbību. Veikt šo funkciju izpildīšanu un rezultāta izvadīšanu uz ekrāna.
// Izveidot HTML elementu (pogu), kuram piesaistīta funkcija, kas izvada paziņojumu lietotājam (izmantojot alert() funkciju). Funkcija izpildās, ja uz pogas nospiež.


var x=5;
var y=10.10;
var z=true;
var w="test";
var a=['a','b',200]
var b={Vards: 'Normunds'}

// console.log(x,y,z,w,a,es.Vards)

// var c=x+y;
// var d=w[3];
// var e=a[1];
// var f=b.Vards

// console.log(c,d,e,f)

// if (z===true) {console.log('TRUE')} else {console.log('FALSE')} 

for(var i=0; i<a.length;i++){console.log(i)}

function funkcija1(X,Y) {return X+Y;}
var summa=funkcija1(x,y)


function funkcija2(X1,Y1) {return X1*Y1;}
var reizinajums=funkcija2(x,y)

function funkcija3(X2,Y2) {return X2-Y2;}
var starpiba=funkcija3(x,y)


function funkcija4(X3,Y3) {return X3/Y3;}
var dalijums=funkcija4(x,y)

console.log(summa,reizinajums,dalijums,starpiba)