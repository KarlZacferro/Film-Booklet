import styled from 'styled-components';

export const Container = styled.div`

   h1 {
    text-align: center;
    margin: 4rem 0;
   }


`
//Criar pasta de componts e separar cada um deles
   export const MovieList = styled.ul`
   
   list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(200px, 1fr));
    columns-gap: 3rem;
    row-gap: 4rem;
   
    
   
   ` 

   export const Movie = styled.li`
      display: flex;
      flex-direction: columns;
      align-items: center;
   

      img{
         width: 180px;
         border-radius: 1rem;
         margin-botton: 2rem;
        }
     
        span{
         font-weignt: bold;
         font-size: 120%;
        }
         
        a{
         transition: all 0.3;
         }
     
        a:hover {
         transform: scale(1.1);
        }
   
   `


