import { CollectionConfig } from 'payload/types';

import { image } from '../../fields/image';
import { title, titleAsTitle } from '../../fields/title';
import { requiredField } from '../../utils/functions';

const Projects: CollectionConfig = {
    slug: 'projects',
    admin: {
        ...titleAsTitle
    },
    fields: [
        ...requiredField(title),
        {
            name: 'cardInfo',
            type: 'group',
            admin: {
                description: 'Information for case study card'
            },
            fields: [
                {
                    name: 'snippet',
                    type: 'textarea'
                },
                ...image
            ]
        },
        {
            name: 'intro',
            type: 'group',
            admin: {
                description:
                    'Displays in intro section, above rest of case study'
            },
            fields: [
                {
                    name: 'description',
                    type: 'textarea'
                },
                ...image
            ]
        }
    ]
};

export default Projects;
