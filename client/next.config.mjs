/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // remotePatterns: [
        //   {
        //     protocol: 'https',
        //     hostname: 'flowbite.s3.amazonaws.com',
        //     port: '',
        //     pathname: '/blocks/marketing-ui/avatars/bonnie-green.png**',

        //   },
        // ],
        formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },{
        hostname: "flowbite.s3.amazonaws.com",
      },
    ],
      },
};

export default nextConfig;
