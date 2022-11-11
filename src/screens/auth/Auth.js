import styled from "styled-components";

import { AccountBox } from "../../components/accountBox";
import Icon from "../../components/assets/BA.png";

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

const Logo = styled.div`

`;

function Auth() {
  return (
    <AppContainer>
        <NavbarContainer>
          <div>Logo</div>
          <div>Go back</div>
        </NavbarContainer>
        <Content>
        <img
              src={Icon}
              width="470px"
              height="470px"
              alt="profile-sample2"
            />
      <AccountBox />
      </Content>
    </AppContainer>
  );
}

export default Auth;
