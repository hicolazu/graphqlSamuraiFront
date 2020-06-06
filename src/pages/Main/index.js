import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { Container } from './styles';

function Main() {
  const [isbn, setIsbn] = useState();
  const [result, setResult] = useState();

  function buscarLivro(value) {
    let query;
    if (value) {
      query = gql`
        query getBook($isbn: String!) {
          book(isbn: $isbn) {
            isbn
            name
            price
          }
        }
      `;
    } else {
      query = gql`
        query getBooks {
          books {
            isbn
            name
            price
          }
        }
      `;
    }

    const { loading, error, data } = useQuery(query, { variables: { value } });

    if (loading) setResult('Carregando...');
    if (error) setResult('Erro ao recuperar os dados do servidor!');

    if (data && !data.book.isbn)
      setResult(
        'Desculpe, este livro não foi encontrado em nossa base de dados!'
      );

    if (data) setResult(`ISBN: ${data.book.isbn}  Nome: ${data.book.name}`);
  }

  return (
    <Container>
      <h1>Bem Vindo ao Buscador de Livros com GraphQl!</h1>
      <h2> Busque um livro pelo isbn: </h2>
      <input
        type="text"
        placeholder="Ex: 12345"
        onChange={value => setIsbn(value)}
      />
      <button type="submit" onClick={buscarLivro(isbn)}>
        {' '}
        Buscar{' '}
      </button>
      <button type="submit" onClick={buscarLivro()}>
        {' '}
        Buscar todos os livros{' '}
      </button>
      <h3> {result} </h3>
    </Container>
  );
}

export default Main;
