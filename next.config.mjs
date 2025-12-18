/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/cv',
        destination: 'https://drive.google.com/file/d/1az1bGJ1LwQKUO5gKFHUP78rPd7IUmZ6s/view?usp=sharing',
        permanent: false, // 307 redirect
      },
    ];
  },
};

export default nextConfig;
