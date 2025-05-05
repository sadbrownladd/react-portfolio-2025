import { Grid, Typography, TextField, Button } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import styles from './Contact.module.css';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

export default function Contact() {
  const { setPageTitle } = usePageTitle();
  const [alert, setAlert] = useState('');

  useEffect(() => {
    setPageTitle('Contact');
  }, [setPageTitle]);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values) => {
      setAlert('Message sent successfully!');
      setTimeout(() => setAlert(''), 3000);
      formik.resetForm();
    },
  });

  return (
    <Grid container spacing={2} className={styles.container}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" className={styles.heading}>
          Contact
        </Typography>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Your Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            margin="normal"
            className={styles.input}
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Your Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            margin="normal"
            className={styles.input}
          />
          <TextField
            fullWidth
            id="message"
            name="message"
            label="Your Message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
            margin="normal"
            multiline
            rows={4}
            className={styles.input}
          />
          <Button
            type="submit"
            variant="contained"
            className={styles.submitButton}
            disabled={formik.isSubmitting}
          >
            Send Message
          </Button>
          {alert && <div className={styles.alert}>{alert}</div>}
        </form>
      </Grid>
    </Grid>
  );
}