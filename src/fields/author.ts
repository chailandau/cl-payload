import { Field } from 'payload/types';

export const author = [
    {
        name: 'author',
        type: 'text'
    },
    {
        name: 'jobTitle',
        type: 'text'
    },
    {
        name: 'company',
        type: 'text'
    }
] as Field[];

export const authorAsTitle = {
    useAsTitle: 'author'
};
