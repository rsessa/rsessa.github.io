import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import RecentCards from "./quartz/components/RecentCards"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),        // "Migas de pan" para saber dónde estás (Inicio > Carpeta > Nota)
    Component.ArticleTitle(),       // El título H1 gigante de la nota
    Component.ContentMeta(),        // Tiempo de lectura y fecha (muy bloguero)
    Component.TagList(),            // Las etiquetas de la nota
  ],
  left: [
    Component.PageTitle(),          // El nombre de tu sitio (arriba a la izquierda)
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),             // La barra de búsqueda (esencial)
    Component.Darkmode(),           // El interruptor sol/luna
    Component.Explorer(), // Árbol de carpetas
  ],
    right: [
    // AQUI ESTA EL CAMBIO: Envolvemos el Graph en DesktopOnly
    Component.DesktopOnly(Component.Graph({
      localGraph: {
        drag: true,
        zoom: true,
        depth: 1,
        scale: 1.1,
        repelForce: 0.5,
        centerForce: 0.3,
        linkDistance: 30,
        fontSize: 0.6,
        opacityScale: 1,
      },
      globalGraph: {
        drag: true,
        zoom: true,
        depth: -1,
        scale: 0.9,
        repelForce: 0.5,
        centerForce: 0.3,
        linkDistance: 30,
        fontSize: 0.6,
        opacityScale: 1,
      },
    })),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
  afterBody: [
    RecentCards(), 
  ],

}


// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [], // Dejamos la derecha vacía en las listas para dar más aire
}
