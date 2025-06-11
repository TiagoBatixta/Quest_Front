import { CircleUser } from 'lucide-react';
import styles from './FormRegister.module.scss';
import image1 from '../../assets/avatar/avatar1.png';
import image2 from '../../assets/avatar/avatar2.png';
import image3 from '../../assets/avatar/avatar3.png';
import image4 from '../../assets/avatar/avatar4.png';
import image5 from '../../assets/avatar/avatar5.png';
import image6 from '../../assets/avatar/avatar6.png';
import React from 'react';

// TODO corrigir o tamanho da imagem de usuário nos assets - Diego

const images = [image1, image2, image3, image4, image5, image6];

export default function FormRegister() {
  const [selected, setSelected] = React.useState<null | number>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleSelect = (index: number) => {
    setSelected(index);
    setIsModalOpen(false);
  };

  return (
    <div className={'innerWrapper'}>
      <h1>Criar conta</h1>
      <form className={styles.form}>
        {selected === null ? (
          <CircleUser size={140} strokeWidth={1} />
        ) : (
          <img
            src={images[selected]}
            alt={`Avatar ${selected + 1}`}
            width={140}
            height={140}
            className={styles.avatarPreview}
          />
        )}
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className={`${styles.selectAvatar} secondary-btn`}
        >
          Selecionar Avatar
        </button>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Digite seu nome"
          />
        </label>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu e-mail"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Digite sua senha"
          />
        </label>
        <button className={'btn'} type="submit">
          Cadastrar
        </button>
      </form>

      {isModalOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Selecione um avatar</h2>
            <div className={styles.imageGrid}>
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => handleSelect(index)}
                  className={styles.imageButton}
                >
                  <img
                    src={img}
                    width={140}
                    height={140}
                    alt={`Avatar ${index + 1}`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
