const input = document.querySelector('#post-search');
const entries = [...document.querySelectorAll('[data-post]')];
input?.addEventListener('input', () => {
  const query = input.value.trim().toLocaleLowerCase();
  let count = 0;
  entries.forEach(entry => {
    const visible = (entry.dataset.search || '').toLocaleLowerCase().includes(query);
    entry.hidden = !visible;
    if (visible) count++;
  });
  document.querySelector('#result-count').textContent = `${count} 篇记录`;
  document.querySelector('#no-results').hidden = count > 0;
});
