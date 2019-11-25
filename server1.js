const server = require('express')()
const port = 5000

let nilai = 90
// let data = {
//     nama: 'Dwiky Jullian',
//     npm: 17411069,
//     jurusan: 'Sistem Informasi',
//     kuliah: (namaMatkul, nama) => {
//         console.log('Selamat Kuliah ' + nama + ', di Matakuliah ' + namaMatkul)
//     }
// }
// data.kuliah('Pemrograman III', data.nama)

let listMhs = [
    {
        nama: 'Dwiky Jullian',
        npm: 17411069
    },
    {
        nama: 'Jullian Ardhana',
        npm: 17411069
    },
    {
        nama: 'Ardhana',
        npm: 17411069
    }
]
for (let i = 0; i < listMhs.length; i++) {
    console.log(listMhs[i].nama + ' - ' + listMhs[i].npm)
}

// if (nilai > 80) {
//     console.log('Nilai Anda A')
// } else if (nilai > 70) {
//     console.log('Nilai Anda B')
// } else if (nilai > 60) {
//     console.log('Nilai Anda C')
// }


// server.listen(port, function() {
// console.log('Server Started on Port' + port)
// })

