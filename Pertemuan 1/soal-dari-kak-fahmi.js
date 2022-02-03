//!Tugas
// let a = {
//     kendaraan : { 
//         mobil : 'peugeot',
//         motor : 'v-xion',
//         sepeda : 'united'
//     },
//     jalan : 'jalan berkah',
//     kota : 'Bekasi',
//     platNomor : 'Jabodetabek',
//     kereta : {
//         namaKa : 'Argo Bromo Anggrek',
//         tujuan : 'Senen Pasar Turi'
//     }
// }
// console.table(a)






//!Jawaban 2

function tahun(mobil) {
    return mobil <= 2001
}

function cc(mobil) {
    return mobil >= 150
}

function jawaban(callback, mobil) {   //*dia memiliki 2 PARAMETER
    let a = callback(mobil)  //Callback parameter kosong (Jadi pembanding)  and call back nya dari parameter kendaraan    
                                        //*Kemudian di isi dengan parameter
    if(a){
        console.log(`${mobil} harus bayar pajak`)
    }else{
        console.log(`${mobil} gaperlu bayar pajak`)
    }
}
jawaban(cc, 125)