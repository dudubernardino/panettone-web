import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';

import api from '../../services/api';

import { Container, Card, Table } from './styles';

export default function InfoProduct() {
  const [panettone, setPanettone] = useState([]);
  const [nutriInfo, setNutriInfo] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const datas = await api.get(`/panettones/${id}`);

      setPanettone(datas.data);
      setNutriInfo(datas.data.nutriInfo);
    }

    getData();
  }, []);

  return (
    <div>
      <Container>
        <Card key={panettone.id}>
          <div className="content">
            <img src={panettone.imgUrl}/>
            <div className="info">
              <span>{panettone.name}</span>
              <span>R$ {panettone.price}</span>
              <span>Marca: {panettone.brand}</span>
            </div>
          </div>

          <Table>
            <tr>
              <th>Carboidratos: </th>
              <td>{nutriInfo.carb}</td>
            </tr>
            <tr>
              <th>Proteínas: </th>
              <td>{nutriInfo.protein}</td>
            </tr>
            <tr>
              <th>Gordura Saturada: </th>
              <td>{nutriInfo.saturatedFat}</td>
            </tr>
            <tr>
              <th>Gordura Total: </th>
              <td>{nutriInfo.totalFat}</td>
            </tr>
            <tr>
              <th>Fibras: </th>
              <td>{nutriInfo.fiber}</td>
            </tr>
            <tr>
              <th>Sódio: </th>
              <td>{nutriInfo.sodium}</td>
            </tr>
          </Table>
        </Card>
    </Container>
    </div>
  )
}
