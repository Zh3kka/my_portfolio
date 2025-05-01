import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Евгений Селезнев | Портфолио",
    short_name: "ЕС Портфолио",
    description: "Портфолио Евгения Селезнева - Fullstack разработчик",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#9333EA",
    icons: [
      {
        src: "/favicon.png",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
    ],
  }
}
