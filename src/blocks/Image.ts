import type { Block } from 'payload/types';

import { image } from '../fields/image';

export const Image: Block = {
    slug: 'imageBlock',
    fields: [...image]
};
