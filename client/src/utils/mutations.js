import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($input:SavedBookInput) {
    savebook(input:$input) {
      username
      bookCount
      _id  
      savedbooks {
        bookId
        authors
        image
        link
        title
        description
      }
    }
  }


`
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId:Sring!) {
    removeBook(bookId:$bookId) {
      username
      bookCount
      _id  
      savedbooks {
        bookId
        authors
        image
        link
        title
        description
      }
    }
  }


`;

