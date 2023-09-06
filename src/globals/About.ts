import { GlobalConfig } from 'payload/types';

import { coloredSubhead } from '../fields/coloredSubhead';
import { image } from '../fields/image';
import { petImage } from '../fields/petImage';
import { richText } from '../fields/richText';
import { title } from '../fields/title';

const About: GlobalConfig = {
    slug: 'about',
    fields: [
        ...image,
        ...title,
        ...coloredSubhead,
        ...richText,
        {
            name: 'pets',
            type: 'group',
            fields: [
                ...petImage('harvey'),
                ...petImage('athena'),
                ...petImage('warren')
            ]
        }
    ]
};

export default About;
