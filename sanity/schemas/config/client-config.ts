const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

const clientConfig = {
  projectId,
  dataset,
  apiVersion,
};

export default clientConfig;
