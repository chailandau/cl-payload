import type { Block } from 'payload/types';

import { sectionId } from '../fields/sectionId';

export const SingleUse: Block = {
    slug: 'singleUseBlock',
    fields: [
        {
            name: 'singleUse',
            type: 'select',
            options: [
                {
                    label: 'About',
                    value: 'about'
                },
                {
                    label: 'Case Study Listing',
                    value: 'case-study-listing'
                },
                {
                    label: 'Toolbox Listing',
                    value: 'toolbox-listing'
                },
                {
                    label: 'Testimonial Listing',
                    value: 'testimonial-listing'
                }
            ]
        },
        ...sectionId
    ]
};
