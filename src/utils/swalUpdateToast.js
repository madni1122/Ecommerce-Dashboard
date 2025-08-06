import Swal from 'sweetalert2';

const showUpdateToast = (title, txt) => {
  Swal.fire({
    title: title,
    text: txt,
    icon: 'success',
  });
};
export default showUpdateToast;
