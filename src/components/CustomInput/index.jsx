import { TextField } from '@mui/material';
import styles from './CustomInput.module.css';

export default function CustomInput({ label, value, onChange }) {
  return (
    <TextField
      className={styles.input}
      label={label}
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
    />
  );
}