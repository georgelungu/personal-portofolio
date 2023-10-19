import { useState } from "react";

// left at 01:06:55

export const Contact = () =>
{

    const formInitialData = 
    {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialData)
    const [buttonText, setButtonText] = useState('Send')
    const [status, setStatus] = useState({})

    return (
        <div>

        </div>
    )
}