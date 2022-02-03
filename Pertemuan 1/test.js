//identifier











//!statement

// let name = "Hello Beb" // Statement dasar/biasa
// console.log(name)










//!expression

// let first = 10
// let second = 1
// let result = first + second

// if(result>1){
//     console.log('Kita  tanggal ' + result)
// }










//!scope



//!global scope

// var a = 'Hallo pacar saya'
// function first(){
//     console.log(a)
// }

// function second(){
//     a = 'Kita dah jadi pacar kan?'
//     console.log(a)
// }
// first()
// second()

// const a = 'mobil'
// function kendaraan(){
//     console.log(a)
//     if(true){
//         const b = 'motor'
//         console.log(b)
//     }
// }
// kendaraan()










// //!TUGAS

// var a = 'Alan'
// function ganteng (){
//     console.log(a)
//     if(true){
//         const b = 'Bedamage'
//         console.console.log(b)
//     }
// }










//!closure

// function hello (sapa){
//     var text = 'asslamualaikum' + sapa
//     return function(){
//         console.log(text)
//     }
// }
// var nama = hello('Cantikkk')
// nama()


//Tugas Closure

// function vian (nama, kelas){
//     var text1 = 'Nama :' + nama
//     var text2 = 'Kelas :' + kelas
//     return function (){
// console.log(text1)
// console.log(text2)
//     }
// }

// var nama = vian('Galang Davian Pradana', 'X RPL A')
// nama()










//!Losely typed

// let a = 'B'
// let c = 2
// let z = null //Output object

// console.log(typeof z)       //!Type Of buat ngecek tipe data 










/**
 * !Tipe data undifined
 */

// let a 

// function first() {
//     a = 'Ini function pertama'
//     console.log(a)
// }

// function second() {
//     a = 'Ini function kedua'
//     console.log(a)
// }

// first()
// second()










//!Tipe data null
// let a = null                 //perbedaan nya kalo null itu gak mada nilainya
// console.log(typeof a)        //Tapi kalo undifined itu nilainya belum jelas










//!Tipe data length
// let a = 'Tiway cantik'
// console.log(a.length)

 //Tutor NgeLooping Ala Gueee
// let kata = 'Bedamagenya Cewe Gueee Ya Allah'
// for(let i = 0; i < kata.length; i++){
//     console.log(kata[i])                    
// }










//!Object
// let identitas = {
//     firstName : 'Ananta',
//     lastName : 'Pratiwi',
//     email : 'tiwi@gmail.com',
//     password : 'anntaprtw_',
//     pacar : 'Punya Galang',
//     Nomor : '(081) ----- ----',
//     address : {
//         city : 'Lampung',
//         number : '5',
//         street : 'Jl. Pulau legundi'
//     }
// }


//Cara Manggil Nya (Object) Nih Gessss

// console.log('Nama Saya : ' + identitas.firstName)
// console.log('Saya Tinggal Di ' + identitas.address.city)


//!Menggunakan Array
// console.log(identitas['firstName'] + identitas['lastName'])
// console.log(identitas['address']['city'])


//!Menggunakan Table
// console.table(identitas)










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









//!template literal

// const mobil = 'Puegeot'
// const motor = 'ninja'

// console.log('Mobil saya adalah ' + mobil + 'Dan motor saya adalah ' + motor)
// console.log(`saya punya mobil ${mobil} dan motor ${motor}`)                  // lebih pendek dengan tanda ``










//!shorthand named property

// let a = 1
// let b = 2            //Skip Kelamaan Next!!

// const a = 1, b = 2, c = 3        // Sama Aja ygy, tapi masih agak panjang bang :v
// let [a,b,c] = ['Ananta', 4, 5]   // Nih lebih simple ygy










//!Sebelum Pake ternarary operator
// let a = 9
// if (a < 10){
//     console.log('Nilai A Kurang dari 10')        //Lama Banget ygy Nih Ada Versi GC nya
// }else{                                                   
//     console.log('Nilai A Lebih dari 10')
// }                  


//!Setelah Pake Ternarary operator
// a<10
// ? console.log('Nilai a kurang dari 10')
// : console.log('Nilai a lebih dari 10')










//!Function
// function name(params) {
//     console.log('Saya belajar javascript')
// }

// name()




//!anonymous function

// const anon = function name(anjass) {
//     console.log(anjass)
// }

// anon ('Gue ganteng banget cooo')





//!Arrow Function
// let third = (params) => {
//     console.log(params)
// }
// third('Inii adalah arrow function')

// const dua = function name(params) {
    
// }





//!Normal Function

// function genap(number) {
//     return number % 2 == 0
// }

//INI Pmeanggilan nya
// function print(number) {
//     let isTrue = genap(number)
//     if (isTrue){
//         console.log(`${number} adalah bilangan genap`)
//     }else{
//         console.log(`${number} adalah bilangan ganjil`)
//     }
// }

// print(10)






//!High Order Function

// function genap(number) {
//     return number % 2 == 0
// }

// function print(number, callback) {
//     const isTrue = callback(number)
//     if (isTrue){
//          console.log(`${number} adalah bilangan genap`)
//      }else{
//          console.log(`${number} adalah bilangan ganjil`)
//      }
// }
// print(10, genap)


//Contoh 2
function sport(mobil) {
    return mobil >= 100
}

function warna(mobil) {
    return mobil == 'merah'
}

function kendaraan(mobil, callback) {   //*dia memiliki 2 PARAMETER
    let a = callback(mobil)  //Callback parameter kosong (Jadi pembanding)  and call back nya dari parameter kendaraan    
                                        //*Di isi dengan parameter
    if(a){
        console.log(`mobil dengan ${mobil} adalah mobil saya`)
    }else{
        console.log(`mobil dengan ${mobil} bukan mobil saya`)
    }
}

kendaraan(warna, 'merah')