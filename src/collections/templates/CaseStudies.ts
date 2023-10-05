import { CollectionConfig } from 'payload/types';

import { manyCtas } from '../../fields/cta';
import { excerpt } from '../../fields/excerpt';
import { ftImage, image } from '../../fields/image';
import { projectSections } from '../../fields/section';
import { slug } from '../../fields/slug';
import { title, titleAsTitle } from '../../fields/title';
import { requiredField } from '../../utils/functions';
import { generateSlug } from '../../utils/generateSlug';

const CaseStudies: CollectionConfig = {
    slug: 'case-studies',
    admin: {
        ...titleAsTitle,
        defaultColumns: ['title', 'slug', 'updatedAt']
    },
    hooks: {
        beforeChange: [generateSlug()]
    },
    fields: [
        {
            type: 'row',
            fields: [
                ...title,
                ...slug({ description: 'Full slug will be /projects/{slug}' })
            ]
        },

        ...excerpt,
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
        ...projectSections('projectSections'),
        {
            name: 'caseStudies',
            type: 'array',
            admin: {
                components: {
                    RowLabel: ({ data }) => {
                        const fallbackTitle = 'Case Study';

                        return data?.title || fallbackTitle;
                    }
                }
            },
            fields: [
                ...requiredField(title),
                ...requiredField(
                    slug({
                        description:
                            'Full slug will be projects/{parent}/{slug}'
                    })
                ),
                ...excerpt,
                {
                    name: 'intro',
                    type: 'group',
                    admin: {
                        description:
                            'Displays in intro section, above rest of the case study'
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
                ...projectSections('caseStudySections')
            ]
        }
    ]
};

export default CaseStudies;
