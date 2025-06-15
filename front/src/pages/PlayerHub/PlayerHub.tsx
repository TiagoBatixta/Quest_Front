import styles from './PlayerHub.module.scss';
import logo from './../../assets/QUEST.png';
import { Link } from 'react-router-dom';
import FormSession from '../../componentes/FormSession/FormSession';
import JoinSessionDashboard from '../../componentes/JoinSessionDashboard/JoinSessionDashboard';

import image1 from '../../assets/avatar/avatar1.png';
import image2 from '../../assets/avatar/avatar2.png';
import image3 from '../../assets/avatar/avatar3.png';
import image4 from '../../assets/avatar/avatar4.png';
import image5 from '../../assets/avatar/avatar5.png';
import image6 from '../../assets/avatar/avatar6.png';
import CreateSessionDashboard from '../../componentes/CreateSessionDashboard/CreateSessionDashboard';
import React from 'react';
const images = [image1, image2, image3, image4, image5, image6];

const jogador = {
  nome: 'Jacinto Pinto dos Santos',
  moedas: 1000,
  temas: [1, 2],
};

export default function PlayerHub() {
  const [createRoom, setCreateRoom] = React.useState(false);

  function createRoomToggle() {
    setCreateRoom((c) => !c);
  }

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
        {!createRoom ? (
          <>
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
            <FormSession />
            <JoinSessionDashboard createRoom={createRoomToggle} />
          </>
        ) : (
          <CreateSessionDashboard createRoom={createRoomToggle} />
        )}
      </section>
    </div>
  );
}
