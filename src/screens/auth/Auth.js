import styled from "styled-components";
import { AccountBox } from "../../components/accountBox";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Auth() {
  return (
    <AppContainer>
      <AccountBox />
    </AppContainer>
  );
}

export default Auth;
