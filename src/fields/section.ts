import { Field } from 'payload/types';

import { Hero } from '../blocks/Hero';
import { SingleUse } from '../blocks/SingleUse';

export const sections = [
    {
        name: 'sections',
        type: 'blocks',
        blocks: [Hero, SingleUse]
    }
] as Field[];
