import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import styles from './CustomTable.module.css';

export default function CustomTable({ headers, rows }) {
  return (
    <Table className={styles.table}>
      <TableHead>
        <TableRow>
          {headers.map((header) => (
            <TableCell key={header}>{header}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={index}>
            {headers.map((header) => (
              <TableCell key={header}>{row[header]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}