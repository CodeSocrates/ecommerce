import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = () => {
  const navigate = useNavigate();

  return(
    <>
      <NavigationStyled>
        <LogoStyled
        onClick={()=>{navigate(`/`)}}>์ ๋ฏผ๋ชฐ</LogoStyled>
        <SearchBox></SearchBox>
        <BtnSearch>๐๏ธ</BtnSearch>
        <ToLogin
        onClick={()=>{navigate(`/`)}}>๋ก๊ทธ์ธ</ToLogin>
        <ToSignUp
        onClick={()=>{navigate(`/`)}}>ํ์๊ฐ์</ToSignUp>
        <ToMyPage
        onClick={()=>{navigate(`/mypage`)}}>๋ง์ดํ์ด์ง</ToMyPage>
      </NavigationStyled>
    </>
  )
}
const LogoStyled = styled.div`
  font-weight: 700;
  font-size: 70px;
  line-height: 26px;
  padding-left: 40px;
`;
const NavigationStyled = styled.div`
  padding-top: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 60px;
  width: 1500px;
`;
const SearchBox = styled.input`
  width: 50%;
  margin-left: 15px;
  height:35px;
  border-right: none;
`;
const BtnSearch = styled.button`
  height: 42px;
  width: 40px;
  background-color: white;
  border-left: none;
  font-size: 20px;

  margin-right: 30px;
`;
const ToLogin = styled.div`
  padding : 0px 3px 0px 3px;

  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
`;
const ToSignUp = styled.div`
  padding : 0px 3px 0px 3px;
  
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
`;
const ToMyPage = styled.div`
  padding : 0px 3px 0px 3px;
  
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
`;


export default Navigation;