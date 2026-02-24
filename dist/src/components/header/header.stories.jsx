import React from 'react';
import { Header, Logo } from '@/src/components';
const meta = {
    title: 'Components/Header',
    component: Header,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};
export default meta;
export const Default = {
    render: () => (<Header left={<Logo variant="blank"/>} middle="Header Title" right="User Menu"/>),
};
