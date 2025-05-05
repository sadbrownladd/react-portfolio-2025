import { useState } from 'react';
import styles from './Contact.module.css';
import { usePageTitle } from '../../context/PageTitleContext';
import CustomInput from '../../components/CustomInput';

export default function Contact() {
  const { setTitle } = usePageTitle();
  setTitle('Contact');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <div className={styles.contact}>
      <CustomInput label="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <CustomInput label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
    </div>
  );
}