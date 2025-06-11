import styles from './PlayerHub.module.scss';
import logo from './../../assets/QUEST.png';
import { Link } from 'react-router-dom';

import image1 from '../../assets/avatar/avatar1.png';
import image2 from '../../assets/avatar/avatar2.png';
import image3 from '../../assets/avatar/avatar3.png';
import image4 from '../../assets/avatar/avatar4.png';
import image5 from '../../assets/avatar/avatar5.png';
import image6 from '../../assets/avatar/avatar6.png';
import { UsersRound } from 'lucide-react';

const images = [image1, image2, image3, image4, image5, image6];

const jogador = {
  nome: 'Jacinto Pinto dos Santos',
  moedas: 1000,
  temas: [1, 2],
};

export default function PlayerHub() {
  return (
    <div className={styles.playerHub}>
      <header className={styles.header}>
        <p>
          <b>Seja Bem-Vindo</b>, {jogador.nome}
        </p>

        <img src={logo} alt="logo" />
        <span>
          <Link to="/store" className={'secondary-btn'}>
            Acessar a Loja
          </Link>
          <Link to="/" className={'secondary-btn'}>
            Sair
          </Link>
        </span>
      </header>
      <section className={styles.section}>
        <div className={styles.profile}>
          <img
            src={images[0]}
            alt="Avatar do usuário"
            width={250}
            height={250}
          />
          <Link to="/" className={`${styles.profileLink} secondary-btn`}>
            Meu Perfil
          </Link>
        </div>

        <form>
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

        <section className={styles.dashboard}>
          <header>
            <UsersRound size={48} />
            <h2>Partidas</h2>
          </header>

          <ul>
            <li>
              <img
                src={images[1]}
                alt="Avatar do usuário"
                width={80}
                height={80}
              />
              <p>Niwan</p>
              <button disabled className={`${styles.disabled} secondary-btn`}>
                jogar junto
              </button>
            </li>
            <li>
              <img
                src={images[4]}
                alt="Avatar do usuário"
                width={80}
                height={80}
              />
              <p>Joãozinho da 12</p>
              <button className={'secondary-btn'}>jogar junto</button>
            </li>
            <li>
              <img
                src={images[5]}
                alt="Avatar do usuário"
                width={80}
                height={80}
              />
              <p>Pedrinho Matador</p>
              <button className={'secondary-btn'}>jogar junto</button>
            </li>
            <li>
              <img
                src={images[3]}
                alt="Avatar do usuário"
                width={80}
                height={80}
              />
              <p>meMataDeUmaVez</p>
              <button className={'secondary-btn'}>jogar junto</button>
            </li>
          </ul>

          <footer>
            <button className={'btn'} type="submit">
              Criar Sala
            </button>
          </footer>
        </section>
      </section>
    </div>
  );
}
