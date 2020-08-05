export const routes = {
  root: '/',
  login: '/login.html',
  register: '/register.html',
  account: '/account.html',
  leagues: '/leagues.html',
  injuries: '/injuries.html',
  resultsBaseURL: '/results/game-week',
  results: '/results/game-week/:gameWeek.html',
  leagueTable: '/league-table.html',
  teamBase: '/team',
  team: '/team/:teamName.html',
  privacyPolicy: '/privacy-policy.html',
  termsOfUse: '/terms-of-use.html',
  contactUs: '/contact-us.html',
  about: '/about.html',
  dataCenter: '/data-center.html',
};

export const endpoints = {
  account: 'http://localhost:5000/api/auth/account',
  authenticate: 'http://localhost:5000/api/auth/authenticate',
  logout: 'http://localhost:5000/api/auth/logout',
  premierLeagueFixturesCurrent: 'http://localhost:5000/api/football/premier-league/fixtures/current',
  premierLeagueResultsFixturesActiveSeason: 'http://localhost:5000/api/football/premier-league/fixtures',
  premierLeagueCurrentGameWeek: 'http://localhost:5000/api/football/premier-league/current/round',
  premierLeagueLeagueTable: 'http://localhost:5000/api/football/premier-league/league-table',
  premierLeagueTeam: 'http://localhost:5000/api/football/premier-league/team',
};
