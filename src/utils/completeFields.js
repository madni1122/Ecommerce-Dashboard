import { toast } from 'react-toastify';

const showValidationToast = (msg) => {
  return toast(`${msg}`, {
    type: 'error',
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
  });
};
export default showValidationToast;
