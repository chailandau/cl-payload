import { CollectionConfig } from 'payload/types';

import { coloredSubhead } from '../../fields/coloredSubhead';
import { cta } from '../../fields/cta';
import { heading, headingAsTitle } from '../../fields/heading';
import { icon } from '../../fields/icon';
import { requiredField } from '../../utils/functions';

const Heroes: CollectionConfig = {
    slug: 'heroes',
    labels: {
        singular: 'Hero',
        plural: 'Heroes'
    },
    admin: {
        ...headingAsTitle,
        defaultColumns: ['icon', 'heading', 'updatedAt']
    },
    fields: [
        ...icon,
        ...requiredField(heading('h1')),
        ...coloredSubhead,
        {
            name: 'subhead',
            type: 'textarea',
            admin: {
                description: 'Use for a regular subhead without colored words.'
            }
        },
        {
            type: 'row',
            fields: [
                {
                    name: 'homepage',
                    type: 'checkbox'
                },
                {
                    name: 'doodles',
                    type: 'checkbox'
                }
            ]
        },
        ...cta
    ]
};

export default Heroes;
