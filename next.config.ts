import rehypePrism from "@mapbox/rehype-prism";
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  outputFileTracingIncludes: {
    "/articles/*": ["./app/articles/**/*.mdx"],
  },
  // Optimize for static generation
  experimental: {
    staticGenerationRetryCount: 3,
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);