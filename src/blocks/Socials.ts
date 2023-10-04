import type { Block } from 'payload/types';

import { sectionId } from '../fields/sectionId';

export const Socials: Block = {
    slug: 'socialsBlock',
    fields: [
        {
            name: 'socials',
            type: 'relationship',
            relationTo: 'socials',
            hasMany: true
        },
        ...sectionId
    ]
};
