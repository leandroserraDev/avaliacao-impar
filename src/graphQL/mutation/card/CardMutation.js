
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

  export const UPDATE_CARD = gql`mutation ($id:Int!, $cardName: String!, $file: Upload!) {
        updateCard(id: $id, cardUpdateGrapQLType: { cardName: $cardName, status: ATIVO, file:$file  }) {
    success
    errors
  }
}
  `;