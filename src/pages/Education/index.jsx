import { Grid, Typography } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';
import { useEffect } from 'react';
import CustomTable from '../../components/CustomTable';
import styles from './Education.module.css';

export default function Education() {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle('Education');
  }, [setPageTitle]);

  const headers = ['Degree', 'Institution', 'Year'];
  const rows = [
    { Degree: 'Matriculation', Institution: 'Central Model School', Year: '2021' },
    { Degree: 'FSC (Pre Engineering)', Institution: 'Punjab Group Of Colleges', Year: '2021-2023' },
    { Degree: 'BS Computer Science', Institution: 'ITU', Year: '2023-2027' },
  ];

  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Python'];

  return (
    <Grid container spacing={2} className={styles.container}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" className={styles.heading}>
          Education
        </Typography>
        <CustomTable headers={headers} rows={rows} />
        <Typography variant="h5" align="center" className={styles.subHeading}>
          Skills
        </Typography>
        <div className={styles.skills}>
          {skills.map((skill, index) => (
            <span key={index} className={styles.skill}>
              {skill}
            </span>
          ))}
        </div>
      </Grid>
    </Grid>
  );
}