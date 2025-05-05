import styles from './Education.module.css';
import { usePageTitle } from '../../context/PageTitleContext';

export default function Education() {
  const { setTitle } = usePageTitle();
  setTitle('Education');
  return <div className={styles.education}>Education Details Coming Soon</div>;
}
