import styles from './Store.module.scss';
import back from '../../assets/store/go-back.png';
import logo from './../../assets/QUEST.png';
import { Link } from 'react-router-dom';
import StoreCard from '../../componentes/StoreCard/StoreCard';
import ProductCarroussel from '../../componentes/ProductCarroussel/ProductCarroussel';

const jogador = {
  nome: 'Jacinto Pinto dos Santos',
  moedas: 1000,
  temas: [1, 2],
};
const produtos = [
  {
    id: 1,
    nome: 'Pack 1 de Temas',
    preco: 300,
    items: ['Tema 1', 'Tema 2', 'Tema 3', 'Tema 4', 'Tema 5'],
  },
  {
    id: 2,
    nome: 'Pack 2 de Temas',
    preco: 400,
    items: ['Tema 1', 'Tema 2', 'Tema 3', 'Tema 4', 'Tema 5'],
  },
  {
    id: 3,
    nome: 'Pack 3 de Temas',
    preco: 500,
    items: ['Tema 1', 'Tema 2', 'Tema 3', 'Tema 4', 'Tema 5'],
  },
  {
    id: 4,
    nome: 'Pack 4 de Temas',
    preco: 600,
    items: ['Tema 1', 'Tema 2', 'Tema 3', 'Tema 4', 'Tema 5'],
  },
];

export default function Store() {
  const productList = produtos.map((prod) => {
    if (jogador.temas.indexOf(prod.id) == -1) {
      return { ...prod, purchased: true };
    } else {
      return { ...prod, purchased: false };
    }
  });
  return (
    <div className={styles.store}>
      <header className={styles.header}>
        <Link to="/playerHub">
          <img src={back} alt="Página Anterior" />
          Voltar
        </Link>
        <img src={logo} alt="Logo" className={styles.logo} />
      </header>

      <section>
        <h1>Loja</h1>
        <StoreCard props={jogador} />
      </section>

      <ProductCarroussel props={productList} />
    </div>
  );
}
