import { CollectionConfig } from 'payload/types';

import { manyCtas } from '../../fields/cta';
import { excerpt } from '../../fields/excerpt';
import { ftImage, image } from '../../fields/image';
import {
    internalTitle,
    internalTitleAsTitle
} from '../../fields/internalTitle';
import { richText } from '../../fields/richText';
import { caseStudySections } from '../../fields/section';
import { slug } from '../../fields/slug';
import { title } from '../../fields/title';
import { generateSlug } from '../../utils/generateSlug';

const CaseStudies: CollectionConfig = {
    slug: 'case-studies',
    admin: {
        ...internalTitleAsTitle,
        defaultColumns: ['title', 'featuredImage', 'slug', 'updatedAt']
    },
    hooks: {
        beforeChange: [generateSlug()]
    },
    fields: [
        ...internalTitle,
        ...title,
        ...slug({ description: 'Full slug will be /{project-slug}/{slug}' }),
        ...excerpt,
        ...ftImage,
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
