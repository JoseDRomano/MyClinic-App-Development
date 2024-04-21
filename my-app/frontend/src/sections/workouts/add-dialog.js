import React, { useEffect, useState } from "react";
import FormDialog from "../../components/form-dialog";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import { useDialog } from "../../contexts/dialog-context";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Typography, Stack } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useRouter } from "next/router";
import { info } from "../../theme/colors";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const AddWorkoutDialog = () => {
  const dialog = useDialog();
  const formik = useFormik({
    initialValues: {
      name: "",
      duration: "",
      staff: "",
      date: "",
      submit: null,
    },
    validationSchema: Yup.object({
      name: Yup.string().max(255).required("Campo obrigatório"),
      duration: Yup.number()
        .min(1, "Necessário duração: min -> 1")
        .required("Campo obrigatório"),
      staff: Yup.string().max(255).required("Campo obrigatório"),
      date: Yup.date().required("Campo obrigatório")
    }),

    onSubmit: async (values, helpers) => {
      try {
        /*TODO: um dia mais tarde, ou nunca.
         * its a bit little martelada, mas tava sem paciencia e já eram 4h da manhã
         */

        const addMessage = `Ao adicionar uma nova consulta, o profissional ${values.staff} será notificado.`;
        const editMessage = `Tem a certeza que quer editar a consulta ${values.name}?`;

        helpers.setStatus({ success: true });
        helpers.setSubmitting(true);

        if (dialog.getType().type == "editstd") values.id = dialog.getType().user._id;

        const addEditUserAction = () => {
          fetch("/api/check-ins", {
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
          title: dialog.getType().type == "editstd" ? "Editar uma consulta" : "Adicionar uma consulta",
          type: "confirmstd",
          content: dialog.getType().type == "editstd" ? editMessage : addMessage,
          action: addEditUserAction,
        });

      } catch (err) {
        console.log("err", err);
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    if (dialog.getType().type == "editwk") {
      formik.setFieldValue("name", dialog.getType().user.name);
      formik.setFieldValue("duration", dialog.getType().user.duration);
      formik.setFieldValue("staff", dialog.getType().user.staff);
      formik.setFieldValue("date", dialog.getType().user.date);
    } else {
      formik.setFieldValue("name", "");
      formik.setFieldValue("duration", "");
      formik.setFieldValue("staff", "");
      formik.setFieldValue("date", "");
    }
  }, [dialog]);

  return (
    <FormDialog>
      <DialogTitle>Adicionar uma nova Consulta</DialogTitle>
      <DialogContent>
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={2}>
            <TextField
              error={!!(formik.touched.name && formik.errors.name)}
              fullWidth
              helperText={formik.touched.name && formik.errors.name}
              onBlur={formik.handleBlur}
              label="Nome da Consulta"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />

            <TextField
                error={!!(formik.touched.duration && formik.errors.duration)}
                fullWidth
                helperText={formik.touched.duration && formik.errors.duration}
                label="Duração"
                name="duration"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.duration}
            />

            <TextField
              error={!!(formik.touched.staff && formik.errors.staff)}
              fullWidth
              helperText={formik.touched.staff && formik.errors.staff}
              label="Profissional"
              name="staff"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.staff}
            />

            <TextField
              error={!!(formik.touched.date && formik.errors.date)}
              fullWidth
              helperText={formik.touched.date && formik.errors.date}
              label="Data de Consulta"
              name="date"
              type="date"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.date}
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
            onClick={() => {
              console.log("errors", formik.errors);
            }}
          >
            Adicionar Consulta
          </Button>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={dialog.closeDialog}>Cancel</Button>
      </DialogActions>
    </FormDialog>
  );
};
