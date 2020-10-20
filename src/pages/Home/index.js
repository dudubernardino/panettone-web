import React, {useEffect, useState} from 'react';
import api from '../../services/api';

import { Link } from 'react-router-dom';

import { Container, Card } from './styles';

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
    </Container>
  );
}
