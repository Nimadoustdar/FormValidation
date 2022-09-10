import { toast } from 'react-toastify';

export const notify = (massage, type) => {
    if (type === 'success') {
        toast.success(massage)
    } else {
        toast.error(massage)
    }
};
