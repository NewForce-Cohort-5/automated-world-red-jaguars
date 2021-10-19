export const navBar = () => {
  return `
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img class="nav-logo" src="images/red_jaguar.png" alt="logo">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="iceland.html">Iceland</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="netherlands.html">Netherlands</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="southafrica.html">South Africa</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="switzerland.html">Switzerland</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  `;
}