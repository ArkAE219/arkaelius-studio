import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ArkAelius Studio",
    short_name: "ArkAelius",
    description: "Build the Future with AI",
    start_url: "/",
    display: "standalone",
    background_color: "#09090B",
    theme_color: "#8B5CF6",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}