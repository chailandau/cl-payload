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

export const projectSections = [
    {
        name: 'projectSections',
        type: 'blocks',
        blocks: [Image, Text]
    }
] as Field[];

export const caseStudySections = [
    {
        name: 'caseStudySections',
        type: 'blocks',
        blocks: [Image, Text]
    }
] as Field[];
