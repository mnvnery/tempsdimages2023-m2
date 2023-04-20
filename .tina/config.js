import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "7d4a9b7d-f715-4d7a-8ef1-04a12527c77b", // Get this from tina.io
  token: "2e6e782ba3e0b1fafb0bd3fe73973ee616eb586f", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "/assets/img/",
      publicFolder: "./assets/img",
    },
  },
  schema: {
    collections: [
      {
        label: "Eventos",
        name: "eventos",
        path: "_events",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "image",
            name: "image",
            label: "Imagem",
          },
          {
            type: "string",
            name: "credit_image",
            label: "Crédito Imagem",
          },
          {
            type: "string",
            name: "link_bilhetes",
            label: "Link Bilhetes",
          },
          {
            type: "string",
            name: "title",
            label: "Nome do Espétaculo",
          },
          {
            type: "string",
            name: "artist",
            label: "Nome Artista",
          },
          {
            type: "datetime",
            name: "start_date",
            label: "Data de Inicio",
          },
          {
            type: "string",
            name: "dias",
            label: "Dias",
            list: true,
            ui: {
              component: "tags",
            },
          },
          {
            type: "string",
            name: "dates",
            label: "Data(s) e hora",
          },
          {
            type: "string",
            name: "other_date",
            label: "Outra data",
          },
          {
            type: "string",
            name: "venue",
            label: "Local",
          },
          {
            type: "string",
            name: "age",
            label: "Classificação",
          },
          {
            type: "string",
            name: "duracao",
            label: "Duração",
          },
          {
            type: "string",
            name: "estreia",
            label: "Estreia",
          },
          {
            type: "string",
            name: "synopsis",
            label: "Sinopse",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "tech",
            label: "Ficha Técnica",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "bios",
            label: "Biografias",
            list: true,
            fields: [
              {
                type: "string",
                name: "artist_bio",
                label: "Nome Artista",
              },
              {
                type: "string",
                name: "bio",
                label: "Biografia",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
        ],
      },
      {
        label: "Events",
        name: "events",
        path: "_events_eng",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "image",
            name: "image",
            label: "Imagem",
          },
          {
            type: "string",
            name: "credit_image",
            label: "Crédito Imagem",
          },
          {
            type: "string",
            name: "link_bilhetes",
            label: "Link Bilhetes",
          },
          {
            type: "string",
            name: "title",
            label: "Nome do Espétaculo",
          },
          {
            type: "string",
            name: "artist",
            label: "Nome Artista",
          },
          {
            type: "datetime",
            name: "start_date",
            label: "Data de Inicio",
          },
          {
            type: "string",
            name: "dias",
            label: "Dias",
            list: true,
            ui: {
              component: "tags",
            },
          },
          {
            type: "string",
            name: "dates",
            label: "Data(s) e hora",
          },
          {
            type: "string",
            name: "other_date",
            label: "Outra data",
          },
          {
            type: "string",
            name: "venue",
            label: "Local",
          },
          {
            type: "string",
            name: "age",
            label: "Classificação",
          },
          {
            type: "string",
            name: "duracao",
            label: "Duração",
          },
          {
            type: "string",
            name: "estreia",
            label: "Estreia",
          },
          {
            type: "string",
            name: "synopsis",
            label: "Sinopse",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "tech",
            label: "Ficha Técnica",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "bios",
            label: "Biografias",
            list: true,
            fields: [
              {
                type: "string",
                name: "artist_bio",
                label: "Nome Artista",
              },
              {
                type: "string",
                name: "bio",
                label: "Biografia",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
        ],
      },
    ],
  },
});
