



function luasSegitiga() {
    let panjang = 5;
    let alas = 3;
    hasil = panjang * alas / 2;
    document.getElementById("hasil-luas").innerHTML="1/2 X " + panjang + " X " + alas + " = " + hasil;
}


function kelilingSegitiga() {
    let sisiab = 3;
    let sisibc = 3;
    let sisica = 3;
    hasil = sisiab+sisibc+sisica;
    document.getElementById("hasil-keliling").innerHTML= sisiab + " + " + sisibc + " + " + sisica + " = "  +hasil;
}

function resetLuasSegitiga(){
    document.getElementById("hasil-luas").innerHTML="";
}