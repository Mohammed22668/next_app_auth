// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["images.unsplash.com"],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // Match any image from images.unsplash.com
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**", // Matches any path
      },
    ],
  },
};

export default nextConfig;
