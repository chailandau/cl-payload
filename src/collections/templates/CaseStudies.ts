import { CollectionConfig } from 'payload/types';

import { manyCtas } from '../../fields/cta';
import { image } from '../../fields/image';
import { richText } from '../../fields/richText';
import { caseStudySections } from '../../fields/section';
import { slug } from '../../fields/slug';
import { title, titleAsTitle } from '../../fields/title';
import { generateSlug } from '../../utils/generateSlug';

const CaseStudies: CollectionConfig = {
    slug: 'case-studies',
    admin: {
        ...titleAsTitle,
        defaultColumns: ['title', 'updatedAt']
    },
    hooks: {
        beforeChange: [generateSlug()]
    },
    fields: [
        ...title,
        ...slug({ description: 'Full slug will be /{project-slug}/{slug}' }),
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
                ...image,
                ...manyCtas
            ]
        },
        ...caseStudySections
    ]
};

export default CaseStudies;
