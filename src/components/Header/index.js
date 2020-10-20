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
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt=""
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
