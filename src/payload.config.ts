import path from 'path';

import { buildConfig } from 'payload/config';
import { CollectionConfig, GlobalConfig } from 'payload/types';

import Users from './collections/admin/Users';
import Projects from './collections/content/Projects';
import Testimonials from './collections/content/Testimonials';
import Tools from './collections/content/Tools';
import { Icons } from './collections/media/Icons';
import Images from './collections/media/Images';
import Heroes from './collections/sections/Heroes';
import Pages from './collections/templates/Pages';
import CaseStudyListing from './globals/listings/CaseStudyListing';
import TestimonialListing from './globals/listings/TestimonialListing';
import ToolboxListing from './globals/listings/ToolboxListing';
import Nav from './globals/Nav';
import { createGroup } from './utils/createGroups';

export default buildConfig({
    admin: {
        css: path.resolve(__dirname, './styles/main.scss')
    },
    serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
    collections: [
        ...(createGroup([Pages], 'Templates') as CollectionConfig[]),
        ...(createGroup([Heroes], 'Sections') as CollectionConfig[]),
        ...(createGroup(
            [Projects, Testimonials, Tools],
            'Content'
        ) as CollectionConfig[]),
        ...(createGroup([Icons, Images], 'Media') as CollectionConfig[]),
        ...(createGroup([Users], 'Admin') as CollectionConfig[])
    ],
    globals: [
        ...(createGroup([Nav], 'Global') as GlobalConfig[]),
        ...(createGroup(
            [CaseStudyListing, ToolboxListing, TestimonialListing],
            'Listings'
        ) as GlobalConfig[])
    ],
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts')
    },
    graphQL: {
        schemaOutputFile: path.resolve(__dirname, 'payload-schema.graphql')
    },
    cors: [`${process.env.PAYLOAD_PUBLIC_SERVER_URL}`]
});
