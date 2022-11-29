import React,{useState} from 'react';
import {
    Typography,
    Grid,
    TextField,
    Button
} from '@mui/material'
const TambahDataMahasiswa = () => {
    const [nama, setNama] = useState('')
    const [npm, setNpm] = useState('')
    const [kelas, setKelas] = useState('')

    const submit = (e) => {
        e.preventDefault()
        console.log([nama, npm, kelas])
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
                <TextField id="outlined-search" label="Jurusan" type="search" />
            </Grid>
        </Grid>
        <Grid container spacing={2} sx={{marginTop : '1em'}}>
            <Grid item xs={4}>
                <Typography sx={{marginTop : '1em'}}>
                    Nomor Handphone
                </Typography>
            </Grid>
            <Grid item xs={8}>
                <TextField id="outlined-search" label="Nomor Handphone" type="search" />
            </Grid>
        </Grid>
        <Grid container spacing={2} sx={{marginTop : '1em'}}>
            <Grid item xs={4}>
            
            </Grid>
            <Grid item xs={8}>
                <Button variant="contained" onClick={submit}>Simpan</Button>
            </Grid>
        </Grid>
        
        </>
    )
}

export default TambahDataMahasiswa