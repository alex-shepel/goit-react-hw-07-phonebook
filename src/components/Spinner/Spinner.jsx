import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import PropTypes from 'prop-types';

const Spinner = ({ color = '#888' }) => {
  return (
    <Loader type="Oval" color={color} height={40} width={40} timeout={0} />
  );
};

Spinner.propTypes = {
  color: PropTypes.string,
};

export default Spinner;
