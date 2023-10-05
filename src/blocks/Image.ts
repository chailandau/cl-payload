import type { Block } from 'payload/types';

import { image } from '../fields/image';
import { sectionId } from '../fields/sectionId';

export const Image: Block = {
    slug: 'imageBlock',
    fields: [...image, ...sectionId]
};
