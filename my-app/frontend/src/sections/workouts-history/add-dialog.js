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
import Typography, { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { info } from "../../theme/colors";
import { useRouter } from "next/router";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

export const AddWorkoutHistoryDialog = () => {
  const [workoutPlans, setWorkoutPlans] = useState([]);
  const [students, setStudents] = useState([]);
  const router = useRouter();

  const dialog = useDialog();
  useEffect(() => {
    async function fetchMyAPI() {
      let responseStudents = await fetch("/api/equipments", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      responseStudents = await responseStudents.json();
      setStudents(responseStudents);
    }

    fetchMyAPI();
  }, [dialog]);

  const formik = useFormik({
    initialValues: {
      eqName: "",
      maintenance: "",
      availability: "",
    },
    validationSchema: Yup.object().shape({
      eqName: Yup.string().required("Nome do Equipamento é obrigatório"),
      maintenance: Yup.date().required("Data de Manutenção é obrigatório"),
      availability: Yup.boolean().required("Disponibilidade é obrigatório"),
    }),

    onSubmit: async (values, helpers) => {
      try {

        if (dialog.getType().type == "editwkh") values.id = dialog.getType().workout._id;

        helpers.setStatus({ success: true });
        helpers.setSubmitting(true);
        await fetch("/api/equipments", {
          method: dialog.getType().type == "editwkh" ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        helpers.setSubmitting(false);
        helpers.resetForm();
        dialog.closeDialog();
        router.reload();
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    if (dialog.getType().type == "editwkh") {
      formik.setFieldValue("eqName", dialog.getType().workout.eqName);
      formik.setFieldValue("maintenance", dialog.getType().workout.maintenance);
      formik.setFieldValue("availability", dialog.getType().workout.availability);
    } else {
      formik.setFieldValue("eqName", "");
      formik.setFieldValue("maintenance", "");
      formik.setFieldValue("availability", "");
    }
  }, [dialog]);

  return (
    <FormDialog>
      <DialogTitle>Adicionar um novo equipamento</DialogTitle>
      <DialogContent>
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={2}>
            <TextField
              error={!!(formik.touched.eqName && formik.errors.eqName)}
              fullWidth
              helperText={formik.touched.eqName && formik.errors.eqName}
              label="Nome do Equipamento"
              name="eqName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.eqName}
            />
            <TextField
              error={!!(formik.touched.maintenance && formik.errors.maintenance)}
              fullWidth
              helperText={formik.touched.maintenance && formik.errors.maintenance}
              label="Data de Manutenção"
              name="maintenance"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.maintenance}
              type="date"
            />
            <TextField
                error={!!(formik.touched.availability && formik.errors.availability)}
                fullWidth
                helperText={formik.touched.availability && formik.errors.availability}
                label="Disponibilidade"
                name="availability"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.availability}
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
            Adicionar equipamento
          </Button>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={dialog.closeDialog}>Cancel</Button>
      </DialogActions>
    </FormDialog>
  );
};
