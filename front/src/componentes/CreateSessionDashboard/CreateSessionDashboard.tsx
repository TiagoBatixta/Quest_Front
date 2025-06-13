import styles from './CreateSessionDashboard.module.scss';

import image1 from '../../assets/avatar/avatar1.png';
import image2 from '../../assets/avatar/avatar2.png';
import image3 from '../../assets/avatar/avatar3.png';
import image4 from '../../assets/avatar/avatar4.png';
import image5 from '../../assets/avatar/avatar5.png';
import image6 from '../../assets/avatar/avatar6.png';
import React from 'react';
const images = [image1, image2, image3, image4, image5, image6];

interface CreateSessionDashboardProps {
  createRoom: () => void;
}

export default function CreateSessionDashboard({
  createRoom,
}: CreateSessionDashboardProps) {
  const [escolhidos, setEscolhidos] = React.useState<
    {
      id: number;
      label: string;
    }[]
  >([]);

  const [temas, setTemas] = React.useState([
    { id: 1, label: 'Opção 1' },
    { id: 2, label: 'Opção 2' },
    { id: 3, label: 'Opção 3' },
    { id: 4, label: 'Opção 4' },
    { id: 5, label: 'Opção 5' },
    { id: 6, label: 'Opção 6' },
    { id: 7, label: 'Opção 7' },
    { id: 8, label: 'Opção 8' },
    { id: 9, label: 'Opção 9' },
    { id: 10, label: 'Opção 10' },
    { id: 11, label: 'Opção 11' },
    { id: 12, label: 'Opção 12' },
    { id: 13, label: 'Opção 13' },
  ]);

  function addTheme(item: { id: number; label: string }) {
    setEscolhidos([...escolhidos, item]);
    setTemas(temas.filter((tema) => tema.id !== item.id));
  }

  function removeTheme(item: { id: number; label: string }) {
    setTemas([...temas, item]);
    setEscolhidos(escolhidos.filter((tema) => tema.id !== item.id));
  }

  return (
    <section className={styles.dashboard}>
      <header>
        <h2>Criar Sessão</h2>
      </header>

      <section className={styles.lobby}>
        <form>
          <input id="sessionID" type="text" placeholder="Session ID" />

          <select id="sessionType">
            <option value="publica">Pública</option>
            <option value="particular">Particular</option>
          </select>

          <div className={styles.themeList}>
            <select multiple size={6}>
              {temas.map((item) => (
                <option
                  onClick={() => addTheme(item)}
                  key={item.id}
                  value={item.id}
                >
                  {item.label}
                </option>
              ))}
            </select>
            <select multiple size={6}>
              {escolhidos.map((item) => (
                <option
                  onClick={() => removeTheme(item)}
                  key={item.id}
                  value={item.id}
                >
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </form>

        <ul>
          <li>
            <img
              src={images[1]}
              alt="Avatar do usuário"
              width={80}
              height={80}
            />
            <p>Niwan</p>
            <button className={'secondary-btn'}>Na Sala</button>
          </li>
          <li>
            <img
              src={images[4]}
              alt="Avatar do usuário"
              width={80}
              height={80}
            />
            <p>Joãozinho da 12</p>
            <button className={'secondary-btn'}>Na Sala</button>
          </li>
          <li>
            <img
              src={images[5]}
              alt="Avatar do usuário"
              width={80}
              height={80}
            />
            <p>Pedrinho Matador</p>
            <button className={'secondary-btn'}>Na Sala</button>
          </li>
          <li>
            <img
              src={images[3]}
              alt="Avatar do usuário"
              width={80}
              height={80}
            />
            <p>meMataDeUmaVez</p>
            <button className={'secondary-btn'}>Na Sala</button>
          </li>
        </ul>
      </section>

      <footer className={styles.actions}>
        <button onClick={createRoom} className={'secondary-btn'}>
          Voltar
        </button>
        <button className={'btn'}>Iniciar Partida</button>
      </footer>
    </section>
  );
}
