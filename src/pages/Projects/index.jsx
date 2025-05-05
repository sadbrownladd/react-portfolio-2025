import styles from './Projects.module.css';
import { usePageTitle } from '../../context/PageTitleContext';

export default function Projects() {
  const { setTitle } = usePageTitle();
  setTitle('Projects');
  return <div className={styles.projects}>Project List Coming Soon</div>;
}