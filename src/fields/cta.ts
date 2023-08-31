import { Field } from 'payload/types';

export const cta = [
    {
        name: 'cta',
        label: 'CTA',
        type: 'relationship',
        relationTo: 'ctas'
    }
] as Field[];
