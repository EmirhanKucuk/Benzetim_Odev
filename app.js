class Stack{
    constructor(){
        this.items=[];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        if (this.items.length==0)
            return "Underflow"
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return this.items.length==0;
    }

    printStack(){
        var string = "";
        for(let i = 0; i<this.items.length;i++){
            string +=this.items[i]+" ";
        }
        return string;
    }
}

//Başlangıçta stack kullanacaktım dizideki elemanlara ulaşmak çok zorlayıcı olacağından aşağıdakı müşteri clasıyla birlikte dizi yapısını kullandım
class Müsteri{
    constructor(){
        this.No=0,
        this.GelisZaman=0,
        this.ServisSüreleri=0
    }
}


var Müsteri_1 = new Müsteri();
var Müsteri_2 = new Müsteri();
var Müsteri_3 = new Müsteri();
var Müsteri_4 = new Müsteri();
var Müsteri_5 = new Müsteri();

 Müsteri_1.No = 1;
 Müsteri_1.GelisZaman=5;
 Müsteri_1.ServisSüreleri=10;

 Müsteri_2.No = 2;
 Müsteri_2.GelisZaman=11;
 Müsteri_2.ServisSüreleri=12;

 Müsteri_3.No = 3;
 Müsteri_3.GelisZaman=15;
 Müsteri_3.ServisSüreleri=15;

 Müsteri_4.No = 4;
 Müsteri_4.GelisZaman=20;
 Müsteri_4.ServisSüreleri=12;

 Müsteri_5.No = 5;
 Müsteri_5.GelisZaman=26;
 Müsteri_5.ServisSüreleri=14;

 

const dizi_1 = [];
const dizi_2 = [];
const dizi_3 = [];


dizi_1.push(Müsteri_1.No)
dizi_1.push(Müsteri_2.No)
dizi_1.push(Müsteri_3.No)
dizi_1.push(Müsteri_4.No)
dizi_1.push(Müsteri_5.No)

dizi_2.push(Müsteri_1.GelisZaman)
dizi_2.push(Müsteri_2.GelisZaman)
dizi_2.push(Müsteri_3.GelisZaman)
dizi_2.push(Müsteri_4.GelisZaman)
dizi_2.push(Müsteri_5.GelisZaman)


dizi_3.push(Müsteri_1.ServisSüreleri)
dizi_3.push(Müsteri_2.ServisSüreleri)
dizi_3.push(Müsteri_3.ServisSüreleri)
dizi_3.push(Müsteri_4.ServisSüreleri)
dizi_3.push(Müsteri_5.ServisSüreleri)


console.log(dizi_1)
console.log(dizi_2)
console.log(dizi_3)

var benzetim_zamani;

function myFunction(){
    for(var i = 0; i<5;i++){
        document.getElementById(`Müsteri_Numarasi_${i}`).innerHTML=dizi_1[i];
        document.getElementById(`Gelis_Zamanlari_${i}`).innerHTML=dizi_2[i];
        document.getElementById(`Servis_Süreleri_${i}`).innerHTML=dizi_3[i];
    }
}

myFunction();


