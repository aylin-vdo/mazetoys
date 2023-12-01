import { useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import styles from './option.module.css';
import { RotatingTriangles } from 'react-loader-spinner';
import Title from 'antd/es/typography/Title';

const Loading = () => {

  const navigate = useNavigate()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate(`/game`);
    }, 5000);

    return () => clearTimeout(timeoutId);
  },);

  return (
    <div className={styles.page}>
      <div>
      <Title style={{color: 'white',fontSize: '250%', fontFamily: 'TitleFont', marginRight: '60px'}}>
      Cargando Juego . . .
      </Title>
      </div>
      <div>
        <RotatingTriangles
            height="150"
            width="150"
            colors={['#ffffff', '#ffffff', '#ffffff']}
          />
      </div>
    </div>
  );
};

export default Loading;
