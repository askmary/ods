import React from "react"
import * as S from "./style"

export default function Main() {
  return (
    <S.Container>
      <S.Title>Como dar os primeiros passos?</S.Title>
      <S.SubContainer>
        <S.Sub>
          <S.Info>
            <S.Question>Como lidar com a pobreza do bairro?</S.Question>
          </S.Info>
          <S.Main>
            <S.TheCard>
              <S.Ods1></S.Ods1>
              <S.Back>
                <S.Text>
                  É necessário investir em políticas públicas eficientes, que
                  proporcionem programas que oferaçam empregos, capacitação
                  profissional e incentivem os empreendedores locais, para assim
                  melhorar e movimentar a economia local.
                </S.Text>
              </S.Back>
            </S.TheCard>
          </S.Main>
        </S.Sub>
        <S.Sub>
          <S.Info>
            <S.Question>Como lidar com a fome no bairro?</S.Question>
          </S.Info>
          <S.Main>
            <S.TheCard>
              <S.Ods2></S.Ods2>
              <S.Back>
                <S.Text>
                  É de suma importância que todos tenham direito à uma
                  alimentação de qualidade, sem medo de não ter o que comer no
                  dia seguinte. É necessário que órgãos públicos locais
                  providenciem a distribuição de cestas básicas e quentinhas,
                  para a população mais carente do bairro.
                </S.Text>
              </S.Back>
            </S.TheCard>
          </S.Main>
        </S.Sub>
        <S.Sub>
          <S.Info>
            <S.Question>Como lidar com a falta de saúde no bairro?</S.Question>
          </S.Info>
          <S.Main>
            <S.TheCard>
              <S.Ods3></S.Ods3>
              <S.Back>
                <S.Text>
                  Para uma vida com maior expectativa e qualidade, é
                  indispensável investimentos na área da saúde. A sáude é algo
                  que deve ser de todos, ou seja, é de domínio público. Por
                  isso, a grande necessidade de investir em bons profissionais
                  da área, em uma insfraestrutura de qualidade e em
                  medicamentos.
                </S.Text>
              </S.Back>
            </S.TheCard>
          </S.Main>
        </S.Sub>
        <S.Sub>
          <S.Info>
            <S.Question>Como lidar com a falta de educação no bairro?</S.Question>
          </S.Info>
          <S.Main>
            <S.TheCard>
              <S.Ods4></S.Ods4>
              <S.Back>
                <S.Text>
                  A educação é algo importantíssimo para a formação de um
                  cidadão do bem, e é a chave para conquistar uma boa qualidade
                  de vida e lazer. investir em uma boa insfraestrutura dos
                  colégios, professores capacitados e apostilas de qualidade são
                  passos para alcançar uma boa educação.
                </S.Text>
              </S.Back>
            </S.TheCard>
          </S.Main>
        </S.Sub>
      </S.SubContainer>
    </S.Container>
  )
}
