import { FC } from 'react';
import { MainFooter } from './styles';

const Footer: FC = () => (
  <MainFooter>
    <span>Double click to edit a todo</span>
    <span>
      Templated by <a href="#SindreSorthus">Sindre Sorthus</a>
    </span>
    <span>
      Created by <a href="#ChauTran">Chau Tran</a>
    </span>
    <span>
      Utilized <a href="#XState">XState</a> by <span>David K.</span>
    </span>
    <span>
      Part of <a href="#TodoMVC">TodoMVC</a>
    </span>
  </MainFooter>
);

export default Footer;
