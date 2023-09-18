function tanyabilangan(){
    
    let bil = parseFloat(document.fform.bilangan.value); 
    let jenis = " ";

    if(isNaN(bil)){
        alert("Anda Belum memasukkan Bilangan");
    }else{
        if (bil > 0){
            jenis = " Adalah bilangan Positif";
        }else if (bil < 0){
            jenis = " Adalah bilangan Negatif";
        }else{
            jenis = " Adalah Nol";
        }
            alert (bil+" "+jenis);
        }
}
