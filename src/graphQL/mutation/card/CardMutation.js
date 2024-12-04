
import { useMutation, gql } from '@apollo/client';

export const DELETE_MUTATION = gql`
  mutation DeleteItem($id: Int!) {
    delete(id: $id) {
      success
      errors
    }
  }
`;


export const CREATE_CARD = gql`mutation ($file: Upload!, $cardName: String!) {
    createCard(cardCreateDTO: { cardName: $cardName, file: $file }) {
      success
    }
  }
  `;