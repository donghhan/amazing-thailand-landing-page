const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePahts: [path.join(__dirname, "src/styles")],
  },
};

module.exports = nextConfig;
