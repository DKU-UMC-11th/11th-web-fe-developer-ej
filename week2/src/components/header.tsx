export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="UMCine 홈">
        <span className="brand-mark" aria-hidden="true">▣</span>
        <span>UMCine</span>
      </a>
      <nav className="main-nav" aria-label="메인 메뉴">
        <a className="active" href="#movies">영화</a>
        <a href="#search">검색</a>
        <a href="#account">내 정보</a>
      </nav>
      <div className="header-actions">
        <button className="icon-button search-button" aria-label="검색">⌕</button>
        <button className="login-button">로그인</button>
      </div>
    </header>
  );
}
