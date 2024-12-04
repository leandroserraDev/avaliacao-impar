import { useQuery, useMutation } from '@apollo/client';
import { PAGINATED_QUERY } from '../graphQL/GraphQLService';


export const usePaginatedData = (variables, onCompleted) => {
  return useQuery(PAGINATED_QUERY, {
    variables,
   onCompleted 
  });
};

