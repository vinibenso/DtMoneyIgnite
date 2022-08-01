import React, { useContext } from 'react';
import incomeImg from '../../assets/income.svg';
import outComeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";


export function Summary(){
  const {transactions} = useContext(TransactionsContext);

  console.log(transactions)
  return(
   <Container>

    <div>
      <header>
        Entradas
        <img src={incomeImg} alt="Entradas" />
      </header>
      <strong>R$1000,00</strong>
    </div>
    <div>
      <header>
        Saídas
        <img src={outComeImg} alt="Saídas" />
      </header>
      <strong>R$-500,00</strong>
    </div>
    <div className='highlight-background'>
      <header>
        Total
        <img src={totalImg} alt="Total" />
      </header>
      <strong>R$500,00</strong>
    </div>
   </Container>
  )
}