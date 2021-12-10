import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #000;
  opacity: .3;
`;

const Info = styled.div`
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border: 2px solid teal;
    border-radius: 5px;
    padding: 10px;
    background-color: white;
    color:#000;
    cursor: pointer;
    font-weight: 600;
`;

export default function CategoryItem({ img, title, cat }) {
    return (
        <Container>
          <Link to={`/products/${cat}`}>
            <Image src={img} alt="" />
            <Wrapper>
            </Wrapper>
            <Info>
                <Title>{title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
          </Link>
        </Container>
    )
}
