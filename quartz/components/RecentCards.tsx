import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

export default (() => {
  const RecentCards: QuartzComponent = ({ allFiles, fileData, displayClass }: QuartzComponentProps) => {
    
    // 1. Validar que estamos en el index
    if (fileData.slug !== "index") {
      return null
    }

    // 2. Filtrar notas (no index, no ocultas)
    const pages = allFiles.filter((f) => {
      const slug = f.slug
      const isIndex = slug === "index"
      const isHidden = f.frontmatter?.hide === true
      return !isIndex && !isHidden
    })

    // 3. Ordenar por fecha
    const sortedPages = pages.sort((a, b) => {
      const dateA = a.dates?.created ?? new Date(0)
      const dateB = b.dates?.created ?? new Date(0)
      return dateB.getTime() - dateA.getTime()
    })

    // 4. Tomar las 4 últimas
    const recentPages = sortedPages.slice(0, 4)

    if (recentPages.length === 0) {
      return null
    }

    return (
      <div class={classNames(displayClass, "recent-notes-container")}>
        <h3 style={{ marginTop: "2rem", marginBottom: "1rem" }}> Últimas Actualizaciones</h3>
        <div class="card-grid">
          {recentPages.map((page) => (
            <a href={`/${page.slug}`} class="card">
              <h3>{page.frontmatter?.title ?? "Sin Título"}</h3>
              <p>
                {page.frontmatter?.description ?? "Haz clic para leer más..."}
              </p>
            </a>
          ))}
        </div>
      </div>
    )
  }

  return RecentCards
}) satisfies QuartzComponentConstructor
