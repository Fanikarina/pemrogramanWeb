// //belanja percabangan
let belanja = parseInt(prompt("Masukan total belanjaan anda !"));
if (belanja > 0 && belanja < 100000){
    document.writeln("Anda belanja = "+belanja+"<br>");
    document.writeln("anda tidak dapat diskon! <br>");
    document.writeln("total bayar = " +belanja+ "<br>");
}
else if(belanja >= 100000 && belanja <= 150000){
    document.writeln("Anda mendapatkan diskon 10% ! <br>");
}
else if(belanja > 150000){
    document.writeln("Anda mendapatkan diskon 25% ! <br>");
}else{
    document.writeln("Anda salah memasukan total!")
}
