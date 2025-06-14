import React from 'react';
import { BadgeDollarSign, X } from 'lucide-react';
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
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedAmount, setSelectedAmount] = React.useState<number | null>(
    null,
  );
  const [selectedPaymentMethod, setSelectedPaymentMethod] = React.useState<
    string | null
  >(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className={styles.playerData}>
        <div className={styles.player}>
          <img
            src={images[0]}
            alt="Avatar do usuário"
            width={140}
            height={140}
          />
          <p>{nome}</p>
        </div>
        <div className={styles.playerCoins}>
          <p>
            Saldo: <span>{moedas}</span>
            <BadgeDollarSign color="#febb0b" />
          </p>
          <button className="secondary-btn" onClick={openModal}>
            Comprar Moedas
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeModal}>
              <X size={24} />
            </button>
            <h2>Pagamento</h2>
            <p>Selecione a quantidade de Moedas:</p>
            <div>
              {[100, 500, 1000, 2000].map((amount) => (
                <button
                  key={amount}
                  className={`secondary-btn ${
                    selectedAmount === amount ? styles.selected : ''
                  }`}
                  onClick={() => setSelectedAmount(amount)}
                >
                  <BadgeDollarSign />
                  {amount}
                </button>
              ))}
            </div>
            <p>Selecione a forma de pagamento:</p>
            <div className={styles.paymentOptions}>
              {['Cartão de Crédito', 'Cartão de Débito', 'PIX', 'Boleto'].map(
                (method) => (
                  <button
                    key={method}
                    className={`${
                      selectedPaymentMethod === method ? styles.selected : ''
                    }`}
                    onClick={() => setSelectedPaymentMethod(method)}
                  >
                    {method}
                  </button>
                ),
              )}
            </div>

            <button className={'btn'}>Comprar</button>
          </div>
        </div>
      )}
    </>
  );
}
