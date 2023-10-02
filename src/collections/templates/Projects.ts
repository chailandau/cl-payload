import { CollectionConfig } from 'payload/types';

import { caseStudies } from '../../fields/caseStudy';
import { manyCtas } from '../../fields/cta';
import { ftImage, image } from '../../fields/image';
import { projectSections } from '../../fields/section';
import { slug } from '../../fields/slug';
import { title, titleAsTitle } from '../../fields/title';
import { generateSlug } from '../../utils/generateSlug';

const Projects: CollectionConfig = {
    slug: 'projects',
    admin: {
        ...titleAsTitle,
        defaultColumns: ['title', 'slug', 'updatedAt']
    },
    hooks: {
        beforeChange: [generateSlug()]
    },
    fields: [
        ...title,
        ...slug({ description: 'Full slug will be /projects/{slug}' }),
        ...ftImage,
        {
            name: 'intro',
            type: 'group',
            admin: {
                description:
                    'Displays in intro section, above rest of the project'
            },
            fields: [
                {
                    name: 'description',
                    type: 'textarea'
                },
                ...image,
                ...manyCtas
            ]
        },
        ...projectSections,
        ...caseStudies
    ]
};

export default Projects;
