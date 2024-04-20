import React, {useState, useEffect} from 'react';
import FormDialog from '../../components/form-dialog';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import {useDialog} from '../../contexts/dialog-context';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Typography, {Autocomplete, Stack, createFilterOptions } from '@mui/material';
import {useRouter} from 'next/router'
import {info} from '../../theme/colors';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {styled} from '@mui/material/styles';
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const filter = createFilterOptions();
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export const AddExerciseDialog = () => {
    const router = useRouter()
    const dialog = useDialog();
    const formik = useFormik({
        initialValues: {
            patient_name: "",
            citizenId: "",
            healthId: "",
            sex: "",
            gender: "",
            birthDate: "",
            address: "",
            entry_hour: "",
            symptoms: "",
            priority: "",
            state: "",
            submit: null,
        },
        validationSchema: Yup.object({
            patient_name: Yup.string().max(255).required('O nome do paciente é necessário'),
            citizenId: Yup.string().max(255).required('O nº do cartão de cidadão é necessário'),
            healthId: Yup.string().required('O nº de utente é necessário'),
            sex: Yup.string().required("É necessário adicionar o sexo do paciente"),
            gender: Yup.string().required("É necessário adicionar o género do paciente"),
            birthDate: Yup.string().required("Data de check-in é necessário"),
            address: Yup.string().required("Morada é necessário"),
            entry_hour: Yup.string().required("Hora de entrada é necessário"),
            symptoms: Yup.string().required("É necessário adicionar sintomas"),
            priority: Yup.string().required("Necessário adicionar prioridade")
        }),

        onSubmit: async (values, helpers) => {
            try {
                helpers.setStatus({success: true});
                helpers.setSubmitting(true);
                if (dialog.getType().type == "editex") values.id = dialog.getType().exercise._id;
                await fetch('/api/check-ins', {
                    method: dialog.getType().type == "editex" ? "PUT" : "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                })
                helpers.setSubmitting(false);
                helpers.resetForm();
                dialog.closeDialog();
                router.reload()
            } catch (err) {
                helpers.setStatus({success: false});
                helpers.setErrors({submit: err.message});
                helpers.setSubmitting(false);
            }
        },
    });

    
  const [selectedCategories, setSelectedCategories] = useState([]);

    useEffect(() => {
        if (dialog.getType().type == "editstd") {
            formik.setFieldValue("name", dialog.getType().user.name);
            formik.setFieldValue("pacient", dialog.getType().user.pacient);
            formik.setFieldValue("date", dialog.getType().user.date);
        } else {
            formik.setFieldValue("name", "");
            formik.setFieldValue("pacient", "");
            formik.setFieldValue("date", "");
        }
    }, [dialog]);

    return (
        <FormDialog>
            <DialogTitle>Adicionar um novo exercício</DialogTitle>
            <DialogContent>
                <form onSubmit={formik.handleSubmit}>
                    <Stack spacing={2}>
                      <TextField
                        error={!!(formik.touched.pacient && formik.errors.pacient)}
                        fullWidth
                        helperText={formik.touched.pacient && formik.errors.pacient}
                        label="Paciente"
                        name="pacient"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.pacient}
                    />
                    <TextField
                        error={!!(formik.touched.date && formik.errors.date)}
                        fullWidth
                        helperText={formik.touched.date && formik.errors.date}
                        label="Data de Adesão"
                        name="date"
                        type="date"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.date}
                    />

                    </Stack>
                    {formik.errors.submit && (
                        <Typography
                            color="error"
                            sx={{mt: 3, backgroundColor: info.main}}
                            variant="body2"
                        >
                            {formik.errors.submit}
                        </Typography>
                    )}
                    <Button
                        fullWidth
                        size="large"
                        sx={{mt: 3, backgroundColor: info.main, '&:hover': {backgroundColor: info.dark}}}
                        type="submit"
                        variant="contained"
                    >
                        Adicionar check-in
                    </Button>
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={dialog.closeDialog}>Cancel</Button>
            </DialogActions>
        </FormDialog>
    );
};
