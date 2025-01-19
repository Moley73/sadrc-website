const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function generateFavicons() {
  const inputFile = path.join(__dirname, '../public/images/locations/Logo.avif');
  const outputDir = path.join(__dirname, '../public');

  try {
    // First convert AVIF to PNG
    const pngBuffer = await sharp(inputFile)
      .toFormat('png')
      .toBuffer();

    // Generate different sizes
    const sizes = {
      'favicon-16x16.png': 16,
      'favicon-32x32.png': 32,
      'apple-touch-icon.png': 180,
      'android-chrome-192x192.png': 192,
      'android-chrome-512x512.png': 512
    };

    for (const [filename, size] of Object.entries(sizes)) {
      await sharp(pngBuffer)
        .resize(size, size)
        .toFile(path.join(outputDir, filename));
      console.log(`Generated ${filename}`);
    }

    // Generate ICO file
    await sharp(pngBuffer)
      .resize(32, 32)
      .toFile(path.join(outputDir, 'favicon.ico'));
    console.log('Generated favicon.ico');

    console.log('All favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons();
