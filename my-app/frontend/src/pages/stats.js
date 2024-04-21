import Head from "next/head";
import {Box, Button, Container, Grid, Stack, Typography} from "@mui/material";
import {Layout as DashboardLayout} from "src/layouts/dashboard/layout";
import {OverviewDB} from "src/sections/overview/overview-db";
import InfoIcon from "@mui/icons-material/Info";
import {OverviewTraffic} from "src/sections/overview/overview-traffic";
import {useEffect, useState} from "react";
import {useDialog} from "@/contexts/dialog-context";
import {DataGrid, GridActionsCellItem} from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import {ConfirmDialog} from "@/sections/stats/confirm-dialog";
import {AddUserDialog} from "@/sections/stats/add-dialog";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import {info} from "@/theme/colors";

const now = new Date();

const Stats = () => {
    const [stats, setStats] = useState([]);

    const dialog = useDialog();

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
        }

        fetchMyAPI();
    }, []);

return (
    <>
        {dialog.getType().type == "confirmwk" ? <ConfirmDialog /> : <AddUserDialog />}

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
                            title: "Adicionar um novo Profissional",
                            type: "createwk",
                        })
                    }}
                >
                    Adicionar Profissional
                </Button>
            </Container>
            <br />
            <Container maxWidth="xl">
                <Stack spacing={3}>
                    <DataGrid rows={stats} columns={columns} pageSizeOptions={[5, 10]} />
                </Stack>
            </Container>
        </Box>
    </>
);
};

Stats.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Stats;