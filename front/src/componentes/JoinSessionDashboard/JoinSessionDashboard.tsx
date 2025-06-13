import styles from './JoinSessionDashboard.module.scss';

import image1 from '../../assets/avatar/avatar1.png';
import image2 from '../../assets/avatar/avatar2.png';
import image3 from '../../assets/avatar/avatar3.png';
import image4 from '../../assets/avatar/avatar4.png';
import image5 from '../../assets/avatar/avatar5.png';
import image6 from '../../assets/avatar/avatar6.png';
import { Gamepad2 } from 'lucide-react';
const images = [image1, image2, image3, image4, image5, image6];

interface JoinSessionDashboardProps {
  createRoom: () => void;
}

export default function JoinSessionDashboard({
  createRoom,
}: JoinSessionDashboardProps) {
  return (
    <section className={styles.dashboard}>
      <header>
        <Gamepad2 size={48} />
        <h2>Sessões Ativas</h2>
      </header>

      <ul>
        <li>
          <img src={images[1]} alt="Avatar do usuário" width={80} height={80} />
          <p>Niwan</p>
          <button disabled className={`${styles.disabled} secondary-btn`}>
            jogar junto
          </button>
        </li>
        <li>
          <img src={images[4]} alt="Avatar do usuário" width={80} height={80} />
          <p>Joãozinho da 12</p>
          <button className={'secondary-btn'}>jogar junto</button>
        </li>
        <li>
          <img src={images[5]} alt="Avatar do usuário" width={80} height={80} />
          <p>Pedrinho Matador</p>
          <button className={'secondary-btn'}>jogar junto</button>
        </li>
        <li>
          <img src={images[3]} alt="Avatar do usuário" width={80} height={80} />
          <p>meMataDeUmaVez</p>
          <button className={'secondary-btn'}>jogar junto</button>
        </li>
      </ul>

      <footer>
        <button onClick={createRoom} className={'btn'}>
          Criar Sala
        </button>
      </footer>
    </section>
  );
}
