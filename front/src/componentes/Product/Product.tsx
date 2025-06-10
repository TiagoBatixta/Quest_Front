import styles from './Product.module.scss';
import produto from '../../assets/store/produto.png';
import { BadgeDollarSign, X } from 'lucide-react';
import React from 'react';
import thumbnail from '../../assets/store/produto-thumbnail.png';

interface IProductProps {
  props: {
    nome: string;
    preco: number;
    items: string[];
  };
}

export default function Product({ props }: IProductProps) {
  const { nome, preco, items } = props;
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className={styles.product}>
        <img src={produto} alt={nome} />
        <p>{nome}</p>
        <button
          className={`${styles.purchaseBtn} secondary-btn`}
          onClick={openModal}
        >
          <BadgeDollarSign color="#febb0b" />
          {preco}
        </button>
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
            <h2>{nome}</h2>
            <div className={styles.productPannel}>
              <img src={thumbnail} alt="pack de temas" />
              <ul>
                {items.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>

            <button className={`${styles.comprar} btn`}>
              <p className={'secondary-btn'}>
                <BadgeDollarSign color="#febb0b" />
                {preco}
              </p>
              Comprar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
