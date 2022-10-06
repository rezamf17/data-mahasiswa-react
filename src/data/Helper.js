import GetMahasiswa from './GetMahasiswa.json'

const mahasiswa = GetMahasiswa

export function getAllMahasiswa(){
    return mahasiswa
}

export function getIdMahasiswa(id){
    // console.log(mahasiswa)
    // let idMhs = mahasiswa.find((getMahasiswa) => getMahasiswa.id === id)
    // console.log(idMhs)
    return mahasiswa.find((getMahasiswa) => getMahasiswa.id === id) 
}