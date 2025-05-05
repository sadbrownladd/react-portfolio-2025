import styles from './Education.module.css';
import { usePageTitle } from '../../context/PageTitleContext';
import CustomTable from '../../components/CustomTable';

export default function Education() {
  const { setTitle } = usePageTitle();
  setTitle('Education');
  const headers = ['Degree', 'Institution', 'Year'];
  const rows = [
    { Degree: 'BSc Computer Science', Institution: 'XYZ University', Year: '2023' },
    { Degree: 'High School', Institution: 'ABC School', Year: '2019' },
  ];
  return (
    <div className={styles.education}>
      <CustomTable headers={headers} rows={rows} />
    </div>
  );
}