import React,{useState, useEffect} from 'react';
import {
    Typography,
    Grid,
    TextField,
    Button
} from '@mui/material'
import ApiMahasiswa from '../data/dataMahasiswa'

const TambahDataMahasiswa = (props) => {
    let [nama, setNama] = useState(props.edit.nama)
    let [npm, setNpm] = useState(props.edit.npm)
    let [kelas, setKelas] = useState(props.edit.kelas)
    let [jurusan, setJurusan] = useState(props.edit.jurusan)
    let [nomorHandphone, setNomorHandphone] = useState(props.edit.nomorHandphone)
    // console.log(setNama(props.edit.nama))
    // props.edit()
    // console.log(props.edit.nama);
    const Submit = (e) => {
        e.preventDefault()
            ApiMahasiswa
                    .put(`/mahasiswa/${props.edit.id}`, {
                        "nama" : nama,
                        "npm" : npm,
                        "kelas" : kelas,
                        "jurusan" : jurusan,
                        "nomorHandphone" : nomorHandphone 
                    }).then(res => {
                        props.snackbarOpen()
                        console.log(res)
                    }).catch(err => {
                        console.log(err)
                    })
                    // setMahasiswa(response.data) 
                props.data()
                props.fetch()
    }
    return(
        <>
        <Grid container spacing={2} sx={{marginTop : '0.5em'}}>
            <Grid item xs={4}>
                <Typography sx={{marginTop : '1em'}}>
                    Nama
                </Typography>
            </Grid>
            <Grid item xs={8}>
                <TextField value={nama} onInput={(e)=>setNama(e.target.value)} label="Nama" type="search" />
            </Grid>
        </Grid>
        <Grid container spacing={2} sx={{marginTop : '1em'}}>
            <Grid item xs={4}>
                <Typography sx={{marginTop : '1em'}}>
                    NPM
                </Typography>
            </Grid>
            <Grid item xs={8}>
                <TextField value={npm} onInput={ e=>setNpm(e.target.value)} label="NPM" type="search" />
            </Grid>
        </Grid>
        <Grid container spacing={2} sx={{marginTop : '1em'}}>
            <Grid item xs={4}>
                <Typography sx={{marginTop : '1em'}}>
                    Kelas
                </Typography>
            </Grid>
            <Grid item xs={8}>
                <TextField value={kelas} onInput={ e=>setKelas(e.target.value)} label="Kelas" type="search" />
            </Grid>
        </Grid>
        <Grid container spacing={2} sx={{marginTop : '1em'}}>
            <Grid item xs={4}>
                <Typography sx={{marginTop : '1em'}}>
                    Jurusan
                </Typography>
            </Grid>
            <Grid item xs={8}>
                <TextField value={jurusan} onInput={ e=>setJurusan(e.target.value)} label="Jurusan" type="search" />
            </Grid>
        </Grid>
        <Grid container spacing={2} sx={{marginTop : '1em'}}>
            <Grid item xs={4}>
                <Typography sx={{marginTop : '1em'}}>
                    Nomor Handphone
                </Typography>
            </Grid>
            <Grid item xs={8}>
                <TextField value={nomorHandphone} onInput={ e=>setNomorHandphone(e.target.value)} label="Nomor Handphone" type="search" />
            </Grid>
        </Grid>
        <Grid container spacing={2} sx={{marginTop : '1em'}}>
            <Grid item xs={4}>
            
            </Grid>
            <Grid item xs={8}>
                <Button variant="contained" onClick={Submit}>Simpan</Button>
            </Grid>
        </Grid>
        
        </>
    )
}

export default TambahDataMahasiswa