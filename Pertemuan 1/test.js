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
 * Tipe data undifined
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










//Tipe data null
// let a = null                 //perbedaan nya kalo null itu gak mada nilainya
// console.log(typeof a)        //Tapi kalo undifined itu nilainya belum jelas










 //Tipe data length
// let a = 'Tiway cantik'
// console.log(a.length)

 //Tutor NgeLooping Ala Gueee
// let kata = 'Bedamagenya Cewe Gueee Ya Allah'
// for(let i = 0; i < kata.length; i++){
//     console.log(kata[i])                    
// }










//Object
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


//Menggunakan Array
// console.log(identitas['firstName'] + identitas['lastName'])
// console.log(identitas['address']['city'])


//Menggunakan Table
// console.table(identitas)










//!Tugas
let a = {
    kendaraan : { 
        mobil : 'peugeot',
        motor : 'v-xion',
        sepeda : 'united'
    },
    jalan : 'jalan berkah',
    kota : 'Bekasi',
    platNomor : 'Jabodetabek',
    kereta : {
        namaKa : 'Argo Bromo Anggrek',
        tujuan : 'Senen Pasar Turi'
    }
}
console.table(a)