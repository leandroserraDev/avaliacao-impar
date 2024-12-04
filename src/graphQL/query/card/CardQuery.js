
import { useQuery, gql } from '@apollo/client';

// Query para listar itens paginados
export const PAGINATED_QUERY = gql`
  query PaginatedItems($pageNumber: Int!, $pageSize: Int!) {
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
        eStatusCar
      }
      }
      errors
    }
  }
`;