import type { Block } from 'payload/types';

import { richText } from '../fields/richText';

export const Text: Block = {
    slug: 'textBlock',
    fields: [
        {
            name: 'heading',
            type: 'text'
        },
        ...richText
    ]
};
