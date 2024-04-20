import {Avatar, Box, Button, CircularProgress, Container, Stack, Typography} from '@mui/material';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import {Layout as DashboardLayout} from '@/layouts/dashboard/layout';
import {useEffect, useState} from 'react';
import {DataGrid, GridActionsCellItem} from '@mui/x-data-grid';
import {beige} from '../theme/colors';
import {useDialog} from "../contexts/dialog-context"
import {AddUserDialog} from '../sections/students/add-dialog';
import {useRouter} from 'next/router';
import {formatCreatedDate} from "@/utils/format"
import NProgress from "nprogress";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { ConfirmDialog } from '@/sections/students/confirm-dialog';
const StudentsPage = () => {


    const dialog = useDialog();
    const router = useRouter();

    const [students, setStudents] = useState([]);
    useEffect(() => {
        NProgress.start()
        async function fetchMyAPI() {
            let response = await fetch('/api/pacients', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            response = await response.json()

            response.map((r) => {
                r.id = r._id
            })
            setStudents(response)
            NProgress.done()
        }

        fetchMyAPI()
    }, [])

    const handleDeleteClick = (id) => () => {

        const deleteAction = () =>{
            fetch('/api/pacients', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({id})
            })
            setStudents(students.filter((s) => s.id !== id))
        }


        dialog.setDialogContent({
            title: "Eliminar um paciente",
            type: "confirmstd",
            content: "Tem a certeza que quer eliminar o paciente " + students.find((x)=>x.id == id).name + "?",
            action: deleteAction
        })
      };

      const handleEditClick = (id) => () =>{
        //set popup content
        dialog.setDialogContent({
            title: "Editar um paciente",
            type: "editstd",
            user: students.find((x)=>x.id == id)
        })
        
      }
      

    const columns = [
        {field: 'name', headerName: 'Nome', width: 200},
        {field: 'email', headerName: 'Email', width: 130},
        {field: 'phoneNumber', headerName: 'Contacto Telefónico', width: 100},
        {field: 'citizenId', headerName: 'Nº Cartão de Cidadão', width: 100},
        {field: 'healthId', headerName: 'Nº de Utente', width: 100},
        {field: 'sex', headerName: 'Sexo', width: 100},
        {field: 'gender', headerName: 'Género', width: 100},
        {field: 'birthDate', headerName: 'Data de Nascimento', width: 130},
        {field: 'address', headerName: 'Morada', width: 200},
        {
            field: 'createdAt',
            headerName: 'Data de Criação',
            width: 200,
            renderCell: (params) => formatCreatedDate(params.value)
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Editar/Remover',
            width: 150,
            cellClassName: 'actions',
            getActions: ({ id }) => {

                return [
                  <GridActionsCellItem
                    key={1}
                    icon={<EditIcon />}
                    label="Cancel"
                    className="textPrimary"
                    onClick={handleEditClick(id)}
                    color="inherit"
                  />,
                  <GridActionsCellItem
                    key={1}
                    icon={<DeleteIcon />}
                    label="Cancel"
                    className="textPrimary"
                    onClick={handleDeleteClick(id)}
                    color="inherit"
                  />,
                ];
              
            }
        }
    ];

    const handleRowClick = (params) => {
        router.push(`/pacients/${params.id}`)
    };

    return (
        <>

        {dialog.getType().type == "confirmstd" ? <ConfirmDialog/>:<AddUserDialog/>}
        
        
        <Box
            sx={{
                backgroundColor: 'background.default',
                minHeight: '100%',
                py: 8,
            }}
        >
            <Container maxWidth={false}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    mb={3}
                >
                    <Typography
                        color="textPrimary"
                        variant="h4"
                    >
                        Pacientes
                    </Typography>
                </Stack>
                <Button
                    startIcon={<PlusIcon/>}
                    variant="contained"
                    sx={{
                        backgroundColor: beige.main,
                    }}
                    onClick={() => {
                        dialog.setDialogContent({
                            title: "Adicionar um novo Paciente",
                            type: "createstd",
                        })
                    }}
                >
                    Adicionar Paciente
                </Button>
            </Container>
            <Container maxWidth="xl">
                <Stack spacing={3}>
                    <DataGrid
                        onRowClick={handleRowClick}
                        rows={students}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {page: 0, pageSize: 10},
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                    />
                </Stack>
            </Container>
        </Box>
        </>
    );
};

StudentsPage.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default StudentsPage;
