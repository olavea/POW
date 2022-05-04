const DEPLOY_PRIME_URL = process.env.DEPLOY_PRIME_URL;
const URL = process.env.URL;
const DEPLOY_URL = process.env.DEPLOY_URL;

exports.handler = async (event, context) => {
  console.log({ DEPLOY_PRIME_URL });
  console.log({ URL });
  console.log({ DEPLOY_URL });
  return {
    statusCode: 200,
    body: JSON.stringify({
      hello: "world",
      prime_url: DEPLOY_PRIME_URL,
      deploy_url: DEPLOY_URL,
      url: URL,
    }),
  };
};
