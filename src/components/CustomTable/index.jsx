import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import styles from './CustomTable.module.css';

export default function CustomTable({ headers, rows }) {
  return (
    <Table className={styles.table}>
      <TableHead>
        <TableRow>
          {headers.map((header) => (
            <TableCell key={header} className={styles.headerCell}>
              {header}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={index} className={styles.row}>
            {headers.map((header) => (
              <TableCell key={header} className={styles.cell}>
                {row[header]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}