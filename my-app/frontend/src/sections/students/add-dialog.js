import React, { useEffect } from "react";
import FormDialog from "../../components/form-dialog";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDialog } from "../../contexts/dialog-context";
import { useFormik } from "formik";
import * as Yup from "yup";
import Typography, { Stack } from "@mui/material";
import { useRouter } from "next/router";
import { info } from "../../theme/colors";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { ConfirmDialog } from "./confirm-dialog";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  healthId: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export const AddUserDialog = () => {
  const dialog = useDialog();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      citizenId: "",
      healthId: "",
      sex: "",
      gender: "",
      birthDate: "",
      address: "",
      submit: null,
    },
    validationSchema: Yup.object({
      name: Yup.string().max(255).required("O nome é necessário"),
      email: Yup.string()
        .email("O email tem que ser válido")
        .max(255)
        .required("O email é necessário"),
      phoneNumber: Yup.string().max(255).required("O número de telefone é necessário."),
      citizenId: Yup.number().required("O nº do cartão de cidadão é necessário."),
      healthId: Yup.number().required("O nº de utente é necessário."),
      sex: Yup.string().required("O sexo é necessário."),
      gender: Yup.string().required("O género é necessário."),
      birthDate: Yup.date().required("A data de nascimento é necessária."),
      address: Yup.string().required("A morada é necessária.")
    }),
    onSubmit: async (values, helpers) => {
      //console.log(values);
      try {
        //add student to db

        const addMessage = `Ao adicionar um novo paciente, irá ser enviado para o email ${values.email} uma palavra-passe gerada para o mesmo aceder ao website.`;
        const editMessage = `Tem a certeza que quer editar o paciente ${values.email}?`;

        helpers.setStatus({ success: true });
        helpers.setSubmitting(true);

        if (dialog.getType().type == "editstd") values.id = dialog.getType().user._id;

        const addEditUserAction = () => {
          fetch("/api/patients", {
            method: dialog.getType().type == "editstd" ? "PUT" : "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });
          
        helpers.setSubmitting(false);
        helpers.resetForm();
        dialog.closeDialog();

        router.reload();
        };

        dialog.setDialogContent({
          title: dialog.getType().type == "editstd" ? "Editar um paciente" : "Adicionar um paciente",
          type: "confirmstd",
          content: dialog.getType().type == "editstd" ? editMessage : addMessage,
          action: addEditUserAction,
        });

      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    if (dialog.getType().type == "editstd") {
      formik.setFieldValue("name", dialog.getType().user.name);
      formik.setFieldValue("email", dialog.getType().user.email);
      formik.setFieldValue("phoneNumber", dialog.getType().user.phoneNumber);
      formik.setFieldValue("citizenId", dialog.getType().user.citizenId);
      formik.setFieldValue("healthId", dialog.getType().user.healthId);
      formik.setFieldValue("sex", dialog.getType().user.sex);
      formik.setFieldValue("gender", dialog.getType().user.gender);
      formik.setFieldValue("birthDate", dialog.getType().user.birthDate);
      formik.setFieldValue("address", dialog.getType().user.address);
    } else {
      formik.setFieldValue("name", "");
      formik.setFieldValue("email", "");
      formik.setFieldValue("phoneNumber", "");
      formik.setFieldValue("citizenId", "");
      formik.setFieldValue("healthId", "");
      formik.setFieldValue("sex", "");
      formik.setFieldValue("gender", "");
      formik.setFieldValue("birthDate", "");
      formik.setFieldValue("address", "");
    }
  }, [dialog]);

  return (
    <FormDialog>
      <DialogTitle>{dialog.getType().title}</DialogTitle>
      <DialogContent>
        <form noValidate onSubmit={formik.handleSubmit}>
          <Stack spacing={2}>
            <TextField
              error={!!(formik.touched.name && formik.errors.name)}
              fullWidth
              helperText={formik.touched.name && formik.errors.name}
              label="Nome"
              name="name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
            />
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
              error={!!(formik.touched.phoneNumber && formik.errors.phoneNumber)}
              fullWidth
              helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
              label="Nº de Telefone"
              name="phoneNumber"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="number"
              value={formik.values.phoneNumber}
            />
            <TextField
              error={!!(formik.touched.citizenId && formik.errors.citizenId)}
              fullWidth
              helperText={formik.touched.citizenId && formik.errors.citizenId}
              label="Nº Cartão de Cidadão"
              name="citizenId"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="number"
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
              type="number"
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
                label="Ano de Nascimento"
                name="birthDate"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="date"
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
          </Stack>
          {formik.errors.submit && (
            <Typography color="error" sx={{ mt: 3, backgroundColor: info.main }} variant="body2">
              {formik.errors.submit}
            </Typography>
          )}
          <Button
            fullWidth
            size="large"
            sx={{ mt: 3, backgroundColor: info.main, "&:hover": { backgroundColor: info.dark } }}
            type="submit"
            variant="contained"
          >
            {dialog.getType().type == "editstd" ? "Editar" : "Adicionar"} paciente
          </Button>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={dialog.closeDialog}>Cancel</Button>
      </DialogActions>
    </FormDialog>
  );
};
