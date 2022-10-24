import PropTypes from 'prop-types'
import css from './Header.module.css';
import { Container } from "../Container/Container";


export const Header = ({title}) => {
    return <header>
    <Container>
      <h2 className="title">{title}</h2>
    </Container>
  </header>
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


