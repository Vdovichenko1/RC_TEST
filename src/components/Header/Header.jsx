import PropTypes from 'prop-types'
import css from './Header.module.css';


export const Header = ({title}) => {
    return <header>
    <div className={css.container}>
      <h2 className="title">{title}</h2>
    </div>
  </header>
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


