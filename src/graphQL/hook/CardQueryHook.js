import { useQuery, useMutation } from '@apollo/client';
import { PAGINATED_QUERY } from '../query/card/CardQuery.js';

export const usePaginatedCards = (variables,onCompleted) =>{

    return useQuery(PAGINATED_QUERY, {
        variables,
        onCompleted
        
      })
}