import path from "path";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload";

import Pages from "@/app/(payload)/collections/Pages";
import Projects from "@/app/(payload)/collections/Projects";
import Users from "@/app/(payload)/collections/Users";
import Assets from "@/app/(payload)/collections/Assets";
import JournalEntries from "@/app/(payload)/collections/JournalEntries";
import ProjectTags from "@/app/(payload)/collections/tags/ProjectTags";
import MyRoles from "@/app/(payload)/collections/tags/MyRoles";
import JournalEntryTags from "@/app/(payload)/collections/tags/JournalEntryTags";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { fileURLToPath } from "url";
import { s3Storage } from "@payloadcms/storage-s3";
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
import sharp from "sharp";

export default buildConfig({
  editor: lexicalEditor({}),
  collections: [
    Users,
    Projects,
    Pages,
    ProjectTags,
    MyRoles,
    JournalEntries,
    JournalEntryTags,
    Assets,
  ],
  plugins: [
    s3Storage({
      collections: {
        assets: {
          generateFileURL: ({ filename }) => {
            return `${process.env.CLOUDFLARE_BUCKET_PUBLIC_LINK}/${filename}`;
          },
          disableLocalStorage: true,
          disablePayloadAccessControl: true,
        },
      },
      bucket: process.env.CLOUDFLARE_BUCKET_NAME || "",
      config: {
        credentials: {
          accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY_ID || "",
          secretAccessKey: process.env.CLOUDFLARE_SECRET_ACCESS_KEY || "",
        },
        region: process.env.CLOUDFLARE_REGION,
        endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
      },
    }),
  ],
  upload: {
    staticDir: `${process.env.CLOUDFLARE_BUCKET_PUBLIC_LINK}/`,
  },
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  admin: {
    autoLogin: {
      email: "markbriannoya@gmail.com",
      password: "cmsdev",
      prefillOnly: true,
    },
  },
  cors: "*",
  sharp,
});
