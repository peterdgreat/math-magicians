import PropTypes from 'prop-types';

export default function Button(props) {
  const { value, classes } = props;
  const handleClick = () => {
    const { handleClick, value } = props;
    handleClick(value);
  };
  return (
    <button type="button" className={classes} onClick={handleClick}>
      {value}
    </button>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
