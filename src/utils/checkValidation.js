const checkValidation = (errorsObj) => {
  let isFailed = Object.values(errorsObj).some(
    (errMsgs) => errMsgs.trim() !== ''
  );
  return isFailed ? false : true;
};
export default checkValidation;
