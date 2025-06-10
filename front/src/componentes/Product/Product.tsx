import styles from './Product.module.scss';
import produto from '../../assets/store/produto.png';
import { BadgeDollarSign } from 'lucide-react';

interface IProductProps {
  props: {
    nome: string;
    preco: number;
  };
}

export default function Product({ props }: IProductProps) {
  const { nome, preco } = props;
  return (
    <div className={styles.product}>
      <img src={produto} alt={nome} />
      <p>{nome}</p>
      <button className={`${styles.purchaseBtn} secondary-btn`}>
        <BadgeDollarSign color="#febb0b" />
        {preco}
      </button>
    </div>
  );
}
