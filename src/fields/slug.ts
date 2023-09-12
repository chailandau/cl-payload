import { Field } from 'payload/types';

export const slug = [
    {
        name: 'slug',
        type: 'text',
        unique: true,
        admin: {
            position: 'sidebar',
            description: 'Full slug will be /projects/{slug}'
        }
    }
] as Field[];
