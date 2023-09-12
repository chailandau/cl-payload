import { CollectionConfig } from 'payload/types';

import { image } from '../../fields/image';
import { project } from '../../fields/project';
import { richText } from '../../fields/richText';
import { caseStudySections } from '../../fields/section';
import { title, titleAsTitle } from '../../fields/title';

const CaseStudies: CollectionConfig = {
    slug: 'case-studies',
    admin: {
        ...titleAsTitle,
        defaultColumns: ['title', 'project', 'updatedAt']
    },

    fields: [
        ...title,
        ...project,
        {
            name: 'intro',
            type: 'group',
            admin: {
                description:
                    'Displays in intro section, above rest of case study'
            },
            fields: [
                {
                    name: 'heading',
                    type: 'text'
                },
                ...richText,
                ...image
            ]
        },
        ...caseStudySections
    ]
};

export default CaseStudies;
