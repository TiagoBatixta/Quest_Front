import styles from './FormSession.module.scss';

export default function FormSession() {
  return (
    <form className={styles.formSession}>
      <label htmlFor="session">
        <input
          type="text"
          name="session"
          id="session"
          placeholder="ID da sessão"
        />
      </label>

      <button className={'secondary-btn'} type="submit">
        Entrar na partida
      </button>
    </form>
  );
}
