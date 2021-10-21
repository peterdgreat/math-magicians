import PropTypes from 'prop-types';

export default function Button(props) {
  const { value, classes, handleClick } = props;
  const handleclick = () => {
    handleClick(value);
  };
  return (
    <button type="button" className={classes} onClick={handleclick}>
      {value}
    </button>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
