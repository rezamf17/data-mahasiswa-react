import React, { useEffect, useState } from 'react'
import { teal } from '@mui/material/colors'
import {
    Box,
    Grid,
    Button
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useParams } from 'react-router-dom'
import { getIdMahasiswa } from '../data/Helper.js'
import ApiMahasiswa from '../data/dataMahasiswa'

const DetailDataMahasiswa = () => {
    const backgroundBox = teal[50]
    const backgroundButton = teal[500]
    let params = useParams()
    let [mahasiswaId, setMahasiswaId] = useState({})
    // useEffect(
    //     () => {
    //         let idDariParams = params.id 
    //         console.log(params.id)
    //         const selectedMahasiswa = getIdMahasiswa(parseInt(idDariParams))
    //         setMahasiswa(selectedMahasiswa)
    //     },
    //     []
    // )
    useEffect(() => {
        let idDariParams = params.id 
        const fetchDataMahasiswa = async () => {
            try {
                const response = await ApiMahasiswa
                    .get(`/mahasiswa/${idDariParams}`)
                    setMahasiswaId(response.data)    
                // console.log(response)        
            } catch (error) {
                console.log('error :', error)
            }
        }
        fetchDataMahasiswa()
    }, [])
    // console.log(mahasiswaId.data.npm)
    return (
        <>
            <Box sx={{
                backgroundColor: backgroundBox,
                margin: '2em',
                borderRadius: '2em',
                height: '35em'
            }}>
                <h3>Detail Data Mahasiswa</h3>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Button variant="outlined" component={Link} to={'/data-mahasiswa'}
                            sx={{
                                borderRadius: '20px',
                                color: backgroundButton
                            }}
                        >
                            <ArrowBackIcon />
                            Kembali</Button>
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{marginBottom : "1em", marginTop : "2em"}}>
                    <Grid item xs={4}>
                        NPM :
                    </Grid>
                    <Grid item xs={2}>
                        {mahasiswaId?.data?.npm}
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{marginBottom : "1em"}}>
                    <Grid item xs={4}>
                        Nama :
                    </Grid>
                    <Grid item xs={2}>
                        {mahasiswaId?.data?.nama}
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{marginBottom : "1em"}}>
                    <Grid item xs={4}>
                        Jurusan :
                    </Grid>
                    <Grid item xs={2}>
                        {mahasiswaId?.data?.jurusan}
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{marginBottom : "1em"}}>
                    <Grid item xs={4}>
                        Nomor Handphone :
                    </Grid>
                    <Grid item xs={2}>
                        {mahasiswaId?.data?.nomorHandphone}
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default DetailDataMahasiswa