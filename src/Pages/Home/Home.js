import SubHeader from "../../Components/SubHeader/SubHeader";
import Header from "../../Components/Header/Header";
import Grid from "../../Components/Grid/Grid";
import { IconContext } from "react-icons";
import { UseContext } from '../../Context/Context.js'
import { useEffect, useState } from "react";
import ModalCard from "../../Components/Modals/ModalCard.js";
import { useQuery, gql } from '@apollo/client';
import ModalDeletarCard from "../../Components/Modals/ModalDeletarCard.js";
import { PAGINATED_QUERY } from '../../graphQL/query/card/CardQuery.js';

export default function HomePage() {
    const { query, currentPage, updateCurrentPage, cards, updateCards, reload, triggerReload } = UseContext();
    const[pageSize,setPageSize] = useState(1);


    const { loading, error, data ,fetchMore, refetch} = useQuery(PAGINATED_QUERY, {
      variables: { pageNumber: currentPage, pageSize: 10 },
       fetchPolicy: "cache-and-network",
      onCompleted: (newData) => {
        var arrayCards = newData.paginated.result.items
        
            updateCards((preview) => [...cards, ...arrayCards])
            setPageSize(currentPage === newData.paginated.result.pageSize || newData.paginated.result.pageSize <= 1 ? -1 : newData.paginated.result.pageSize )
         
      }
    })
  

    const AdicionarMais = () => {
      

        updateCurrentPage(currentPage+1);

        // Recarrega a consulta
        fetchMore ({
          variables: { pageNumber: currentPage, pageSize: 10 }});
 

    };
    useEffect(() => {

      if(reload){
        refetch({pageNumber: 1, pageSize:10}).
        then((result) => {
      setPageSize(result.data.paginated.result.totalCount <= 10 ? 1 : result.data.paginated.result.pageSize )
      updateCards(result.data.paginated.result.items)
        });
        updateCurrentPage(currentPage <= 1 ? 1 : currentPage - 1);
        triggerReload()
      }

    }, [reload]);

    if (error) return <pre>{error.message}</pre>



    return (
        
    <div className="flex w-full  flex-col overflowX-hidden  inset-0">
        <Header/>
        <SubHeader/>
        <Grid 
        currentPage={currentPage}
        pageSize={pageSize}
        reloadData={() => AdicionarMais()} cards={cards ? 
          cards.filter(obj => obj.name.toLowerCase().includes(query.toLowerCase())): 
          cards.items}/>
         <ModalCard />
         <ModalDeletarCard />
         

    </div>)
}