export function Pagination() {
  return (
    <nav className="pagination" aria-label="페이지">
      {[1, 2, 3, 4, 5].map((page) => (
        <button className={page === 1 ? "page-button is-current" : "page-button"} key={page} aria-current={page === 1 ? "page" : undefined}>
          {page}
        </button>
      ))}
      <button className="page-button next-page" aria-label="다음 페이지">›</button>
    </nav>
  );
}
