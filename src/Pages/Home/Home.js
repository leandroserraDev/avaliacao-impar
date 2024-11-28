import SubHeader from "../../Components/SubHeader/SubHeader";
import Header from "../../Components/Header/Header";
import Grid from "../../Components/Grid/Grid";
import { IconContext } from "react-icons";
import { useTextQuery } from '../../Context/TextQueryContext.js'
import { useEffect } from "react";
import ModalCard from "../../Components/Modals/ModalCard.js";
export default function HomePage() {
    const { query } = useTextQuery();
    const cards = [
        { cardName: "Card 1", status: "Ativo", image: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" },
        { cardName: "Card 2", status: "Inativo", image: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2VtfGVufDB8fDB8fHww" },
        { cardName: "Card 3", status: "Ativo", image: "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" },
        { cardName: "Card 4", status: "Inativo", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBD_rOB19y9Uq-TdyNSfoZB8pTdFY5csJF5A&s" },
        { cardName: "Card 5", status: "Ativo", image: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" },
        { cardName: "Card 6", status: "Ativo", image: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2VtfGVufDB8fDB8fHww" },
        { cardName: "Card 7", status: "Inativo", image: "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" },
        { cardName: "Card 8", status: "Ativo", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBD_rOB19y9Uq-TdyNSfoZB8pTdFY5csJF5A&s" },
        { cardName: "Card 9", status: "Inativo", image: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" },
        { cardName: "Card 10", status: "Ativo", image: "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" }
      ];

            
    return (
        
    <div className="flex w-full  flex-col ">
        <Header/>
        <SubHeader/>
        <Grid cards={query ? cards.filter(obj => obj.cardName.toLowerCase().includes(query.toLowerCase())): cards}/>
         <ModalCard />

    </div>)
}