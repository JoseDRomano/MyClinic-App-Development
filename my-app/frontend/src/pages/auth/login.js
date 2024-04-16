import Head from 'next/head';
import NextLink from 'next/link';
import {useRouter} from 'next/navigation';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {Box, Button, Link, Stack, TextField, Typography} from '@mui/material';
import {useAuth} from 'src/hooks/use-auth';
import {Layout as AuthLayout} from 'src/layouts/auth/layout';
import {beige} from '../../theme/colors';

const Page = () => {
    const router = useRouter();
    const auth = useAuth();
    const formik = useFormik({
        initialValues: {
            email: 'joaquimalberto@trainwith.me',
            password: 'Password123!',
            submit: null
        },
        validationSchema: Yup.object({
            email: Yup
                .string()
                .email('O email tem que ser válido')
                .max(255)
                .required('O email é necessário'),
            password: Yup
                .string()
                .max(255)
                .required('A password é necessária')
        }),
        onSubmit: async (values, helpers) => {
            try {
                await auth.signIn(values.email, values.password);
                router.push('/');
            } catch (err) {
                helpers.setStatus({success: false});
                helpers.setErrors({submit: err.message});
                helpers.setSubmitting(false);
            }
        }
    });

    return (
        <>
            <Head>
                <title>
                    Login | Train With Me
                </title>
            </Head>
            <Box
                sx={{

                    flex: '1 1 auto',
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Box
                    sx={{
                        maxWidth: 550,
                        px: 3,
                        py: '100px',
                        width: '100%'
                    }}
                >


                    <div>
                        <Stack
                            spacing={3}
                            sx={{mb: 5}}
                        >
                            <Typography variant='h1'>
                                Bem-vindo ao TrainWith.me
                            </Typography>

                            <Typography variant="h4">
                                Login
                            </Typography>
                            <Typography
                                color="text.secondary"
                                variant="body2"
                            >
                                Deseja registar-se como personal trainer?
                                &nbsp;
                                <Link
                                    component={NextLink}
                                    href="/auth/register"
                                    underline="hover"
                                    variant="subtitle2"
                                >
                                    Registar
                                </Link>
                            </Typography>
                        </Stack>

                        <form
                            noValidate
                            onSubmit={formik.handleSubmit}
                        >
                            <Stack spacing={3}>
                                <TextField
                                    error={!!(formik.touched.email && formik.errors.email)}
                                    fullWidth
                                    helperText={formik.touched.email && formik.errors.email}
                                    label="Email"
                                    name="email"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="email"
                                    value={formik.values.email}
                                />
                                <TextField
                                    error={!!(formik.touched.password && formik.errors.password)}
                                    fullWidth
                                    helperText={formik.touched.password && formik.errors.password}
                                    label="Password"
                                    name="password"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="password"
                                    value={formik.values.password}

                                />
                            </Stack>
                            {formik.errors.submit && (
                                <Typography
                                    color="error"
                                    sx={{mt: 3, backgroundColor: beige.main}}
                                    variant="body2"
                                >
                                    {formik.errors.submit}
                                </Typography>
                            )}
                            <Button
                                fullWidth
                                size="large"
                                sx={{mt: 3, backgroundColor: beige.main, '&:hover': {backgroundColor: beige.dark}}}
                                type="submit"
                                variant="contained">
                                Continue
                            </Button>
                        </form>

                    </div>
                </Box>
            </Box>
        </>
    );
};

Page.getLayout = (page) => (
    <AuthLayout>
        {page}
    </AuthLayout>
);

export default Page;
