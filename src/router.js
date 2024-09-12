import { home } from './pages/home.js';
import { page1 } from './pages/page1.js';
import { page2 } from './pages/page2.js';

const routes = {
  '/': home,
  '/page1': page1,
  '/page2': page2
};

export const navigateTo = (path) =>{
  window.history.pushState({}, path, window.location.origin + path)
  renderPage(path);
};

export const renderPage = (path) => {
  const route = routes[path] || home // default redirect to home
  document.getElementById("root").innerHTML = route();
}

window.addEventListener("popstate", () => {
  renderPage(window.location.pathname);
});

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname || "/"; // "/" defalult
  renderPage(path);
});

document.addEventListener('click', (event) => {
  if (event.target.matches('a[data-link]')) {
    event.preventDefault();
    navigateTo(new URL(event.target.href).pathname);
  }
});
