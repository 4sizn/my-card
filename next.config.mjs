/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/service/wallets",
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
