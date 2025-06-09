import styles from './Store.module.scss';
import produto from '../../assets/store/produto.png';
import left from '../../assets/store/left-btn.png';
import right from '../../assets/store/right-btn.png';
import back from '../../assets/store/go-back.png';
import image1 from '../../assets/avatar/avatar1.png';
import image2 from '../../assets/avatar/avatar2.png';
import image3 from '../../assets/avatar/avatar3.png';
import image4 from '../../assets/avatar/avatar4.png';
import image5 from '../../assets/avatar/avatar5.png';
import image6 from '../../assets/avatar/avatar6.png';
import logo from './../../assets/QUEST.png';
import { BadgeDollarSign } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const images = [image1, image2, image3, image4, image5, image6];
const produtos = [
  { nome: 'Pack 1 de Temas', preco: 300 },
  { nome: 'Pack 2 de Temas', preco: 400 },
  { nome: 'Pack 3 de Temas', preco: 500 },
  { nome: 'Pack 4 de Temas', preco: 600 },
];

export default function Store() {
  const visibleCount = 3;
  const [startIndex, setStartIndex] = React.useState(0);

  const next = () => {
    setStartIndex((prev) => (prev + 1) % produtos.length);
  };

  const prev = () => {
    setStartIndex((prev) => (prev - 1 + produtos.length) % produtos.length);
  };

  // Build a window of items with wrap-around
  const produtosVisiveis = Array.from({ length: visibleCount }).map((_, i) => {
    const index = (startIndex + i) % produtos.length;
    return produtos[index];
  });

  return (
    <div className={styles.store}>
      <header className={styles.header}>
        <Link to="/home">
          <img src={back} alt="Página Anterior" />
          Voltar
        </Link>
        <img src={logo} alt="Logo" className={styles.logo} />
      </header>
      <section>
        <h1>Loja</h1>
        <div className={styles.playerData}>
          <div className={styles.player}>
            <img
              src={images[0]}
              alt="Avatar do usuário"
              width={140}
              height={140}
            />
            <p>Jacinto Pinto dos Santos</p>
          </div>
          <div className={styles.playerCoins}>
            <p>
              Saldo: <span>1000</span>
              <BadgeDollarSign color="#febb0b" />
            </p>
            <button className="secondary-btn">Comprar Moedas</button>
          </div>
        </div>
      </section>

      <div className={styles.carouselContainer}>
        <button onClick={prev} className={styles.left} aria-label="Anterior">
          <img src={left} alt="Anterior" />
        </button>

        <div className={styles.shelf}>
          {produtosVisiveis.map((item, index) => (
            <div className={styles.product} key={index}>
              <img src={produto} alt={item.nome} />
              <p>{item.nome}</p>
              <button className={`${styles.purchaseBtn} secondary-btn`}>
                <BadgeDollarSign color="#febb0b" />
                {item.preco}
              </button>
            </div>
          ))}
        </div>

        <button onClick={next} className={styles.right} aria-label="Próximo">
          <img src={right} alt="Próximo" />
        </button>
      </div>
    </div>
  );
}
