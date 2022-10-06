import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { teal } from '@mui/material/colors'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton
} from '@mui/material'
import {useNavigate, Link } from 'react-router-dom';
import Mahasiswa from '../data/GetMahasiswa.json'
import FileCopyIcon from '@mui/icons-material/FileCopy';

const DataMahasiswa = () => {
    const backgroundBox = teal[50]
    let navigate = useNavigate()
    const handlerMahasiswaDetail = (event, item) => {
        event.preventDefault()
        navigate(`data-mahasiswa/${item.id}`)
    }

    return (
        <>
            <Box sx={{
                backgroundColor: backgroundBox,
                margin: '2em',
                borderRadius: '2em',
                height: '35em'
            }}>
                <h3>Data Mahasiswa</h3>
                <TableContainer component={Paper} sx={{
                    width: '60%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 'auto',
                    borderRadius: '20px',
                    overflow: 'auto',
                    maxHeight: 500
                }}>
                    <Table aria-label="simple table">
                        <TableHead sx={{
                            backgroundColor: teal[300],
                        }}>
                            <TableRow>
                                <TableCell>No</TableCell>
                                <TableCell>Nama Mahasiswa</TableCell>
                                <TableCell>Jurusan</TableCell>
                                <TableCell>Kelas</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                Mahasiswa.map((item, i) => {
                                    return (
                                        <TableRow
                                            key={i}>
                                            <TableCell>
                                                {i + 1}
                                            </TableCell>
                                            <TableCell>
                                                {item.nama}
                                            </TableCell>
                                            <TableCell>
                                                {item.jurusan}
                                            </TableCell>
                                            <TableCell>
                                                {item.kelas}
                                            </TableCell>
                                            <TableCell>
                                                <IconButton component={Link} to={`/data-mahasiswa/${item.id}`}>
                                                    <FileCopyIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>)
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}

export default DataMahasiswa