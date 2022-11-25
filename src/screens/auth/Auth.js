import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { AccountBox } from "../../components/accountBox";
import Icon from "../../components/assets/BA.png";
import Weirdicon from "../../components/assets/TextSideLogo2.png";


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: #2894d7;
  padding: 0px 0px 50px 0px;
`;

const NavbarContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 0px 50px 0px 50px;
  align-items: center;
  background-color: white;
  margin: 0px 0px 40px 0px;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-itmes: center;
  justify-content: space-around;
  height: 100%;
`;

const GoBack = styled.p`
  color: #2894d7;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
`;

function Auth() {
  let history = useHistory();

  const goBack = () => {
    history.push("/");
  };
  return (
    <AppContainer>
      <NavbarContainer>
        <img
              src={Weirdicon}
              width="200px"
              alt="weirdlogo"
            />
        <GoBack onClick={goBack}>Go back</GoBack>
      </NavbarContainer>
      <Content>
        <img src={Icon} width="470px" height="470px" alt="Blimp-logo" />
        <AccountBox />
      </Content>
    </AppContainer>
  );
}

export default Auth;