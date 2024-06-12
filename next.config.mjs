/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/service/cards",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tcg.pokemon.com",
        port: "",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
