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
            healthId: Yup.string().max(255).required('O nº de utente é necessário'),
            sex: Yup.string().max(255).required("É necessário adicionar o sexo do paciente"),
            gender: Yup.string().max(255).required("É necessário adicionar o género do paciente"),
            birthDate: Yup.string().max(255).required("Data de check-in é necessário"),
            address: Yup.string().max(255).required("Morada é necessário"),
            entry_hour: Yup.string().max(255).required("Hora de entrada é necessário"),
            symptoms: Yup.string().max(255).required("É necessário adicionar sintomas"),
            priority: Yup.string().max(255).required("Necessário adicionar prioridade"),
            state: Yup.string().max(255).required("É necessário adicionar um estado")
        }),

        onSubmit: async (values, helpers) => {
            try {
                helpers.setStatus({success: true});
                helpers.setSubmitting(true);
                if (dialog.getType().type == "editstd") values.id = dialog.getType().exercise._id;
                await fetch('/api/check-ins', {
                    method: dialog.getType().type == "editstd" ? "PUT" : "POST",
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
            formik.setFieldValue("patient_name", dialog.getType().user.patient_name);
            formik.setFieldValue("citizenId", dialog.getType().user.citizenId);
            formik.setFieldValue("healthId", dialog.getType().user.healthId);
            formik.setFieldValue("sex", dialog.getType().user.sex);
            formik.setFieldValue("gender", dialog.getType().user.gender);
            formik.setFieldValue("birthDate", dialog.getType().user.birthDate);
            formik.setFieldValue("address", dialog.getType().user.address);
            formik.setFieldValue("entry_hour", dialog.getType().user.entry_hour);
            formik.setFieldValue("symptoms", dialog.getType().user.symptoms);
            formik.setFieldValue("priority", dialog.getType().user.priority);
            formik.setFieldValue("state", dialog.getType().user.state);
        } else {
            formik.setFieldValue("patient_name", "");
            formik.setFieldValue("citizenId", "");
            formik.setFieldValue("healthId", "");
            formik.setFieldValue("sex", "");
            formik.setFieldValue("gender", "");
            formik.setFieldValue("birthDate", "");
            formik.setFieldValue("address", "");
            formik.setFieldValue("entry_hour", "");
            formik.setFieldValue("symptoms", "");
            formik.setFieldValue("priority", "");
            formik.setFieldValue("state", "");
        }
    }, [dialog]);

    return (
        <FormDialog>
            <DialogTitle>Adicionar um novo Check-In</DialogTitle>
            <DialogContent>
                <form onSubmit={formik.handleSubmit}>
                    <Stack spacing={2}>
                      <TextField
                        error={!!(formik.touched.patient_name && formik.errors.patient_name)}
                        fullWidth
                        helperText={formik.touched.patient_name && formik.errors.patient_name}
                        label="Paciente"
                        name="patient_name"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.patient_name}
                    />
                        <TextField
                        error={!!(formik.touched.citizenId && formik.errors.citizenId)}
                        fullWidth
                        helperText={formik.touched.citizenId && formik.errors.citizenId}
                        label="Nº Cartão de Cidadão"
                        name="citizenId"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.citizenId}
                    />
                        <TextField
                            error={!!(formik.touched.healthId && formik.errors.healthId)}
                            fullWidth
                            helperText={formik.touched.healthId && formik.errors.healthId}
                            label="Nº de Utente"
                            name="healthId"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.healthId}
                        />
                        <TextField
                        error={!!(formik.touched.sex && formik.errors.sex)}
                        fullWidth
                        helperText={formik.touched.sex && formik.errors.sex}
                        label="Sexo"
                        name="sex"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.sex}
                    />
                        <TextField
                        error={!!(formik.touched.gender && formik.errors.gender)}
                        fullWidth
                        helperText={formik.touched.gender && formik.errors.gender}
                        label="Género"
                        name="gender"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.gender}
                    />
                        <TextField
                            error={!!(formik.touched.birthDate && formik.errors.birthDate)}
                            fullWidth
                            helperText={formik.touched.birthDate && formik.errors.birthDate}
                            label="Data de Nascimento"
                            name="birthDate"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.birthDate}
                        />
                        <TextField
                            error={!!(formik.touched.address && formik.errors.address)}
                            fullWidth
                            helperText={formik.touched.address && formik.errors.address}
                            label="Morada"
                            name="address"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.address}
                        />
                        <TextField
                            error={!!(formik.touched.entry_hour && formik.errors.entry_hour)}
                            fullWidth
                            helperText={formik.touched.entry_hour && formik.errors.entry_hour}
                            label="Hora de Entrada"
                            name="entry_hour"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.entry_hour}
                        />
                        <TextField
                            error={!!(formik.touched.symptoms && formik.errors.symptoms)}
                            fullWidth
                            helperText={formik.touched.symptoms && formik.errors.symptoms}
                            label="Sintomas"
                            name="symptoms"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.symptoms}
                        />
                        <TextField
                            error={!!(formik.touched.priority && formik.errors.priority)}
                            fullWidth
                            helperText={formik.touched.priority && formik.errors.priority}
                            label="Prioridade"
                            name="priority"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.priority}
                        />
                        <TextField
                            error={!!(formik.touched.state && formik.errors.state)}
                            fullWidth
                            helperText={formik.touched.state && formik.errors.state}
                            label="Estado"
                            name="state"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.state}
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
