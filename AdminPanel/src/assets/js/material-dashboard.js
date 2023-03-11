let className = 'g-sidenav-pinned';

function toggleSidenav() {
  if (document.body.classList.contains(className)) {
    document.body.classList.remove(className);
  } else {
    document.body.classList.add(className);
  }
}