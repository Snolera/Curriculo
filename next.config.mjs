/** @type {import('next').NextConfig} */
const nextConfig = {
  // Formatos modernos reduzem o peso das imagens (LCP)
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
