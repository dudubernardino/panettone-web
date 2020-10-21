import React, {useEffect, useState} from 'react';
import api from '../../services/api';

import { Link } from 'react-router-dom';

import { Container, Intro, Catalog, Card } from './styles';

export default function Home() {
  const [panettones, setPanettones] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredPanettones, setFilteredPanettones] = useState([]);
  const length = filteredPanettones.length;

  useEffect(() => {
    const getData = async () => {
      const datas = await api.get('/panettones');
      setPanettones(datas.data);
    }

    getData();
  }, []);

  useEffect(() => {
    setFilteredPanettones(
      panettones.filter( panettone => {
        return panettone.brand.toLowerCase().includes(search.toLowerCase())
      })
    )
  }, [search, panettones]);

  return (
    <Container>
      <Intro>
        <img src="https://exame.com/wp-content/uploads/2016/09/size_960_16_9_processo_de_producao_dos_panetones_e_chocotones_bauducco2.jpg" alt="Panetone"/>
        <div className="text">
          <h2>Panetone</h2>
          <p>O panetone é um alimento tradicional da época de Natal, de origem milanesa, região a noroeste da Itália. Várias lendas tentam explicar a sua origem. O pão doce ou bolo de natal possui fragrância discreta de baunilha e recheio de frutas secas, tais como damasco, laranja, limão, maçã, cidra e a uva passa.</p>
        </div>
      </Intro>

      <h3>Catálogo</h3>
      <input type="text" placeholder="buscar marca..." onChange={e => setSearch(e.target.value)} />
      <Catalog>
        {length > 0 ? filteredPanettones.map(p => (
          <Card key={p.id}>
            <div className="content">
              <Link to={`/panettone/${p.id}`}><img src={p.imgUrl}/></Link>
              <div className="info">
                <Link to={`/panettone/${p.id}`}>{p.name}</Link>
                <span>R$ {p.price}</span>
                <span>Marca: {p.brand}</span>
              </div>
            </div>
          </Card>
        )) : (
          <p>Marca de panetone não disponível.</p>
        )}
      </Catalog>
    </Container>
  );
}
