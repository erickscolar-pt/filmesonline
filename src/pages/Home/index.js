
import { useEffect, useState } from 'react';
import './home.css';
import api from '../../serveces/api';
import { Link } from 'react-router-dom';

export default function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(()=>{

    async function loadFilmes(){
      const response = await api.get('r-api/?api=filmes')
      // console.log(response.data);
      setFilmes(response.data);
    }

      loadFilmes();

  }, []);

    return (
      <div className="container">
        <div className="lista-filme">
          {filmes.map((filmes)=>{
            return(
              <article key={filmes.id}>
                <strong> {filmes.nome} </strong>
                <img src={filmes.foto} alt={filmes.nome} />
                <Link to={`/filme/${filmes.id}`}>Acessar</Link>
              </article>
            )
          })}
        </div>
      </div>
    );
  }