import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 150
  },
});

class StateRow extends React.Component {

  state = {
    varName: '',
    varType: 'uint'
  }

  render() {
    const {
      classes,
      theme,
      isInput
    } = this.props;
    return ( <
      div >

      <
      FormControl className = {
        classes.formControl
      } >
      <
      InputLabel htmlFor = "name-simple" > Variable Name < /InputLabel> <
      Input id = "varName"
      onChange = {
        event => this.setState({ ...this.state,
          varName: event.target.value
        })
      }
      /> < /
      FormControl >

      <
      FormControl className = {
        classes.formControl
      } >
      <
      InputLabel htmlFor = "protocol" > Variable Type < /InputLabel> <
      Select value = {
        this.state.varType
      }
      onChange = {
        event => this.setState({ ...this.state,
          varType: event.target.value
        })
      }
      inputProps = {
        {
          name: 'Var Type',
          id: 'type',
        }
      } >
      <
      MenuItem value = "uint" > Integer < /MenuItem> <
      MenuItem value = "bool" > Boolean < /MenuItem> <
      MenuItem value = "address" > Address < /MenuItem> <
      MenuItem value = "bytes32" > String < /MenuItem> {!isInput && < MenuItem value = "mapping" > Mapping < /MenuItem>} {!isInput && < MenuItem value = "new" > New Type... < /MenuItem>} < /
      Select > <
      /FormControl>

      <
      /div>

    );
  }
}

StateRow.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  isInput: PropTypes.bool.isRequired
};

export default withStyles(styles, {
  withTheme: true
})(StateRow);
