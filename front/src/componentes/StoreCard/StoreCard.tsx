import { BadgeDollarSign } from 'lucide-react';
import styles from './StoreCard.module.scss';

import image1 from '../../assets/avatar/avatar1.png';
import image2 from '../../assets/avatar/avatar2.png';
import image3 from '../../assets/avatar/avatar3.png';
import image4 from '../../assets/avatar/avatar4.png';
import image5 from '../../assets/avatar/avatar5.png';
import image6 from '../../assets/avatar/avatar6.png';

const images = [image1, image2, image3, image4, image5, image6];
interface IStoreCardProps {
  props: { nome: string; moedas: number };
}

export default function StoreCard({ props }: IStoreCardProps) {
  const { nome, moedas } = props;

  return (
    <div className={styles.playerData}>
      <div className={styles.player}>
        <img src={images[0]} alt="Avatar do usuário" width={140} height={140} />
        <p>{nome}</p>
      </div>
      <div className={styles.playerCoins}>
        <p>
          Saldo: <span>{moedas}</span>
          <BadgeDollarSign color="#febb0b" />
        </p>
        <button className="secondary-btn">Comprar Moedas</button>
      </div>
    </div>
  );
}
