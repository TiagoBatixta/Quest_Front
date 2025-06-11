import styles from './CheckoutMessage.module.scss';
import sucess from '../../assets/store/success.png';
import failure from '../../assets/store/failure.png';

export default function CheckoutMessage({ success }: { success: boolean }) {
  if (success) {
    return (
      <>
        <h2 className={styles.checkoutTitle}>Item Adquirido com Sucesso</h2>
        <p className={styles.checkoutDescription}>Obrigado pela compra!</p>
        <img
          className={styles.checkoutImage}
          src={sucess}
          alt="compra finalizada"
        />
      </>
    );
  } else {
    return (
      <>
        <h2 className={styles.checkoutTitle}>Compra não Finalizada</h2>
        <p className={styles.checkoutDescription}>Saldo Insuficiente</p>
        <img
          className={styles.checkoutImage}
          src={failure}
          alt="saldo insuficiente"
        />
      </>
    );
  }
}
