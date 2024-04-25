const Validation = () => {
  const validateName = (value) => {
    const sanitizedValue = value.replace(/[^A-Za-z ]/g, "");
    console.log(sanitizedValue)
    const error = sanitizedValue !== value;
  console.log(error)
    return { value: sanitizedValue, error: error };
  };

  const validateEmailAddress = (value) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    const isValid = emailRegex.test(value);

    return { value, error: !isValid };
  };
  const validatePassword = (value) => {
    return { value: value, error: !(value.length >= 8) };
  };
  const validateSign_up={
    name:{
        error:false,
        message:"Please Enter Your Name",

    },
    email:{
        error:false,
        message:"Please Enter Your Email",
    },
    password:{
        error:false,
        message:"The password field must be at least 8 characters. ",
    }

  }
  return { validateName, validateEmailAddress, validatePassword,validateSign_up };
};

export default Validation;
