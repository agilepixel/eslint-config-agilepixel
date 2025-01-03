import Swal from 'sweetalert2';

export const alert = (title: string,
    text: string,
    icon: 'success' | 'error' | 'warning' | 'info' | 'question' = 'success') => {
    return Swal.fire({
        title,
        text,
        icon,
    });
};
