// File: utils/ogImageGenerator.js
export const generateOGImage = async (post) => {
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 630;
  const ctx = canvas.getContext("2d");

  // Background
  ctx.fillStyle = "#f0f2f5";
  ctx.fillRect(0, 0, 1200, 630);

  // Title
  ctx.font = "bold 48px Arial";
  ctx.fillStyle = "#1877f2";
  ctx.fillText(post.title.substring(0, 50), 60, 100);

  // Content snippet
  ctx.font = "24px Arial";
  ctx.fillStyle = "#050505";
  const contentSnippet = post.content.substring(0, 100) + "...";
  ctx.fillText(contentSnippet, 60, 180, 1080);

  // Image
  if (post.image) {
    const img = await createImageBitmap(post.image);
    ctx.drawImage(img, 60, 240, 400, 300);
  }

  // Branding
  ctx.font = "bold 36px Arial";
  ctx.fillStyle = "#1877f2";
  ctx.fillText("MySocialApp", 960, 580);

  // In a real-world scenario, you would upload this image to a server
  // and return a public URL. For this example, we'll use a data URL.
  return canvas.toDataURL("image/png");
};
