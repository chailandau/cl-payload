import { Field } from 'payload/types';

export const richText = [
    {
        name: 'text',
        type: 'richText',
        admin: {
            leaves: ['bold', 'italic'],
            elements: ['ul', 'ol', 'link']
        }
    }
] as Field[];
