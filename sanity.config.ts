import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import project from "./sanity/schemas/project-schema";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "7znjmgrr",
  dataset: "production",
  title: "Olas Matlaging",
  apiVersion: "2023-06-05",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
