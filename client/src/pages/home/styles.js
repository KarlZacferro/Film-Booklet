import styled from 'styled-components';

export const Container = styled.div`

   h1 {
    text-align: center;
    margin: 4rem 0;
   }

   ul{
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(200px, 1fr));
    columns-gap: 3rem;
    row-gap: 4rem;
   }

   li{
    display: flex;
    flex-direction: columns;
    align-items: center;
   }

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