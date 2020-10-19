import React, {useEffect, useState} from 'react';
import api from '../../services/api';

// import { Container } from './styles';

function Home() {
  const [panettones, setPanettones] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const datas = await api.get('/panettones');
      setPanettones(datas.data);
    }

    getData();
  }, []);
  return (
    <div>{panettones.map(p => (
      <div key={p.id}>
        <p>{p.id}</p>
        <p>{p.name}</p>
      </div>

    ))
    }</div>
  );
}

export default Home;
