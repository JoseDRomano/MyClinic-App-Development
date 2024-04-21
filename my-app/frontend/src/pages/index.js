import Head from "next/head";
import {Box, Container, Divider, Grid} from "@mui/material";
import {Layout as DashboardLayout} from "src/layouts/dashboard/layout";
import {OverviewWidget} from "@/sections/overview/overview-widget";
import {info} from "../theme/colors";
import Calendar from ".//calendar";

import {useEffect, useState} from "react"
import { ConfirmDialog } from "@/sections/students/confirm-dialog";

const Page = () => {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        async function fetchMyAPI() {
            let response = await fetch('/api/patients', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            response = await response.json()
            setStudents(response)
        }

        fetchMyAPI()
    }, [])
    return (<>
            <Head>
                <title>Dashboard | My Clinic</title>
            </Head>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 4,
                }}
            >
                <Container maxWidth="xl">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} lg={2.5}>
                            <OverviewWidget
                                icon="1"
                                text={"Pacientes registados"}
                                difference={5}
                                differenceDay={"mês"}
                                positive={true}
                                sx={{
                                    height: "100%",
                                    background: `linear-gradient(to bottom, ${info.main}, black)`,
                                }}
                                value={students.length}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={1}>
                            <Divider
                                orientation="vertical"
                                flexItem
                                sx={{
                                    height: "100%", // Fill the height of the container
                                    borderRight: '4px solid ' + info.main, // Customize thickness and style here
                                    margin: "0 16px", // Adjust spacing as needed
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={0.5}/>
                        <Grid item xs={12} sm={6} lg={2.3}>
                            <OverviewWidget
                                icon="2"
                                text={"Consultas hoje"}
                                differenceDay={"dia"}
                                difference={6}
                                positive={true}
                                sx={{height: "100%", background: `linear-gradient(to bottom, plum, black)`}}
                                value="10"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2.3}>
                            <OverviewWidget
                                icon="3"
                                text={"Consultas Semanais"}
                                differenceDay={"semana"}
                                difference={1}
                                positive={false}
                                sx={{height: "100%", background: `linear-gradient(to bottom, lightgreen, black)`}}
                                value="23"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2.3}>
                            <OverviewWidget
                                icon="4"
                                text={"Consultas Mensais"}
                                differenceDay={"mês"}
                                difference={11}
                                positive={true}
                                sx={{height: "100%", background: `linear-gradient(to bottom, skyblue  , black)`}}
                                value="98"
                            />
                        </Grid>
                    </Grid>
                </Container>
                {/* Add space */}
                <Box sx={{height: 30}}/>
                <Calendar/>
            </Box>
        </>
    )
};

Page.getLayout = (page) => <DashboardLayout><ConfirmDialog /> {page}</DashboardLayout>;

export default Page;
