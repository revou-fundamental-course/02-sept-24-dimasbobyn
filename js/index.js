// Menampilkan Rumus Segitiga
function pilihRumusSegitiga(){
    var tampilLuasSegitiga = document.getElementById('luas-segitiga');
    var tampilKelilingSegitiga =document.getElementById('keliling-segitiga');
    var tampilLuasJajarGenjang = document.getElementById('luas-jajar-genjang');
    var tampilKelilingJajarGenjang =document.getElementById('keliling-jajar-genjang');

    tampilLuasSegitiga.style.display = 'block';
    tampilKelilingSegitiga.style.display ='block';
    tampilLuasJajarGenjang.style.display = 'none';
    tampilKelilingJajarGenjang.style.display ='none';
}

// Menampilkan Rumus Jajar Genjang
function pilihRumusGagargenjang(){
    var tampilLuasSegitiga = document.getElementById('luas-segitiga');
    var tampilKelilingSegitiga =document.getElementById('keliling-segitiga');
    var tampilLuasJajarGenjang = document.getElementById('luas-jajar-genjang');
    var tampilKelilingJajarGenjang =document.getElementById('keliling-jajar-genjang');

    tampilLuasSegitiga.style.display = 'none';
    tampilKelilingSegitiga.style.display ='none';
    tampilLuasJajarGenjang.style.display = 'block';
    tampilKelilingJajarGenjang.style.display ='block';
}

// Rumus Luas Segitiga
function luasSegitiga() {
    var alas = parseFloat(document.getElementById("alas-segitiga").value);
    var tinggi = parseFloat(document.getElementById("tinggi-segitiga").value);
    var hasilLuas = document.getElementById("hasil-luas-segitiga");
    var luas = 0.5 * alas * tinggi;
    hasilLuas.innerHTML="Luas = 1/2 X " +alas+ " X " +tinggi+ "<br>Luas = " +luas;
}

// Rumus Keliling Segitiga
function kelilingSegitiga() {
    var sisiAb = parseFloat(document.getElementById("sisi-ab").value);
    var sisiBc = parseFloat(document.getElementById("sisi-bc").value);
    var sisiCa = parseFloat(document.getElementById("sisi-ca").value);
    var hasilKeliling = document.getElementById("hasil-keliling-segitiga");
    var keliling = sisiAb + sisiBc + sisiCa
    hasilKeliling.innerHTML="Keliling = " +sisiAb+ " + " +sisiBc+ " + " +sisiCa+ "<br>Keliling = " +keliling;
}

// Rumus Luas Jajar Genjang
function luasJajarGenjang() {
    var alas = parseFloat(document.getElementById("alas").value);
    var tinggi = parseFloat(document.getElementById("tinggi").value);
    var hasilLuas = document.getElementById("hasil-luas-jajar-genjang");
    var luas = alas * tinggi;
    hasilLuas.innerHTML="Luas = " +alas+ " X " +tinggi+ "<br>Luas = " +luas;
}

// Rumus Keliling Jajar Genjang
function kelilingJajarGenjang() {
    var sisiAlas = parseFloat(document.getElementById("sisi-alas").value);
    var sisiMiring = parseFloat(document.getElementById("sisi-miring").value);
    var hasilKeliling = document.getElementById("hasil-keliling-jajar-genjang");
    var keliling = 2 * (sisiAlas + sisiMiring);
    hasilKeliling.innerHTML="Keliling = (" +sisiAlas+ " + " +sisiMiring+ ") X 2" +"<br>Keliling = " +keliling;
}

// Reset Hasil
function resetLuasSegigtiga(){
    document.getElementById("hasil-luas-segitiga").innerHTML="";
}
function resetKelilingSegitiga(){
    document.getElementById("hasil-keliling-segitiga").innerHTML="";
}
function resetLuasJajarGenjang(){
    document.getElementById("hasil-luas-jajar-genjang").innerHTML="";
}
function resetKelilingJajarGenjang(){
    document.getElementById("hasil-keliling-jajar-genjang").innerHTML="";
}