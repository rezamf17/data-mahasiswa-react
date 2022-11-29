import React,{useState, useEffect} from 'react';
import {
    Typography,
    Grid,
    TextField,
    Button
} from '@mui/material'
import ApiMahasiswa from '../data/dataMahasiswa'

const TambahDataMahasiswa = () => {
    const [nama, setNama] = useState('')
    const [npm, setNpm] = useState('')
    const [kelas, setKelas] = useState('')
    const [jurusan, setJurusan] = useState('')
    const [nomorHandphone, setNomorHandphone] = useState('')

    const Submit = (e) => {
        e.preventDefault()
            ApiMahasiswa
                    .post("/mahasiswa", {
                        "nama" : nama,
                        "npm" : npm,
                        "kelas" : kelas,
                        "jurusan" : jurusan,
                        "nomorHandphone" : nomorHandphone 
                    }).then(res => {
                        console.log(res)
                    }).catch(err => {
                        console.log(err)
                    })
                    // setMahasiswa(response.data) 
        console.log([
            {
                "nama" : nama,
                "npm" : npm,
                "kelas" : kelas,
                "jurusan" : jurusan,
                "nomorHandphone" : nomorHandphone 
            }
        ])
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
                <TextField value={nama} onInput={ e=>setNama(e.target.value)} label="Nama" type="search" />
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