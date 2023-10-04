import type { Block } from 'payload/types';

import { sectionId } from '../fields/sectionId';

export const Hero: Block = {
    slug: 'heroBlock',
    fields: [
        {
            name: 'hero',
            type: 'relationship',
            relationTo: 'heroes'
        },
        ...sectionId
    ]
};
