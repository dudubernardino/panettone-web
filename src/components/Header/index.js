import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

export default function Header() {

  return (
    <Container>
      <Content>
        <nav>
          <img src='https://s2.glbimg.com/fKlFbES5u04vhJSdke-Im7gvw5s=/e.glbimg.com/og/ed/f/original/2015/07/01/panetone-bauducco.png' alt="MyFuel" />
          <Link to="/">INÍCIO</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Eduardo</strong>
              <a>Meu carrinho</a>
            </div>
            <img
              src="https://f088b146830a59b5.cdn.gocache.net/uploads/noticias/2020/03/10/cpsi51o6lwhd.jpg"
              alt=""
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
