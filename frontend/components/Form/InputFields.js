import { Fragment } from "react";
import PropTypes from "prop-types";
import { FormInputLabel } from "./Util";

import TextInput from "./TextInput";

const TextInputField = (props) => {
  const { id, placeholder, type, helperText, name, label, required } = props;
  return (
    <Fragment>
      <FormInputLabel forId={id} label={label} required={required} />
      <TextInput
        id={id}
        placeholder={placeholder}
        name={name}
        helperText={helperText}
        type={type}
      />
    </Fragment>
  );
};

TextInputField.defaultProps = {
  required: false,
};

TextInputField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  helperText: PropTypes.string,
  required: PropTypes.bool,
};

import NameInput from "./NameInput";

const NameInputField = (props) => {
  const { ids, label, required, names } = props;
  return (
    <Fragment>
      <FormInputLabel forId={ids.fname} label={label} required={required} />
      <NameInput ids={ids} names={names} />
    </Fragment>
  );
};

NameInputField.propTypes = {
  label: PropTypes.string.isRequired,
  ids: PropTypes.object.isRequired,
  required: PropTypes.bool,
  names: PropTypes.object,
};

import SelectInput from "./SelectInput";

const SelectInputField = (props) => {
  const {
    id,
    placeholder,
    type,
    helperText,
    name,
    label,
    required,
    options,
    freeSolo,
  } = props;

  return (
    <Fragment>
      <FormInputLabel forId={id} label={label} required={required} />
      <SelectInput
        id={id}
        placeholder={placeholder}
        name={name}
        helperText={helperText}
        options={options}
        freeSolo={freeSolo}
      />
    </Fragment>
  );
};

SelectInputField.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  helperText: PropTypes.string,
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  freeSolo: PropTypes.bool,
};

export { TextInputField, NameInputField, SelectInputField };
