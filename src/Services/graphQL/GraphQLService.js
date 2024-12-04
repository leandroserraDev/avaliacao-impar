import { gql } from '@apollo/client';

// Consultas
export const PAGINATED_QUERY = gql`query Paginated($pageNumber: Int!, $pageSize: Int!) {
    paginated(paginatedParamns: { pageNumber: $pageNumber, pageSize: $pageSize }) {
      success
      result {
        totalCount
        pageNumber
        pageSize
        items {
          id
          name
          base64
        }
      }
      errors
    }
  }
  `;

