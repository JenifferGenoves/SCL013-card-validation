const validator = {
  isValid: (value) => {
    // acepta solo digitos
    if (/[^0-9-\s]+/.test(value)) return false;

    //Luhn
    let validator = 0,
      bEven = false;
    value = value.replace(/\D/g, "");

    for (var n = value.length - 1; n >= 0; n--) {
      var cDigit = value.charAt(n),
        nDigit = parseInt(cDigit, 10);

      if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

      validator += nDigit;
      bEven = !bEven;
    }
    return validator % 10 == 0;
  },
  maskify: (value) => {
    value = value.replace(/.(?=.{4})/g, "x");
    return value;
  },
};

export default validator;