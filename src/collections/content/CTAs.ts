import payload from 'payload';
import { Cta } from 'payload/generated-types';
import { CollectionConfig } from 'payload/types';

import { LinkDestinationCell } from '../../custom/LinkDestinationCell';
import { link } from '../../fields/link';

const getPageTitle = async ({ data }: { data: Partial<Cta> }) => {
    if (data?.internalLink) {
        const findPage = await payload.findByID({
            collection: 'pages',
            id: data.internalLink as string
        });

        return `${findPage?.title} page` || 'Undefined';
    } else {
        return data?.externalLink || 'Undefined';
    }
};

const CTAs: CollectionConfig = {
    slug: 'ctas',
    labels: {
        singular: 'CTA',
        plural: 'CTAs'
    },
    admin: {
        useAsTitle: 'fullTitle',
        defaultColumns: ['label', 'linksTo', 'updatedAt']
    },
    fields: [
        ...link(),
        {
            name: 'linksTo',
            type: 'ui',
            admin: {
                components: {
                    Field: () => null,
                    Cell: LinkDestinationCell
                }
            }
        },

        {
            name: 'fullTitle',
            type: 'text',
            admin: {
                hidden: true
            },
            hooks: {
                beforeChange: [
                    ({ siblingData }) => {
                        delete siblingData['fullTitle'];
                    }
                ],
                afterRead: [
                    async ({ data }) =>
                        `${data?.label} ▸ ${data?.linkType} ▸ ${await getPageTitle(
                            { data }
                        )}`
                ]
            }
        }
    ]
};

export default CTAs;
