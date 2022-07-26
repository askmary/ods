import React from "react"
import * as S from "./style"

export default function Header() {
  return (
    <S.Container>
      <S.Title>Santa Cruz: Objetivos de Desenvolvimento Sustentável</S.Title>
      <S.Paragraph>
        Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação
        para acabar com a pobreza, proteger o meio ambiente e o clima e garantir
        que as pessoas, em todos os lugares, possam desfrutar de paz e de
        prosperidade. Estes são os objetivos para os quais as{" "}
        <S.Span>Nações Unidas</S.Span> estão contribuindo a fim de que possamos
        atingir a <S.Span>Agenda 2030</S.Span> no Brasil.
      </S.Paragraph>
      <S.Paragraph>
        <S.Span>Santa Cruz</S.Span> é um bairro que se localiza na{" "}
        <S.Span>Zona Oeste da cidade do Rio de Janeiro.</S.Span>
      </S.Paragraph>
    </S.Container>
  )
}
