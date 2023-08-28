import { Field } from 'payload/types';

import { Hero } from '../blocks/Hero';

export const sections = [
    {
        name: 'sections',
        type: 'blocks',
        blocks: [Hero]
    }
] as Field[];
