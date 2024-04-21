import {Layout as DashboardLayout} from '@/layouts/dashboard/layout';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import Head from "next/head";
import {Avatar, Box, Card, CardContent, CardHeader, Container, Grid, Stack, Typography} from "@mui/material";
import {OverviewWidget} from "@/sections/overview/overview-widget";
import {formatCreatedDate} from "@/utils/format"

const StudentPage = (params) => {
    const router = useRouter()
    const [student, setStudent] = useState({});

    useEffect(() => {
        async function fetchMyAPI() {
            let response = await fetch(`/api/patient?id=${router.query.id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            setStudent(await response.json())
        }

        fetchMyAPI()
    }, [])

    return (
        <>

            <Head>
                <title>Pacientes | My Clinic</title>
            </Head>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 4,
                }}
            >
                <Container maxWidth="xl">

                    <Typography
                        gutterBottom
                        variant="h5"
                    >
                        Pacientes - {student.name}
                    </Typography>
                    <br></br>

                    <Grid container spacing={2}>

                        <Grid item
                              xs={12}
                              md={6}
                              lg={3}
                        >
                            <Card>
                                <CardContent>
                                    <Box
                                        sx={{
                                            alignItems: 'center',
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}
                                    >
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                        >
                                            {student.name}
                                        </Typography>
                                        <Typography
                                            color="text.secondary"
                                            variant="body2"
                                        >
                                            {student.email}
                                        </Typography>

                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <OverviewWidget
                                icon="2"
                                text={"Data de adesão"}
                                sx={{
                                    height: "100%",
                                    fontSize: 10,
                                    background: `linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)`
                                }}
                                value={formatCreatedDate(student.createdAt)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <OverviewWidget
                                icon="3"
                                text={"1ª Consulta"}
                                differenceDay={"semana"}
                                sx={{height: "100%", background: ` linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);`}}
                                value="20/11/2022"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <OverviewWidget
                                icon="4"
                                text={"Nº consultas"}
                                sx={{height: "100%", background: `linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)`}}
                                value="1"
                            />
                        </Grid>
                    </Grid>
                    <>
                        <Box
                            component="main"
                            sx={{
                                flexGrow: 1,
                                py: 8
                            }}
                        >
                            <Container maxWidth="lg">
                                <Stack spacing={3}>
                                    <div>
                                        <Grid
                                            container
                                            spacing={3}
                                        >

                                            <Grid
                                                xs={12}
                                                md={6}
                                                lg={6}
                                                item
                                            >
                                                <Card>
                                                    <CardHeader
                                                        subheader="Pode ver aqui as consultas mais recentes"
                                                        title="Consultas mais recente"
                                                    />
                                                    <CardContent>
                                                        <Box>
                                                            <Grid
                                                                container
                                                            >
                                                                <Grid
                                                                    xs={12}
                                                                    md={12}
                                                                >
                                                                    <Typography>
                                                                    Data: 03/10/2023
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid
                                                                    xs={12}
                                                                    md={6}
                                                                >
                                                                    <Typography>
                                                                    Consulta: Revisão de Raio-X

                                                                    </Typography>
                                                                </Grid>
                                                                <Grid
                                                                    xs={12}
                                                                    md={6}
                                                                >
                                                                    <Typography>
                                                                    Tempo: 40min
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid
                                                                    xs={12}
                                                                    md={6}
                                                                >
                                                                    Volume: 3,457.5kg
                                                                </Grid>
                                                            </Grid>
                                                        </Box>
                                                    </CardContent>

                                                </Card>
                                            </Grid>
                                            <Grid
                                                xs={12}
                                                md={6}
                                                lg={6}
                                                item
                                            >
                                                <Card>
                                                    <CardHeader
                                                        subheader="Pode ver as estatisticas do paciente"
                                                        title="Última consulta"
                                                    />
                                                    <CardContent>
                                                        <Box>
                                                            <Grid
                                                                container
                                                            >
                                                                <Grid
                                                                    xs={12}
                                                                    md={12}
                                                                >
                                                                    <Typography>
                                                                        Contacto Telefónico: {student.phoneNumber}
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid
                                                                    xs={12}
                                                                    md={6}
                                                                >
                                                                    <Typography>
                                                                        Nº Cartão de Cidadão: {student.citizenId}
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid
                                                                    xs={12}
                                                                    md={6}
                                                                >
                                                                    <Typography>
                                                                        Nº de Utente: {student.healthId}
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid
                                                                    xs={12}
                                                                    md={6}
                                                                >
                                                                    Sexo: {student.sex}
                                                                </Grid>
                                                                <Grid
                                                                    xs={12}
                                                                    md={6}
                                                                >
                                                                    <Typography>
                                                                        Género: {student.gender}
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid
                                                                    xs={12}
                                                                    md={6}
                                                                >
                                                                </Grid>
                                                                    <Typography>
                                                                        Data de Nascimento: {student.birthDate}
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid
                                                                    xs={12}
                                                                    md={6}
                                                                >
                                                                    <Typography>
                                                                        Morada: {student.address}
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid
                                                                    xs={12}
                                                                    md={6}
                                                                >
                                                                <Grid
                                                                    xs={12}
                                                                    md={6}
                                                                >

                                                                </Grid>
                                                            </Grid>
                                                        </Box>
                                                    </CardContent>

                                                </Card>
                                            </Grid>

                                        </Grid>
                                    </div>
                                </Stack>
                            </Container>
                        </Box>
                    </>
                </Container>
            </Box>
        </>

    );

}


StudentPage.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default StudentPage;
