import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import ThemeButton from '../components/ThemeButton';
import ProductCard from '../components/ProductCard';
import styled from 'styled-components';
import {mockTheme1Products, mockTheme2Products, mockTheme3Products, mockTheme4Products, mockTheme5Products} from "../data/mockData"
import { useState, useEffect } from 'react';

const Home = () => {
  // 목데이터의 1번테마를 불러올건지 2번테마를 불러올건지 결정하는 state
  // state to choose reading which theme from mockData
  const [products, setProducts] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    //useEffect() : 조건에 의해서 수행되는 함수
    //useEffect() : function to action by case
    //페이지 접속시 상품 리스트를 그려주는 함수
    //function to print item list when user connect the page
    setTimeout(() => {
      setProducts(mockTheme1Products);
    }, 1);
  }, []);

  // 특정 테마버튼이 클릭되면 어떤 테마의 목데이터의 값을 불러올 지 스테이트를 설정해주는 함수
  // function to set state if themeButton is clicked
  const onClickThemeButton = (themeId) => {
    if (themeId === "homeapp") {
      setProducts(mockTheme1Products);
    } else if (themeId === "electro") {
      setProducts(mockTheme2Products);
    }
    else if (themeId === "furniture") {
      setProducts(mockTheme3Products);
    }
    else if (themeId === "fashion") {
      setProducts(mockTheme4Products);
    }
    else if (themeId === "food") {
      setProducts(mockTheme5Products);
    }
  };

  return (
  //홈페이지 ( MainPage )
  <HomeStyled>

    {/* 따순 머그컵 테마버튼 클릭 시 머그 값을 함수로 보냄
        Send property to onClickThemeButton if theme button is clicked */}
      <Navigation />
      <ContentBox>
        <ThemeSection>
          <ThemeButton 
            themeName={"가전제품"} 
            onClick={() => onClickThemeButton("homeapp")}
          />
          <ThemeButton 
            themeName={"전자기기"} 
            onClick={() => onClickThemeButton("electro")}
          />
          <ThemeButton 
            themeName={"가구"} 
            onClick={() => onClickThemeButton("furniture")}
          />
          <ThemeButton 
            themeName={"패션"} 
            onClick={() => onClickThemeButton("fashion")}
          />
          <ThemeButton 
            themeName={"식품"} 
            onClick={() => onClickThemeButton("food")}
          />
        </ThemeSection>

        <ProductSection>
          {/* Product Card 
          mockData list를 화면에 노출시키는 구문
          JS의 map() 문법
          목데이타의 값을 map() 문법을 통해 추출하여 ProductCard 컴포넌트로 전달
          extract mockData by using map() and send it to ProductCard component
          스테이트에 아무 값도 할당되지 않을 경우 div 출력
          if state is undefined, print div tag.
          */}

          {products ? (
            products.map((product) => (
              <ProductCard 
                onClick={() => navigate(`product/${product.id}`)}
                key={product.id}
                name={product.name}
                description={product.description}
                thumbnail={product.thumbnail}
              />
          ))
        ) : (
          <div />
        )}

      </ProductSection>
    </ContentBox>

  </HomeStyled>
  );
};

const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ThemeSection = styled.div`
  display:flex;
  flex-direction : column;
  width: 310px;
  padding-right: 5px;
  margin-top: 40px;
  //margin-right: 50px;
`;

const ProductSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  width: 1500px;
  margin-left: 260px;
  margin-right: 0px;
  padding-right: 0px;
`;

export default Home;