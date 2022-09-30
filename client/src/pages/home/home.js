import { Container } from "./styles";

function Home(){
    return(
        <Container>

        <h1>Movies</h1>
        <ul>
            <li>
                <a href="https:/google.com.br"><img src="https://upload.wikimedia.org/wikipedia/pt/0/00/Spider-Man_No_Way_Home_poster.jpg" alt=" Spider man" /></a>
               
               <span>Spider man</span> 
               
            </li>

            <li>
            <img src="https://upload.wikimedia.org/wikipedia/pt/0/00/Spider-Man_No_Way_Home_poster.jpg" alt=" Spider man"/>
               <span>Spider man</span>
            </li>

            <li>
            <img src="https://upload.wikimedia.org/wikipedia/pt/0/00/Spider-Man_No_Way_Home_poster.jpg" alt=" Spider man"/>
               <span>Spider man</span>
            </li>
            
        </ul>
        </Container>
    )
}

export default Home;