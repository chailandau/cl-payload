import { Field } from 'payload/types';

export const project = [
    {
        name: 'project',
        label: 'Project',
        type: 'relationship',
        relationTo: 'projects',
        required: true,
        hasMany: false,
        admin: {
            description: 'Select the project that this case study belongs to.',
            position: 'sidebar'
        }
    }
] as Field[];
