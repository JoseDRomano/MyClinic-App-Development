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
      joinDate: "",
      job: "",
      submit: null,
    },
    validationSchema: Yup.object({
      name: Yup.string().max(255).required("O nome é necessário"),
      joinDate: Yup.date().required("É necessária a data de adesão."),
      job: Yup.string().required("É necessária a profissão.")
    }),
    onSubmit: async (values, helpers) => {
      //console.log(values);
      try {
        //add student to db

        const addMessage = `Ao adicionar um novo staff, o mesmo será notificado.`;
        const editMessage = `Tem a certeza que quer editar o staff ${values.name}?`;

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
      formik.setFieldValue("joinDate", dialog.getType().user.joinDate);
      formik.setFieldValue("job", dialog.getType().user.job);
    } else {
      formik.setFieldValue("name", "");
      formik.setFieldValue("joinDate", "");
      formik.setFieldValue("job", "");
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
              error={!!(formik.touched.joinDate && formik.errors.joinDate)}
              fullWidth
              helperText={formik.touched.joinDate && formik.errors.joinDate}
              label="Data de Adesão"
              name="joinDate"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="date"
              value={formik.values.joinDate}
            />
            <TextField
                error={!!(formik.touched.job && formik.errors.job)}
                fullWidth
                helperText={formik.touched.job && formik.errors.job}
                label="Profissão"
                name="job"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.job}
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
