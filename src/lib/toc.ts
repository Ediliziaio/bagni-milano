/**
 * Estrae gli H2 dal corpo HTML di un articolo e vi inietta un id stabile,
 * per costruire l'indice interno e permettere il deep link a una sezione.
 * L'HTML è scritto internamente in src/data/articles.ts: nessun input esterno.
 */
export interface Heading { id: string; text: string }

const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);

/**
 * Le tabelle nel corpo degli articoli sforano il viewport su mobile e generano
 * scorrimento orizzontale dell'intera pagina. Vanno avvolte in un contenitore che
 * scorre per conto proprio: il body non deve mai scorrere di lato.
 */
function wrapTables(html: string): string {
  return html.replace(/<table>([\s\S]*?)<\/table>/g, '<div class="table-scroll"><table>$1</table></div>');
}

export function withToc(html: string): { html: string; headings: Heading[] } {
  const headings: Heading[] = [];
  const seen = new Set<string>();

  const out = html.replace(/<h2>([\s\S]*?)<\/h2>/g, (_m, inner: string) => {
    const text = inner.replace(/<[^>]+>/g, "").trim();
    let id = slugify(text);
    let n = 2;
    while (seen.has(id)) id = `${slugify(text)}-${n++}`;
    seen.add(id);
    headings.push({ id, text });
    return `<h2 id="${id}">${inner}</h2>`;
  });

  return { html: wrapTables(out), headings };
}
