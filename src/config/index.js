const corsConfig = {
  origin: [process.env.FRONTEND_URL, process.env.FRONTEND_DEVELOPMENT_URL],
  credentials: true,
};

const bodyParserConfig = {
  verify: (req, res, buf) => {
    req.rawBody = buf;
  },
};

const cloudinaryConfig = {
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
};

module.exports = { corsConfig, bodyParserConfig, cloudinaryConfig };
