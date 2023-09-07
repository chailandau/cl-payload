import { Field } from 'payload/types';

import { Hero } from '../blocks/Hero';
import { SingleUse } from '../blocks/SingleUse';
import { Socials } from '../blocks/Socials';

export const sections = [
    {
        name: 'sections',
        type: 'blocks',
        blocks: [Hero, SingleUse, Socials]
    }
] as Field[];
