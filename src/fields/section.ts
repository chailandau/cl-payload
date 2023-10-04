import { Field } from 'payload/types';

import { Hero } from '../blocks/Hero';
import { Image } from '../blocks/Image';
import { SingleUse } from '../blocks/SingleUse';
import { Socials } from '../blocks/Socials';
import { Text } from '../blocks/Text';

export const pageSections = [
    {
        name: 'pageSections',
        type: 'blocks',
        blocks: [Hero, SingleUse, Socials]
    }
] as Field[];

export const projectSections = (name: string) =>
    [
        {
            name,
            type: 'blocks',
            blocks: [Image, Text]
        }
    ] as Field[];
