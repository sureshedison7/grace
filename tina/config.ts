import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/blog",
        fields: [
          {
            name: "author",
            label: "Author",
            type: "string"
          },
          {
            name: 'pubDatetime',
            label: "Publication Date",
            type: "datetime"
          },
          {
            name: 'modDatetime',
            label: "Modification Date",
            type: "datetime"
          },
          {
            name: 'title',
            label: "Title",
            type: "string"
          },
          {
            name: 'artist',
            label: "Artist",
            type: "string"
          },
          {
            name: 'album',
            label: "Album",
            type: "string"
          },
          {
            name: "slug",
            label: "Slug",
            type: "string"
          },
          {
            name: "featured",
            label: "Featured",
            type: "boolean"
          },
          {
            name: "draft",
            label: "Draft",
            type: "boolean"
          },
          {
            name: "description",
            label: "Description",
            type: "string"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
