import React from 'react';
import { MdPerson } from 'react-icons/md';

import { Container } from './styles';

export default function Input({ icon , ...props }) {
    return (
        <Container icon={icon}>
            {icon && <MdPerson className="icon" size={25} color="#B3ED7A" />}
            <input {...props} />
        </Container>
    );
}
