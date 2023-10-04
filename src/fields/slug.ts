import { Field } from 'payload/types';

export const slug = ({ description }: { description?: string }) =>
    [
        {
            name: 'slug',
            type: 'text',
            unique: true,
            admin: {
                description
            }
        }
    ] as Field[];
