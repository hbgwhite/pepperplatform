import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: 'all-accessions',
    loadChildren: () =>
      import('./pages/all-accessions/all-accessions.module').then((m) => m.AllAccessionsModule),
  },
  {
    path: 'changelog',
    loadChildren: () => import('./pages/changelog/changelog.module').then((m) => m.ChangelogModule),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./pages/contact-us/contact-us.module').then((m) => m.ContactUsModule),
  },
  {
    path: 'contribute',
    loadChildren: () =>
      import('./pages/contribute/contribute.module').then((m) => m.ContributeModule),
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/faq/faq.module').then((m) => m.FAQModule),
  },
  {
    path: 'my-accessions',
    loadChildren: () =>
      import('./pages/my-accessions/my-accessions.module').then((m) => m.MyAccessionsModule),
  },
  {
    path: 'privacy-policy',
    loadChildren: () =>
      import('./pages/privacy-policy/privacy-policy.module').then((m) => m.PrivacyPolicyModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'server-stats',
    loadChildren: () =>
      import('./pages/server-stats/server-stats.module').then((m) => m.ServerStatsModule),
  },
  {
    path: 'seed-exchanges',
    loadChildren: () =>
      import('./pages/seed-exchanges/seed-exchanges.module').then((m) => m.SeedExchangesModule),
  },
  {
    path: 'start-exchange',
    loadChildren: () =>
      import('./pages/start-exchange/start-exchange.module').then((m) => m.StartExchangeModule),
  },
  {
    path: 'shipment',
    loadChildren: () => import('./pages/shipment/shipment.module').then((m) => m.ShipmentModule),
  },
  {
    path: 'statistics',
    loadChildren: () =>
      import('./pages/statistics/statistics.module').then((m) => m.StatisticsModule),
  },
  {
    path: 'support-us',
    loadChildren: () =>
      import('./pages/support-us/support-us.module').then((m) => m.SupportUsModule),
  },
  {
    path: 'timeline',
    loadChildren: () => import('./pages/timeline/timeline.module').then((m) => m.TimelineModule),
  },
  {
    path: 'community-guidelines',
    loadChildren: () =>
      import('./pages/community-guidelines/community-guidelines.module').then(
        (m) => m.CommunityGuidelinesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
