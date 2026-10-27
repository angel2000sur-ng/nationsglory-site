// Une entrée par semaine, au format date ISO. Chaque envoi hebdomadaire complète cette liste.
const weeklyRatings = {
  '2025-10-19': [
    { name: 'France', flag: '🇫🇷', score: '33,5 / 100', reward: '26 834 $', architecture: '10,5 / 30', activity: '5 / 5', management: '8 / 15', economy: '0 / 20', military: '10 / 15', unesco: '0 / 15' },
    { name: 'Croatie', flag: '🇭🇷', score: '27,5 / 100', reward: '22 028 $', architecture: '13,5 / 30', activity: '5 / 5', management: '8 / 15', economy: '0 / 20', military: '1 / 15', unesco: '0 / 15' },
    { name: 'Empire Italien', flag: '🇮🇹', score: '24,5 / 100', reward: '19 625 $', architecture: '10,5 / 30', activity: '5 / 5', management: '5 / 15', economy: '0 / 20', military: '4 / 15', unesco: '0 / 15' }
  ]
};
let weekOffset = 0;
const firstWeek = Date.UTC(2025, 9, 19);
const rows = document.querySelector('#rows');
const empty = document.querySelector('#empty');
const weekKey = () => new Date(firstWeek + weekOffset * 7 * 86400000).toISOString().slice(0, 10);
const safe = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll(String.fromCharCode(34), '&quot;');
function renderRatings() {
  const list = weeklyRatings[weekKey()] || [];
  rows.innerHTML = list.map((country, index) => '<div class="row" style="--accent:' + ['#42d398','#f26c73','#b250da','#32b9dc','#8975e9'][index % 5] + '">' +
    '<span class="rank">' + (index + 1) + '</span>' +
    '<span class="country"><span class="flag">' + country.flag + '</span><span><b>' + safe(country.name) + '</b><small>Récompense : ' + safe(country.reward) + '</small></span></span>' +
    '<span class="score">' + safe(country.score) + '</span></div>' +
    '<details class="rating-details"><summary>Voir le détail des notes</summary><div class="criteria">' +
    '<span>🏛️ Architecture <b>' + safe(country.architecture) + '</b></span><span>👥 Activité <b>' + safe(country.activity) + '</b></span>' +
    '<span>🤝 Gestion <b>' + safe(country.management) + '</b></span><span>💰 Économie <b>' + safe(country.economy) + '</b></span>' +
    '<span>⚔️ Militaire <b>' + safe(country.military) + '</b></span><span>🏆 UNESCO <b>' + safe(country.unesco) + '</b></span></div></details>').join('');
  empty.hidden = list.length > 0;
  const summary = document.querySelector('#weekSummary');
  if (summary) summary.hidden = list.length === 0;
}
function updateWeek() {
  const date = new Date(firstWeek + weekOffset * 7 * 86400000);
  document.querySelector('#weekDate').textContent = 'Semaine du ' + date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
  renderRatings();
}
document.querySelector('#prev').addEventListener('click', () => { if (weekOffset > 0) { weekOffset--; updateWeek(); } });
document.querySelector('#next').addEventListener('click', () => { weekOffset++; updateWeek(); });
renderRatings();
function route() { const target = ['accueil','notations','wiki'].includes((location.hash || '#accueil').slice(1)) ? (location.hash || '#accueil').slice(1) : 'accueil'; document.querySelectorAll('.page').forEach(page => page.classList.toggle('active', page.id === 'page-' + target)); document.querySelectorAll('[data-nav]').forEach(link => link.classList.toggle('selected', link.dataset.nav === target)); document.querySelector('header nav').classList.remove('open'); window.scrollTo(0, 0); }
window.addEventListener('hashchange', route); route();
document.querySelector('.menu').addEventListener('click', () => document.querySelector('header nav').classList.toggle('open'));
let category = 'tout'; const wikiSearch = document.querySelector('#wikiSearch');
function filterArticles() { const query = wikiSearch.value.trim().toLocaleLowerCase('fr'); let count = 0; document.querySelectorAll('.article').forEach(article => { article.hidden = !(category === 'tout' || article.dataset.cat === category) || !article.innerText.toLocaleLowerCase('fr').includes(query); if (!article.hidden) count++; }); document.querySelector('#noArticles').hidden = !!count; document.querySelector('#articleCount').textContent = String(count).padStart(2, '0') + ' ARTICLE' + (count > 1 ? 'S' : ''); }
document.querySelectorAll('.cat').forEach(button => button.addEventListener('click', () => { document.querySelector('.cat.active').classList.remove('active'); button.classList.add('active'); category = button.dataset.cat; filterArticles(); }));
wikiSearch.addEventListener('input', filterArticles);
document.querySelectorAll('.expand').forEach(button => button.addEventListener('click', () => button.closest('.article').classList.toggle('open')));
