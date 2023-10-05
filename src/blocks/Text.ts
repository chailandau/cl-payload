import type { Block } from 'payload/types';

import { richText } from '../fields/richText';
import { sectionId } from '../fields/sectionId';

export const Text: Block = {
    slug: 'textBlock',
    fields: [
        {
            name: 'heading',
            type: 'text'
        },
        ...richText,
        ...sectionId
    ]
};
