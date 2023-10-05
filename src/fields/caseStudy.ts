import { Field } from 'payload/types';

export const caseStudies = [
    {
        name: 'caseStudies',
        label: 'Case Studies',
        type: 'relationship',
        relationTo: 'case-studies',
        hasMany: true,
        admin: {
            description: 'Select case studies to display in this project.'
        }
    }
] as Field[];