function Main_Function(){
    //Öncelikle ilk row'u kendi elimle girdim çünkü herhangi bir karşılaştırma veya karşılaştırma değeri yok

   var benzetim_1= document.getElementById('benzetim_1');
   benzetim_1.innerHTML=dizi_2[0];

   var gelen_1= document.getElementById('Gelen_Müsteri_1');
   gelen_1.innerHTML=dizi_1[0];

   var servis_biten_1= document.getElementById('Servisi_Biten_Müsteri_1');
   servis_biten_1.innerHTML="-";

   var kuyrukta_1= document.getElementById('Kuyrukta_Bekleyen_Müsteri_1');
   kuyrukta_1.innerHTML="-";

   var servisi_devam_1= document.getElementById('Servisi_Devam_Eden_1');
   servisi_devam_1.innerHTML="1";

   var bitis_zaman_1= document.getElementById('Servisin_Bitis_Zamani_1');
   bitis_zaman_1.innerHTML=dizi_2[0]+dizi_3[0];
    
   var kuyrukta_bekleme_suresi_1= document.getElementById('Kuyrukta_Bekleme_Süresi_1');
   kuyrukta_bekleme_suresi_1.innerHTML="-";

   var servisin_bos_kalma_1= document.getElementById('Servisin_Bos_Kalma_Süresi_1');
   servisin_bos_kalma_1.innerHTML=dizi_2[0];

    //Şimdi 2.Müşteri gelecek ve karşılaştırmalara başlayacağız
    
    
    //benzeitm zamanı geliş zamanlarına eşit olduğundan 
    benzetim_zamani=dizi_2[1];
    if(parseInt(bitis_zaman_1.innerHTML) >= benzetim_zamani){
        document.getElementById('benzetim_2').innerHTML=dizi_2[1];
        document.getElementById('Gelen_Müsteri_2').innerHTML=dizi_1[1];
        document.getElementById('Servisi_Biten_Müsteri_2').innerHTML="-";
        document.getElementById('Kuyrukta_Bekleyen_Müsteri_2').innerHTML=dizi_1[1];
        document.getElementById('Servisi_Devam_Eden_2').innerHTML=dizi_1[0];
        document.getElementById('Servisin_Bitis_Zamani_2').innerHTML=dizi_2[0]+dizi_3[0];
        document.getElementById('Kuyrukta_Bekleme_Süresi_2').innerHTML='-';
        if(parseInt(document.getElementById('benzetim_1').innerHTML) !=0){
            document.getElementById('Servisin_Bos_Kalma_Süresi_2').innerHTML="-";
        }      
    } else {
        document.getElementById('benzetim_2').innerHTML=dizi_2[1];
        document.getElementById('Gelen_Müsteri_2').innerHTML=dizi_1[1];
        document.getElementById('Servisi_Biten_Müsteri_2').innerHTML=dizi_1[0];
        document.getElementById('Kuyrukta_Bekleyen_Müsteri_2').innerHTML="-";
        document.getElementById('Servisi_Devam_Eden_2').innerHTML=dizi_1[1];
        document.getElementById('Servisin_Bitis_Zamani_2').innerHTML=dizi_3[0]+dizi_2[0]+dizi_3[1];
        document.getElementById('Kuyrukta_Bekleme_Süresi_2').innerHTML='-';
        if(parseInt(document.getElementById('benzetim_1').innerHTML) !=0){
            document.getElementById('Servisin_Bos_Kalma_Süresi_2').innerHTML="-";
        }
    }

    //3.müşteri gelecek benzetim zamanı 3.müşterinin geliş zamanına eşit

    benzetim_zamani=dizi_2[2];
    //yeni bitiş zamanımız 3.müşteri geldiğinde 27 olacaktır çünkü 2.müşteri servise girecek
    var bitis_zaman_2 = parseInt(bitis_zaman_1.innerHTML) + dizi_3[1];
  
    if (parseInt(bitis_zaman_2)  >= benzetim_zamani){
        document.getElementById('benzetim_3').innerHTML=dizi_2[2];
        document.getElementById('Gelen_Müsteri_3').innerHTML=dizi_1[2];
        document.getElementById('Servisi_Biten_Müsteri_3').innerHTML=dizi_1[0];
        document.getElementById('Kuyrukta_Bekleyen_Müsteri_3').innerHTML=dizi_1[2];
        document.getElementById('Servisi_Devam_Eden_3').innerHTML=dizi_1[1];
        document.getElementById('Servisin_Bitis_Zamani_3').innerHTML=dizi_2[2]+dizi_3[1];
        document.getElementById('Kuyrukta_Bekleme_Süresi_3').innerHTML=dizi_2[2]-dizi_2[1];
        if(parseInt(document.getElementById('benzetim_1').innerHTML) !=0){
            document.getElementById('Servisin_Bos_Kalma_Süresi_3').innerHTML="-";
        }
        
    } else{
        document.getElementById('benzetim_3').innerHTML=dizi_2[2];
        document.getElementById('Gelen_Müsteri_3').innerHTML=dizi_1[2];
        document.getElementById('Servisi_Biten_Müsteri_3').innerHTML=dizi_1[1];
        document.getElementById('Kuyrukta_Bekleyen_Müsteri_3').innerHTML="-";
        document.getElementById('Servisi_Devam_Eden_3').innerHTML=dizi_1[0];
        document.getElementById('Servisin_Bitis_Zamani_3').innerHTML=dizi_2[0]+dizi_3[0]+dizi_3[1]+dizi_3[2];
        document.getElementById('Kuyrukta_Bekleme_Süresi_3').innerHTML="-";
        if(parseInt(document.getElementById('benzetim_1').innerHTML) !=0){
            document.getElementById('Servisin_Bos_Kalma_Süresi_3').innerHTML="-";
        }
    }

    //4.Müşteri gelecek benzetim zamanımız 4.müşternin geliş süresine eşit olacak
    benzetim_zamani=dizi_2[3];
    //benzetim süremiz 27den küçük kaldığından bitiş süresiyle alakalı bir güncelleme yapmıyoruz
    if(parseInt(bitis_zaman_2) >= benzetim_zamani){
        document.getElementById('benzetim_4').innerHTML=dizi_2[3];
        document.getElementById('Gelen_Müsteri_4').innerHTML=dizi_1[3];
        document.getElementById('Servisi_Biten_Müsteri_4').innerHTML="-";
        document.getElementById('Kuyrukta_Bekleyen_Müsteri_4').innerHTML=dizi_1[2]+","+dizi_1[3];
        document.getElementById('Servisi_Devam_Eden_4').innerHTML=dizi_1[1];
        document.getElementById('Servisin_Bitis_Zamani_4').innerHTML=dizi_2[0]+dizi_3[0]+dizi_3[1];
        document.getElementById('Kuyrukta_Bekleme_Süresi_4').innerHTML="-";
        if(parseInt(document.getElementById('benzetim_1').innerHTML) !=0){
            document.getElementById('Servisin_Bos_Kalma_Süresi_4').innerHTML="-";
        }
    } else {
        document.getElementById('benzetim_4').innerHTML=dizi_2[3];
        document.getElementById('Gelen_Müsteri_4').innerHTML=dizi_1[3];
        document.getElementById('Servisi_Biten_Müsteri_4').innerHTML=dizi_1[2];
        document.getElementById('Kuyrukta_Bekleyen_Müsteri_4').innerHTML="-";
        document.getElementById('Servisi_Devam_Eden_4').innerHTML=dizi_1[3];
        document.getElementById('Servisin_Bitis_Zamani_4').innerHTML=dizi_2[0]+dizi_3[0]+dizi_3[1]+dizi_3[2]+dizi_3[3];
        document.getElementById('Kuyrukta_Bekleme_Süresi_4').innerHTML="-";
        if(parseInt(document.getElementById('benzetim_1').innerHTML) !=0){
            document.getElementById('Servisin_Bos_Kalma_Süresi_4').innerHTML="-";
        }
    }
    //5.müşteri gelecek benzetim zamanımız 5.nin gelişine eşit olacak
    benzetim_zamani=dizi_2[4];
    
    //2.müşterinin bitişi halen 27 olduğu için bitiş zamanı prametrem bitis_zaman_2 olarak kaldı
    if(parseInt(bitis_zaman_2) >= benzetim_zamani){
        document.getElementById('benzetim_5').innerHTML=dizi_2[4];
        document.getElementById('Gelen_Müsteri_5').innerHTML=dizi_1[4];
        document.getElementById('Servisi_Biten_Müsteri_5').innerHTML="-";
        document.getElementById('Kuyrukta_Bekleyen_Müsteri_5').innerHTML=dizi_1[2]+","+dizi_1[3]+","+dizi_1[4];
        document.getElementById('Servisi_Devam_Eden_5').innerHTML=dizi_1[1];
        document.getElementById('Servisin_Bitis_Zamani_5').innerHTML=dizi_2[0]+dizi_3[0]+dizi_3[1];
        document.getElementById('Kuyrukta_Bekleme_Süresi_5').innerHTML="-";
        if(parseInt(document.getElementById('benzetim_1').innerHTML) !=0){
            document.getElementById('Servisin_Bos_Kalma_Süresi_5').innerHTML="-";
        }
    } else {
        document.getElementById('benzetim_5').innerHTML=dizi_2[4];
        document.getElementById('Gelen_Müsteri_5').innerHTML=dizi_1[4];
        document.getElementById('Servisi_Biten_Müsteri_5').innerHTML=dizi_1[3];
        document.getElementById('Kuyrukta_Bekleyen_Müsteri_5').innerHTML='-';
        document.getElementById('Servisi_Devam_Eden_5').innerHTML=dizi_1[4];
        document.getElementById('Servisin_Bitis_Zamani_5').innerHTML=dizi_2[0]+dizi_3[0]+dizi_3[1]+dizi_3[2]+dizi_3[3]+dizi_3[4];
        document.getElementById('Kuyrukta_Bekleme_Süresi_5').innerHTML="-";
        if(parseInt(document.getElementById('benzetim_1').innerHTML) !=0){
            document.getElementById('Servisin_Bos_Kalma_Süresi_5').innerHTML="-";
        }
    }
    //artık benzetim zamanlarını servisleri bitecek şekilde ayarlamamız gerekiyor böylelikle
    //aşağıdaki satırdaki benzetim zamanını bir arttırarak 
    do {
        benzetim_zamani++;
    } while( benzetim_zamani !=bitis_zaman_2 )
    //yeni bitis zamanımızı giriyoruz
    
    var bitis_zaman_3 = dizi_2[0]+dizi_3[0]+dizi_3[1]+dizi_3[2]


    if(parseInt(bitis_zaman_3) >= benzetim_zamani ){
        document.getElementById('benzetim_6').innerHTML=benzetim_zamani;
        document.getElementById('Gelen_Müsteri_6').innerHTML='-';
        document.getElementById('Servisi_Biten_Müsteri_6').innerHTML=dizi_1[1];
        document.getElementById('Kuyrukta_Bekleyen_Müsteri_6').innerHTML=dizi_1[3]+","+dizi_1[4];
        document.getElementById('Servisi_Devam_Eden_6').innerHTML=dizi_1[2];
        document.getElementById('Servisin_Bitis_Zamani_6').innerHTML=dizi_2[0]+dizi_3[0]+dizi_3[1]+dizi_3[2];
        document.getElementById('Kuyrukta_Bekleme_Süresi_6').innerHTML=(dizi_2[0]+dizi_3[0]+dizi_3[1])-dizi_2[2];
        if(parseInt(document.getElementById('benzetim_1').innerHTML) !=0){
            document.getElementById('Servisin_Bos_Kalma_Süresi_6').innerHTML="-";
        }
    }
    
    do {
        benzetim_zamani++;
    } while( benzetim_zamani !=bitis_zaman_3 )

    var bitis_zaman_4 = dizi_2[0]+dizi_3[0]+dizi_3[1]+dizi_3[2]+dizi_3[3]
    //sıradaki servise geçiyoruz

    if(parseInt(bitis_zaman_4) >= benzetim_zamani ){
        document.getElementById('benzetim_7').innerHTML=benzetim_zamani;
        document.getElementById('Gelen_Müsteri_7').innerHTML='-';
        document.getElementById('Servisi_Biten_Müsteri_7').innerHTML=dizi_1[2];
        document.getElementById('Kuyrukta_Bekleyen_Müsteri_7').innerHTML=dizi_1[4];
        document.getElementById('Servisi_Devam_Eden_7').innerHTML=dizi_1[3];
        document.getElementById('Servisin_Bitis_Zamani_7').innerHTML=dizi_2[0]+dizi_3[0]+dizi_3[1]+dizi_3[2]+dizi_3[3];
        document.getElementById('Kuyrukta_Bekleme_Süresi_7').innerHTML=(dizi_2[0]+dizi_3[0]+dizi_3[1]+dizi_3[2])-dizi_2[3];
        if(parseInt(document.getElementById('benzetim_1').innerHTML) !=0){
            document.getElementById('Servisin_Bos_Kalma_Süresi_7').innerHTML="-";
        }
    }
    do{
        benzetim_zamani++
    }while(benzetim_zamani!=bitis_zaman_4)
    
    var bitis_zaman_5 = dizi_2[0]+dizi_3[0]+dizi_3[1]+dizi_3[2]+dizi_3[3]+dizi_3[4]
    if(parseInt(bitis_zaman_4) >= benzetim_zamani ){
        document.getElementById('benzetim_8').innerHTML=benzetim_zamani;
        document.getElementById('Gelen_Müsteri_8').innerHTML='-';
        document.getElementById('Servisi_Biten_Müsteri_8').innerHTML=dizi_1[3];
        document.getElementById('Kuyrukta_Bekleyen_Müsteri_8').innerHTML='-';
        document.getElementById('Servisi_Devam_Eden_8').innerHTML=dizi_1[4];
        document.getElementById('Servisin_Bitis_Zamani_8').innerHTML=dizi_2[0]+dizi_3[0]+dizi_3[1]+dizi_3[2]+dizi_3[3]+dizi_3[4];
        document.getElementById('Kuyrukta_Bekleme_Süresi_8').innerHTML=(dizi_2[0]+dizi_3[0]+dizi_3[1]+dizi_3[2]+dizi_3[3])-dizi_2[4];
        if(parseInt(document.getElementById('benzetim_1').innerHTML) !=0){
            document.getElementById('Servisin_Bos_Kalma_Süresi_8').innerHTML="-";
        }
    }
    
}
Main_Function();
