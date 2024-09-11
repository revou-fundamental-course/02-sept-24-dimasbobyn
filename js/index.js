function luasSegitiga() {
    var panjang = 5;
    var alas = 3;
    hasil = panjang * alas / 2;
    document.getElementById("hasil-luas").innerHTML="1/2 X " + panjang + " X " + alas + " = " + hasil;
}


function kelilingSegitiga() {
    var sisiab = 3;
    var sisibc = 3;
    var sisica = 3;
    hasil = sisiab+sisibc+sisica;
    document.getElementById("hasil-keliling").innerHTML= sisiab + " + " + sisibc + " + " + sisica + " = "  +hasil;
}
