import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionsInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransactions: (Transactions: TransactionsInput) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData
  );


export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
   api.get('transactions')
   .then(response => setTransactions(response.data.transactions))
  }, []);

  function createTransactions(transaction: TransactionsInput) {
    api.post('/transactions', transactions)
    }
  

  return (
    <TransactionsContext.Provider value={{ transactions, createTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}