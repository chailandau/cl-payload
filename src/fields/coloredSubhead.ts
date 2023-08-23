import { Field } from 'payload/types';

export const coloredSubhead = [
    {
        name: 'coloredSubhead',
        type: 'richText',
        admin: {
            className: 'colored-subhead',
            elements: [],
            leaves: ['bold']
        }
    }
] as Field[];
