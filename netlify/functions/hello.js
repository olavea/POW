const DEPLOY_PRIME_URL = process.env.DEPLOY_PRIME_URL;

exports.handler = async (event, context) => {
  console.log({ DEPLOY_PRIME_URL });
  return {
    statusCode: 200,
    body: JSON.stringify({ hello: "world", prime_url: DEPLOY_PRIME_URL }),
  };
};
