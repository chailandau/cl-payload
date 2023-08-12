import path from 'path';

import { buildConfig } from 'payload/config';
import { CollectionConfig } from 'payload/types';

import Users from './collections/admin/Users';
import Projects from './collections/content/Projects';
import { Emojis } from './collections/media/Emojis';
import Images from './collections/media/Images';
import Heroes from './collections/sections/Heroes';
import Pages from './collections/templates/Pages';
import { createGroup } from './utils/createGroups';

export default buildConfig({
    admin: {
        css: path.resolve(__dirname, './styles/main.scss')
    },
    serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
    collections: [
        ...(createGroup([Pages], 'Templates') as CollectionConfig[]),
        ...(createGroup([Heroes], 'Sections') as CollectionConfig[]),
        ...(createGroup([Projects], 'Content') as CollectionConfig[]),
        ...(createGroup([Emojis, Images], 'Media') as CollectionConfig[]),
        ...(createGroup([Users], 'Admin') as CollectionConfig[])
    ],
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts')
    },
    graphQL: {
        schemaOutputFile: path.resolve(__dirname, 'payload-schema.graphql')
    },
    cors: [`${process.env.PAYLOAD_PUBLIC_SERVER_URL}`]
});
