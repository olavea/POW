const playwright = require("playwright-aws-lambda");

const OFFSET_Y = 0;
const OFFSET_X = 0;
const IMAGE_WIDTH = 1200;
const IMAGE_HEIGHT = 628;

const allowUrl = (url = "") => {
  const allowedDomains = ["usepow.app"];
  const domain = new URL(url).hostname;
  return allowedDomains.includes(domain);
};

const takeScreenshot = async (params) => {
  console.log({ params });

  let {
    url,
    offsetY = OFFSET_Y,
    offsetX = OFFSET_X,
    imageWidth = IMAGE_WIDTH,
    imageHeight = IMAGE_HEIGHT,
  } = params || {};
  offsetY = parseFloat(offsetY);
  offsetX = parseFloat(offsetX);
  imageWidth = parseFloat(imageWidth);
  imageHeight = parseFloat(imageHeight);

  console.log("=== 1");

  const pageHeight = imageHeight + offsetY;
  const pageWidth = imageWidth + offsetX;

  console.log("=== 2");

  const browser = await playwright.launchChromium();

  console.log("=== 3");

  const page = await browser.newPage({
    viewport: { width: pageWidth, height: pageHeight },
    deviceScaleFactor: 2,
  });

  console.log("=== 4");

  await page.goto(url);

  console.log("=== 5");

  const hasImage = await page.isVisible(".gatsby-resp-image-image");
  if (hasImage) {
    await page.waitForLoadState("networkidle");
  }

  console.log("=== 6");

  const buffer = await page.screenshot({
    clip: { x: offsetX, y: offsetY, width: imageWidth, height: imageHeight },
  });

  console.log("=== 7");

  await browser.close();

  console.log("=== 8");

  return buffer;
};

exports.handler = async (event) => {
  let { url } = event.queryStringParameters || {};

  if (!allowUrl(url)) {
    return {
      statusCode: 403,
    };
  } else {
    try {
      const buffer = takeScreenshot(event.queryStringParameters);

      return {
        statusCode: 200,
        headers: {
          "Content-Type": "image/png",
        },
        body: buffer.toString("base64"),
        isBase64Encoded: true,
      };
    } catch (error) {
      console.error(error.message);

      return {
        statusCode: 500,
      };
    }
  }
};
