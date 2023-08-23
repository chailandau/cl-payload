import { Field } from 'payload/types';

export const testimonial = [
    {
        name: 'excerpt',
        type: 'textarea'
    },
    {
        name: 'testimonial',
        type: 'richText',
        required: true,
        admin: {
            elements: [],
            leaves: []
        }
    }
] as Field[];
