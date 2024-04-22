import { Box, Button, Container, Stack, Typography, Tooltip } from "@mui/material";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { Layout as DashboardLayout } from "@/layouts/dashboard/layout";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { info } from "../theme/colors";
import { useDialog } from "../contexts/dialog-context";
import { AddWorkoutDialog } from "../sections/workouts/add-dialog";
import { useEffect, useState } from "react";
import { formatCreatedDate } from "@/utils/format";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { ConfirmDialog } from "@/sections/students/confirm-dialog";

const WorkoutsPage = () => {
  const [workouts, setWorkouts] = useState([]);

  const dialog = useDialog();

  const handleDeleteClick = (id) => () => {
    const deleteAction = () => {
      fetch("/api/appointments", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      setWorkouts(workouts.filter((s) => s.id !== id));
    };

    dialog.setDialogContent({
      title: "Eliminar uma consulta",
      type: "confirmstd",
      content:
        "Tem a certeza que quer eliminar a consulta " + workouts.find((x) => x.id == id).name + "?",
      action: deleteAction,
    });
  };

  const handleEditClick = (id) => () => {
    //set popup content
    dialog.setDialogContent({
      title: "Editar uma consulta",
      type: "editstd",
      workout: workouts.find((x) => x.id == id),
    });
  };

  const columns = [
    { field: "name", headerName: "Nome da Consulta", width: 250 },
    {
      field: "staffId",
      headerName: "Médico/Técnico",
      width: 300
      
    },
    {
      field: "patientId",
      headerName: "Paciente",
      width: 300,
      renderCell: (params) => params.value
    },
    {
      field: "date",
      headerName: "Data da Consulta",
      width: "150",
      sortable: false,
      renderCell: (params) => params.value
    },
    {
      field: "time",
      headerName: "Duração",
      width: 150,
      renderCell: (params) => params.value + " minutos",
    },
    {
      field: "location",
      headerName: "Local",
      width: 150,
      renderCell: (params) => params.value ,
    },
    {
      field: "extraInfo",
      headerName: "Informação",
      width: 150,
      renderCell: (params) => params.value,
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
      let response = await fetch("/api/appointments", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      response = await response.json();

      response.map((r) => {
        r.id = r._id;
      });
      setWorkouts(response);
    }

    fetchMyAPI();
  }, []);

  return (
    <>
      {dialog.getType().type == "confirmstd" ? <ConfirmDialog /> : <AddWorkoutDialog />}

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
              Consultas
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
                    title: "Adicionar uma nova Consulta",
                    type: "createstd",
                })
            }}
          >
            Adicionar consultas
          </Button>
        </Container>
        <br />
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <DataGrid rows={workouts} columns={columns} pageSizeOptions={[5, 10]} />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

WorkoutsPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default WorkoutsPage;
