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

  const skills = [
    { name: 'HTML', progress: 90 },
    { name: 'CSS', progress: 80 },
    { name: 'JavaScript', progress: 75 },
    { name: 'React', progress: 50 },
    { name: 'Python', progress: 75 },
  ];

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
            <div key={index} className={styles.skill}>
              <Typography variant="body1" className={styles.skillName}>
                {skill.name} ({skill.progress}%)
              </Typography>
              <div className={styles.progressBar}>
                <div
                  className={styles.progress}
                  style={{ '--progress': `${skill.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </Grid>
    </Grid>
  );
}