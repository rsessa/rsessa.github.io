import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Wiki Wiki",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "rsessa.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter", 
        body: "Inter",
        code: "JetBrains Mono",

      },
colors: {
  lightMode: {
    light: "#f7f9fc",      // Fondo: Blanco muy suavemente azulado (no blanco clínico)
    lightgray: "#e3e8ed",  // Bordes: Gris azulado claro
    gray: "#8b9bb4",       // Meta: Gris intermedio frío
    darkgray: "#3b4554",   // Texto: Gris oscuro con tinte azul (más suave que el negro puro)
    dark: "#202832",       // Títulos: Casi negro, muy sólido
    secondary: "#106ba3",  // ENLACES: El "Azul Topaz" clásico (profundo)
    tertiary: "#2ba6ff",   // Hover: Un azul más brillante al pasar el mouse
    highlight: "rgba(16, 107, 163, 0.15)", // Resaltado azul suave
  },
  darkMode: {
    light: "#20242a",      // Fondo: Azul noche oscuro (típico de Topaz Dark)
    lightgray: "#2e3440",  // Bordes: Gris oscuro
    gray: "#6c7b91",       // Meta: Gris acero
    darkgray: "#d8dee9",   // Texto: Blanco humo (muy legible)
    dark: "#eceff4",       // Títulos: Blanco brillante
    secondary: "#77aadd",  // ENLACES: Azul Topaz pastel/brillante
    tertiary: "#88c0d0",   // Hover: Cyan/Turquesa
    highlight: "rgba(119, 170, 221, 0.15)", // Resaltado
  },
},

    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
