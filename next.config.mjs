/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx"],
  images: {
    localPatterns: [
        {
          pathname: '/assets/**',
          search: '',
        },
      ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        // pathname:
      },
    ],
    // localPatterns: {
    //     pathname:
    // }
  },
};

export default nextConfig;
