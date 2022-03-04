import React from 'react';
import { TextField } from '@material-ui/core';
import { useField , Field } from 'formik';

const TextareaWrapper = ({
  name,
  ...otherProps
}) => {
  const [field, mata] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
  };

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }

  return (
    < Field as={TextField} {...configTextfield} />
  );
};

export default TextareaWrapper;