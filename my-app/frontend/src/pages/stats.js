import {Box, Button, Container, Grid, Stack, Typography} from "@mui/material";
import {Layout as DashboardLayout} from "src/layouts/dashboard/layout";
import {useEffect, useState} from "react";
import {useDialog} from "@/contexts/dialog-context";
import {DataGrid, GridActionsCellItem} from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import {ConfirmDialog} from "@/sections/stats/confirm-dialog";
import {AddUserDialog} from "@/sections/stats/add-dialog";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import {info} from "@/theme/colors";
import {useRouter} from "next/router";
import NProgress from "nprogress";

const now = new Date();

const Stats = () => {
    const [stats, setStats] = useState([]);

    const dialog = useDialog();

    const router = useRouter();

    const handleDeleteClick = (id) => () => {
        const deleteAction = () => {
            fetch("/api/staff", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });
            setStats(stats.filter((s) => s.id !== id));
        };

        dialog.setDialogContent({
            title: "Eliminar um staff",
            type: "confirmwk",
            content:
                "Tem a certeza que quer eliminar o staff " + stats.find((x) => x.id == id).name + "?",
            action: deleteAction,
        });
    };

    const handleEditClick = (id) => () => {
        //set popup content
        dialog.setDialogContent({
            title: "Editar um staff",
            type: "editwk",
            workout: stats.find((x) => x.id == id),
        });
    };

    const columns = [
        { field: "name", headerName: "Nome do Técnico", width: 250 },
        {
            field: "joinDate",
            headerName: "Data de Adesão",
            width: 150,
            renderCell: (params) => params.value + "semanas",
        },
        {
            field: "job",
            headerName: "Profissão",
            width: 300,
            renderCell: (params) => params.value
        },
        {
            field: "email",
            headerName: "Email",
            width: 300,
            renderCell: (params) => params.value
        },
        {
            field: "password",
            headerName: "Password",
            width: 300,
            renderCell: (params) => params.value
        },
        {
            field: "phoneNumber",
            headerName: "Contacto Telefónico",
            width: 300,
            renderCell: (params) => params.value
        },
        {
            field: "citizenId",
            headerName: "Nº Cartão de Cidadão",
            width: 300,
            renderCell: (params) => params.value
        },
        {
            field: "healthId",
            headerName: "Nº de Utente",
            width: 300,
            renderCell: (params) => params.value
        },
        {
            field: "sex",
            headerName: "Sexo",
            width: 300,
            renderCell: (params) => params.value
        },
        {
            field: "gender",
            headerName: "Género",
            width: 300,
            renderCell: (params) => params.value
        },
        {
            field: "birthDate",
            headerName: "Data de Nascimento",
            width: 300,
            renderCell: (params) => params.value
        },
        {
            field: "address",
            headerName: "Morada",
            width: 300,
            renderCell: (params) => params.value
        },
        {
            field: "actions",
            type: "actions",
            headerName: "Editar/Remover",
            width: 150,
            cellClassName: "actions",
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
            },
        },
    ];

    useEffect(() => {
        NProgress.start()
        async function fetchMyAPI() {
            let response = await fetch("/api/staff", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            response = await response.json();

            response.map((r) => {
                r.id = r._id;
            });
            setStats(response);
            NProgress.done()
        }

        fetchMyAPI();
    }, []);

    const handleRowClick = (params) => {
        router.push(`/patients/${params.id}`)
    };

return (
    <>
        {dialog.getType().type == "confirmstd" ? <ConfirmDialog /> : <AddUserDialog />}

        <Box
            sx={{
                backgroundColor: "background.default",
                minHeight: "100%",
                py: 8,
            }}
        >
            <Container maxWidth={false}>
                <Stack direction="row" justifyContent="space-between" mb={3}>
                    <Typography color="textPrimary" variant="h4">
                        Staff
                    </Typography>
                </Stack>
                <br />
                <Button
                    startIcon={<PlusIcon />}
                    variant="contained"
                    sx={{
                        backgroundColor: info.main,
                    }}
                    onClick={() => {
                        dialog.setDialogContent({
                            title: "Adicionar um novo profissional",
                            type: "createstd",
                        })
                    }}
                >
                    Adicionar Profissional
                </Button>
            </Container>
            <br />
            <Container maxWidth="xl">
                <Stack spacing={3}>
                    <DataGrid
                        onRowClick={handleRowClick}
                        rows={stats}
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

Stats.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Stats;