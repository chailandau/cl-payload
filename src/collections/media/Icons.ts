import { CollectionConfig } from 'payload/types';

import { setMaxFileSize } from '../../utils/setMaxFileSize';

export const Icons: CollectionConfig = {
    slug: 'icons',
    admin: {
        defaultColumns: [
            'filename',
            'alt',
            'width',
            'height',
            'filesize',
            'updatedAt'
        ]
    },
    access: {
        read: () => true
    },
    upload: {
        staticURL: '/icons',
        staticDir: 'icons',
        imageSizes: [
            {
                name: 'thumbnail',
                width: 175,
                height: 175,
                position: 'center'
            }
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*']
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true
        },
        ...setMaxFileSize(2621440)
    ]
};
