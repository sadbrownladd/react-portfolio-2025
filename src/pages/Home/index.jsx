import styles from './Home.module.css';
import { usePageTitle } from '../../context/PageTitleContext';

export default function Home() {
  const { setTitle } = usePageTitle();
  setTitle('Home');
  return <div className={styles.home}>Welcome to My Portfolio!</div>;
}