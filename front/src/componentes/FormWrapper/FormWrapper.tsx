import styles from './FormWrapper.module.scss';
import logo from './../../assets/QUEST.png';

export default function FormWrapper({ children }) {
  return (
    <div className={styles.wrapper}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <div className={styles.childrenContainer}>{children}</div>
    </div>
  );
}
