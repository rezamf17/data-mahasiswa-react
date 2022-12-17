import React, { useState, useEffect, useCallback } from 'react'
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
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions  
} from '@mui/material'
import { useNavigate, Link } from 'react-router-dom';
import MuiAlert from '@mui/material/Alert';
import AddIcon from '@mui/icons-material/Add';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ApiMahasiswa from '../data/dataMahasiswa'
import TambahDataMahasiswa from './TambahDataMahasiswa';
import EditDataMahasiswa from './EditDataMahasiswa';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const DataMahasiswa = () => {
    const [mahasiswa, setMahasiswa] = useState([])
    const [dataEdit, setDataEdit] = useState([])
    const [dataDelete, setDataDelete] = useState([])
    const [open, setOpen] = useState(false);
    const [modalEditOpen, setModalEditOpen] = useState(false);
    const [dialogDeleteOpen, setDialogDeleteOpen] = useState(false);
    const [snack, setSnack] = useState(false)
    const [snackDelete, setSnackDelete] = useState(false)
    // const [owner, setOwner] = useState(null);
    const handleOpen = () => setOpen(true);
    const handleDialogDeleteOpen = (id) => {
        // console.log(id)
        setDialogDeleteOpen(true)
        setDataDelete(id)
    };
    const handleDialogDeleteClose = () => setDialogDeleteOpen(false);
    const handleModalEditOpen = (id) => {
        // setOwner(id)
        setModalEditOpen(true)
        console.log(id)
        setDataEdit(id)
    };
    const submitDeleteData = (e) => {
        e.preventDefault()
        ApiMahasiswa
                .delete(`/mahasiswa/${dataDelete.id}`, {
                    "nama" : dataDelete.nama,
                    "npm" : dataDelete.npm,
                    "kelas" : dataDelete.kelas,
                    "jurusan" : dataDelete.jurusan,
                    "nomorHandphone" : dataDelete.nomorHandphone 
                }).then(res => {
                    console.log(res)
                    getAllMahasiswa()
                }).catch(err => {
                    console.log(err)
                })
        snackbarDeleteOpen()
        setDialogDeleteOpen(false)
        // console.log('inidata delete',dataDelete)
    }
    // console.log('ini data edit', dataEdit)
    const handleModalEditClose = () => setModalEditOpen(false);
    const handleClose = () => {
        setOpen(false)
    };
    const snackbarOpen = () => setSnack(true);
    const snackbarDeleteOpen = () => setSnackDelete(true);
    const snackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnack(false);
    }
    const snackbarCloseDelete = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackDelete(false);
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
    const getAllMahasiswa =  async () => {
        try {
            const res = await ApiMahasiswa.get("/mahasiswa")
            setMahasiswa(res.data)
        } catch (error) {
            console.log('error :', error)
        }
    }
    useEffect(() => {
        // const fetchDataMahasiswa = async () => {
        //     try {
        //         const response = await ApiMahasiswa
        //             .get("/mahasiswa")
        //         setMahasiswa(response.data)
        //         // console.log(response)        
        //     } catch (error) {
        //         console.log('error :', error)
        //     }
        // }
        // fetchDataMahasiswa()
        getAllMahasiswa()
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
                        <TambahDataMahasiswa 
                            data={handleClose} 
                            snackbarOpen={snackbarOpen} 
                            fetch={useEffect} 
                            get={getAllMahasiswa}/>
                    </Box>
                </Modal>
                <Modal
                    open={modalEditOpen}
                    onClose={handleModalEditClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Edit Data Mahasiswa
                        </Typography>
                        <EditDataMahasiswa
                            data={handleModalEditClose}
                            snackbarOpen={snackbarOpen}
                            fetch={useEffect}
                            edit={dataEdit}
                        />
                    </Box>
                </Modal>

                <Dialog
                    open={dialogDeleteOpen}
                    onClose={handleDialogDeleteClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Hapus Data Mahasiswa"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Yakin ingin menghapus data mahasiswa {dataDelete.nama}?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleDialogDeleteClose}>Tidak</Button>
                        <Button onClick={submitDeleteData} autoFocus>
                            Ya
                        </Button>
                    </DialogActions>
                </Dialog>
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
                            fontWeight: 'bold'
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
                                                <IconButton onClick={() => handleModalEditOpen(item)}>
                                                    <EditIcon />
                                                </IconButton>
                                                <IconButton onClick={() => handleDialogDeleteOpen(item)}>
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
            <Button onClick={snackbarDeleteOpen}> snackbar</Button>
            <Snackbar
                open={snack}
                autoHideDuration={2000}
                onClose={snackbarClose}
                message="Note archived"
            >
                <Alert onClose={snackbarClose} severity="success" sx={{ width: '100%' }}>
                    Data Berhasil Disimpan!
                </Alert>
            </Snackbar>
            <Snackbar
                open={snackDelete}
                autoHideDuration={2000}
                onClose={snackbarCloseDelete}
                message="Note archived"
            >
                <Alert onClose={snackbarCloseDelete} severity="success" sx={{ width: '100%' }}>
                    Data Berhasil Dihapus!
                </Alert>
            </Snackbar>
        </>
    )
}

export default DataMahasiswa