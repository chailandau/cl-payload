import { Field } from 'payload/types';

export const richText = [
    {
        name: 'content',
        type: 'richText',
        admin: {
            leaves: ['bold', 'italic', 'underline', 'strikethrough']
        }
    }
] as Field[];
