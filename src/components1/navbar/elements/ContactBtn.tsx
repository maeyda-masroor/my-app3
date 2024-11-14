'use client'
import WhatsappButton from '../../../static/WhatsappButton';

import React from 'react';


const ContactBtn = () => {    
    return (
    <div>
    <WhatsappButton
        phoneNumber="+923197134823" 
        message="Hi, I am interested in hiring you."
    />  
    </div>
    );
}

export default ContactBtn;