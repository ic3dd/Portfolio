/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const repo =
  process.env.GITHUB_REPOSITORY?.split("/")?.[1] ??
  process.env.NEXT_PUBLIC_GITHUB_REPO ??
  "";
const isUserOrOrgPages = repo.endsWith(".github.io");
const basePath = isGithubPages && repo && !isUserOrOrgPages ? `/${repo}` : "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
};

module.exports = nextConfig;
