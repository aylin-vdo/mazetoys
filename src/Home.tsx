// src/App.tsx
import React, { useState } from 'react';
//import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Button, ConfigProvider, Drawer, FloatButton } from 'antd';
import { HappyProvider } from '@ant-design/happy-work-theme';
import { QuestionCircleOutlined, MailOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom"
import LogoSvg from './assets/icons8-jerry.svg'
import TomatoSvg from './assets/tomato.svg'
import { Typography } from 'antd';
const { Title } = Typography;
//import About from './pages/about';

const Home: React.FC = () => {

    const navigate = useNavigate()

    const onClickHandler = () => {
        setTimeout(() => {
          navigate(`/menu`);
        }, 500); 
      };

    const [open, setOpen] = useState(false);
    
    const showDrawer = () => {
      setOpen(true);
    };
    
    const onClose = () => {
      setOpen(false);
    };

  return (
    <div>
    <ConfigProvider
        theme={{
        token: {
            colorPrimary: '#000000'
        },
      }}  
      >
        <div>
          <Title style={{fontSize: '700%', fontFamily: 'TitleFont', textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)', marginRight: '60px'}}>
          <img src={LogoSvg} alt="Logo" style={{ height: '150px', margin: '0 20px 0 0' }} />
            Maze T
          <img src={TomatoSvg} alt="Logo" style={{ height: '75px', margin: '0 20px 0 0' }} />
            ys   
          </Title>
          <Button className="top-left-button" type="primary" onClick={showDrawer}>
          Suscribete a nuestro boletín!
          <MailOutlined />
          </Button>
        </div>
        <div className='centered'>
            <HappyProvider>
            <Button className="home-button" type="primary" size={'large'} onClick={onClickHandler}>
                Just Maze!
            </Button>
            <Button className="home-button" type="primary" size={'large'} onClick={onClickHandler}>
                Faultless
            </Button>
            <Button className="home-button" type="primary" size={'large'} onClick={onClickHandler}>
                Race The Clock
            </Button>
            </HappyProvider>
        </div>
        <Drawer title="Subscripción de Correo" placement="right" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <FloatButton icon={<QuestionCircleOutlined />} type="primary" style={{ right: 24 }} />
    </ConfigProvider>
    </div>
  );
};

export default Home;
