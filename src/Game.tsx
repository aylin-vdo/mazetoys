import { Button, ConfigProvider, FloatButton } from 'antd';
//import { HappyProvider } from '@ant-design/happy-work-theme';
import { QuestionCircleOutlined, FireOutlined, RollbackOutlined, HistoryOutlined, MenuOutlined, HomeOutlined} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { HappyProvider } from '@ant-design/happy-work-theme';
import styles from './option.module.css';
import TomatoSvg from './assets/tomato.svg'
import MazeSvg from './assets/mazegame.svg'
import Title from 'antd/es/typography/Title';

const Game: React.FC = () => {
 
    const navigate = useNavigate()

    const onClickHandler = () => navigate(`/`)
  
    const onClickNavigator = () => navigate(`/menu`)
    // 3 buttons new game, reset game, menu

  return (
    <div>
    <ConfigProvider
        theme={{
        token: {
            colorPrimary: '#000000'
        },
      }}  
      >
        <div className={styles.game}>
        <Title className='top-left' style={{fontSize: '250%', fontFamily: 'TitleFont', textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)', marginRight: '60px'}} onClick={onClickHandler}>
            Maze T
          <img src={TomatoSvg} alt="Logo" style={{ height: '25px', margin: '0 0 0 0' }} />
            ys
        </Title>
        <Title className='top-left' style={{fontSize: '250%', fontFamily: 'TitleFont', textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)', marginRight: '60px', marginTop: '300px', marginLeft: '70px'}}>
        Start!!!
        </Title>
        <Title className='top-left' style={{fontSize: '250%', fontFamily: 'TitleFont', textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)', marginRight: '60px'}}>
        <img src={MazeSvg} alt="Juego" style={{ height: '600px', marginLeft: '70%', marginTop: '10%' }} />
        </Title>
        <HappyProvider>
        <Button className='top-right-button' type="primary" size={'large'} style={{marginTop: '20px'}}>
            New Game
            <FireOutlined />
        </Button>
        <Button className='top-right-button' type="primary" size={'large'} style={{marginTop: '80px'}}>
            Reset
            <RollbackOutlined />
        </Button>
        <Button className='top-right-button' type="primary" size={'large'} style={{marginTop: '140px'}}>
            Check Moves
            <HistoryOutlined />
        </Button>
        <Button className='top-right-button' type="primary" size={'large'} style={{marginTop: '200px'}} onClick={onClickNavigator}>
            Menu
            <MenuOutlined />
        </Button>
        <Button className='top-right-button' type="primary" size={'large'} style={{marginTop: '260px'}} onClick={onClickHandler}>
            Home
            <HomeOutlined />
        </Button>
        </HappyProvider>
        </div>
      <FloatButton icon={<QuestionCircleOutlined />} type="primary" style={{ right: 24 }} />
    </ConfigProvider>
    </div>
  );
};

export default Game;
