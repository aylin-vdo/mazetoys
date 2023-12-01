import { Button, ConfigProvider, FloatButton } from 'antd';
import { HappyProvider } from '@ant-design/happy-work-theme';
import { QuestionCircleOutlined, CaretLeftFilled, FireOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom"
import LogoSvg from './assets/icons8-jerry.svg'
import TomatoSvg from './assets/tomato.svg'
import { Typography } from 'antd';
import { useState } from 'react';
const { Title } = Typography;

const Menu: React.FC = () => {

    const navigate = useNavigate()

    const onClickHandler = () => navigate(`/`)

    const [option1, setOption1] = useState("none");
    const [option2, setOption2] = useState("none");
    const [option3, setOption3] = useState("none");
    const [hideText, setHideText] = useState("none");
    const [isDisabled, setIsDisabled] = useState(true);
    const [textOption, setTextOption] = useState("Easy!");

    const onClickNavigator = () => {
        setTimeout(() => {
          navigate(`/loading`);
        }, 800); 
      };

    const onClickOp1 = () => {
        if (option1 == "none") {
            setHideText("inline");
            setOption1("inline");
            setOption2("none");
            setOption3("none");
            setTextOption("Easy!!")
            setIsDisabled(false);

        } else {
            setHideText("none");
            setOption1("none");
            setOption2("none");
            setOption3("none");
            setIsDisabled(true);
        }
    };

    const onClickOp2 = () => {
        if (option2 == "none") {
            setHideText("inline");
            setOption2("inline");
            setOption1("none");
            setOption3("none");
            setTextOption("Lets Go!")
            setIsDisabled(false);

        } else {
            setHideText("none");
            setOption2("none");
            setOption1("none");
            setOption3("none");
            setIsDisabled(true);
        }
    };

    const onClickOp3 = () => {
        if (option3 == "none") {
            setHideText("inline");
            setOption1("none");
            setOption2("none");
            setOption3("inline");
            setTextOption("Hard Mode!")
            setIsDisabled(false);

        } else {
            setHideText("none");
            setOption3("none");
            setOption1("none");
            setOption2("none");
            setIsDisabled(true);
        }
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
          <Title className='top-left' style={{fontSize: '250%', fontFamily: 'TitleFont', textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)', marginRight: '60px'}} onClick={onClickHandler}>
            Maze T
          <img src={TomatoSvg} alt="Logo" style={{ height: '25px', margin: '0 0 0 0' }} />
            ys
          </Title>
          <HappyProvider>
            <Button className='top-right-button' type="primary" size={'large'} disabled={isDisabled} onClick={onClickNavigator}>
            Start!
            <FireOutlined />
            </Button>
          </HappyProvider>
        </div>
        <div className='centered'>
            <HappyProvider>
            <Title style={{display: hideText, fontSize: '200%', fontFamily: 'TitleFont', textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)', marginRight: '60px'}} onClick={onClickHandler}>
                <img src={LogoSvg} alt="Logo" style={{ height: '60px', margin: '0 30px 0 0', display: hideText}} />
               {textOption}
            </Title>
            <Button className="menu-button" type="primary" size={'large'} onClick={onClickOp1}>
                Mini Mode
                <CaretLeftFilled style={{display: option1}}/>
            </Button>
            <Button className="menu-button" type="primary" size={'large'} onClick={onClickOp2}>
                Medium Mode
                <CaretLeftFilled style={{display: option2}}/>
            </Button>
            <Button className="menu-button" type="primary" size={'large'} onClick={onClickOp3}>
                Mighty Mode
                <CaretLeftFilled style={{display: option3}}/>
            </Button>
            </HappyProvider>
        </div>
      <FloatButton icon={<QuestionCircleOutlined />} type="primary" style={{ right: 24 }} />
    </ConfigProvider>
    </div>
  );
};

export default Menu;
