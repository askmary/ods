import styled from "styled-components"
import OdsOne from "./img/pobreza.jpg"
import OdsTwo from "./img/fome.webp"
import OdsTres from "./img/saude.png"
import OdsFour from "./img/educacao.png"

export const Container = styled.section`
  width: 100%;
  background-color: WhiteSmoke;
`
export const Title = styled.h2`
  text-align: center;
  padding: 20px;
`
export const SubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`
export const Sub = styled.div`
  width: 40vw;
  height: 40vh;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 0 2vh 5vw;
`
export const Info = styled.div`
  width: 19vw;
  height: 40vh;
  background-color: Lavender;
  border-radius: 5%;
`
export const Question = styled.h3`
  font-size: 1.9rem;
  width: 70%;
  padding: 15px;
`
export const Main = styled.div`
  width: 19vw;
  height: 40vh;
  position: relative;
`
export const TheCard = styled.div`
  width: 19vw;
  height: 40vh;
  position: absolute;
  transform-style: preserve-3d;
  transition: all 0.5s ease;
  &:hover {
    transform: rotateY(180deg);
  }
`
export const Ods1 = styled.div`
  width: 19vw;
  height: 40vh;
  background-image: url(${OdsOne});
  background-size: cover;
  background-position: center;
  border-radius: 5%;
  position: absolute;
  backface-visibility: hidden;
`
export const Ods2 = styled.div`
  width: 19vw;
  height: 40vh;
  background-image: url(${OdsTwo});
  background-size: cover;
  background-position: center;
  border-radius: 5%;
  position: absolute;
  backface-visibility: hidden;
`
export const Ods3 = styled.div`
  width: 19vw;
  height: 40vh;
  background-image: url(${OdsTres});
  background-size: cover;
  background-position: center;
  border-radius: 5%;
  position: absolute;
  backface-visibility: hidden;
`
export const Ods4 = styled.div`
  width: 19vw;
  height: 40vh;
  background-image: url(${OdsFour});
  background-size: cover;
  background-position: center;
  border-radius: 5%;
  position: absolute;
  backface-visibility: hidden;
`
export const Back = styled.div`
  width: 19vw;
  height: 40vh;
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background-color: SteelBlue;
  border-radius: 5%;
`
export const Text = styled.p`
  padding: 10px;
  color: white;
`
