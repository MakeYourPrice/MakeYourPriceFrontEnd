import { configure, extend } from 'vee-validate';

configure({
  classes: {
    valid: 'md-valid',
    invalid: 'md-invalid',
  },
});

extend('required', {
  validate(value) {
    return {
      required: true,
      valid: ['', null, undefined].indexOf(value) === -1,
    };
  },
  computesRequired: true,
  message: 'O {_field_} precisa ser preenchido',
});

extend('max_length', {
  validate(value, { length }) {
    return value.length <= length;
  },
  params: ['length'],
  message: 'O {_field_} pode ter no maximo {length} caracteres',
});
