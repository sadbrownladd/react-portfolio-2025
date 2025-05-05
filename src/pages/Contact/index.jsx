import styles from './Contact.module.css';
import { usePageTitle } from '../../context/PageTitleContext';

export default function Contact() {
  const { setTitle } = usePageTitle();
  setTitle('Contact');
  return <div className={styles.contact}>Contact Info Coming Soon</div>;
}