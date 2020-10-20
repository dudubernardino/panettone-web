import React, {useEffect, useState} from 'react';
import api from '../../services/api';

import { Link } from 'react-router-dom';

import { Container, Intro, Catalog, Card } from './styles';

export default function Home() {
  const [panettones, setPanettones] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const datas = await api.get('/panettones');
      setPanettones(datas.data);
    }

    getData();
  }, []);
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
      <Catalog>
        {panettones.map(p => (
          <Card key={p.id}>
            <div className="content">
              <img src={p.imgUrl}/>
              <div className="info">
                <Link to={`/panettone/${p.id}`}>{p.name}</Link>
                <span>R$ {p.price}</span>
                <span>Marca: {p.brand}</span>
              </div>
            </div>
      </Card>
        ))}
      </Catalog>
    </Container>
  );
}
