import { Field } from 'payload/types';

export const coloredSubhead = [
    {
        name: 'coloredSubhead',
        type: 'richText',
        admin: {
            className: 'colored-subhead',
            elements: [],
            leaves: ['bold'],
            description:
                'Use text bolding to designate colored subhead text. Styling will be taken care of on the frontend.'
        }
    }
] as Field[];
