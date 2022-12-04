import React, { useState, useEffect } from 'react'
import { Box, Button } from '@mui/material'
import { teal } from '@mui/material/colors'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Modal,
    Typography,
    Snackbar,
} from '@mui/material'
import { useNavigate, Link } from 'react-router-dom';
import MuiAlert from '@mui/material/Alert';
import AddIcon from '@mui/icons-material/Add';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ApiMahasiswa from '../data/dataMahasiswa'
import TambahDataMahasiswa from './TambahDataMahasiswa';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const DataMahasiswa = () => {
    const [mahasiswa, setMahasiswa] = useState([])
    const [open, setOpen] = useState(false);
    const [snack, setSnack] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const snackbarOpen = () => setSnack(true);
    const snackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnack(false);
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        borderRadius: '1em',
        boxShadow: 24,
        p: 4,
    };
    useEffect(() => {
        const fetchDataMahasiswa = async () => {
            try {
                const response = await ApiMahasiswa
                    .get("/mahasiswa")
                setMahasiswa(response.data)
                // console.log(response)        
            } catch (error) {
                console.log('error :', error)
            }
        }
        fetchDataMahasiswa()
    }, [])
    const backgroundBox = teal[50]
    // let navigate = useNavigate()
    return (
        <>
            <Box sx={{
                backgroundColor: backgroundBox,
                margin: '2em',
                borderRadius: '2em',
                height: '35em'
            }}>
                <h3>Data Mahasiswa</h3>
                <Button variant="contained" startIcon={<AddIcon />} sx={{ marginBottom: '1em' }}
                    onClick={handleOpen}>
                    Tambah
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Tambah Data Mahasiswa
                        </Typography>
                        <TambahDataMahasiswa data={handleClose} snackbarOpen={snackbarOpen} fetch={useEffect}/>
                    </Box>
                </Modal>
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
                                mahasiswa?.data?.map((item, i) => {
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
                                                <IconButton component={Link} to={`/data-mahasiswa/${item.id}`}>
                                                    <EditIcon />
                                                </IconButton>
                                                <IconButton component={Link} to={`/data-mahasiswa/${item.id}`}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Button onClick={snackbarOpen}> snackbar</Button>
            <Snackbar
                open={snack}
                autoHideDuration={2000}
                onClose={snackbarClose}
                message="Note archived"
            >
                <Alert onClose={snackbarClose} severity="success" sx={{ width: '100%' }}>
                    Data Berhasil Ditambahkan!
                </Alert>
            </Snackbar>
        </>
    )
}

export default DataMahasiswa