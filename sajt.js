function Poruka(){
    var email=document.getElementById("email").value;
    var poruka=document.getElementById("poruka").value;
    if(ime=="" || email=="" || poruka==""){
        window.alert("Unesite podatke");
        return;
    }
    if(provera(email)){
    var rezultat="Primili smo Vasu poruku a ona glasi: " + poruka + ", dodatne informacije cete dobiti na vas email " + email;
    document.getElementById("Ispis").innerText=rezultat;
    document.getElementById("email").value="";
    document.getElementById("poruka").value="";
    }
    else{
        window.alert("Unesite dobrar email");
        return;
    }

}

function provera(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function Posalji(){
    var Slikovi=document.getElementById("S-tier").value;
    var Alikovi=document.getElementById("A-tier").value;
    var Blikovi=document.getElementById("B-tier").value;
    var Clikovi=document.getElementById("C-tier").value;
    if(Slikovi!="")
    document.getElementById("S-tierIspis").innerText+=Slikovi + ",";
    if(Alikovi!="")
    document.getElementById("A-tierIspis").innerText+=Alikovi + ",";
    if(Blikovi!="")
    document.getElementById("B-tierIspis").innerText+=Blikovi + ",";
    if(Clikovi!="")
    document.getElementById("C-tierIspis").innerText+=Clikovi + ",";

    document.getElementById("S-tier").value="";
    document.getElementById("A-tier").value="";
    document.getElementById("B-tier").value="";
    document.getElementById("C-tier").value="";
}

function Obrisi(){
    document.getElementById("S-tierIspis").innerText="";
    document.getElementById("A-tierIspis").innerText="";
    document.getElementById("B-tierIspis").innerText="";
    document.getElementById("C-tierIspis").innerText="";
}

const audio = document.getElementById("audio");
const select = document.getElementById("Izaberi");

function Pusti() {
      audio.play();
}

function Pauziraj() {
      audio.pause();
}

function Zaustavi() {
      audio.pause();
      audio.currentTime = 0;
}

function PromeniZvuk(value) {
      audio.volume = value;
}

function PromeniPesmu() {
      const izabranaPesma = select.value;
      audio.src = izabranaPesma;
      audio.play();
}