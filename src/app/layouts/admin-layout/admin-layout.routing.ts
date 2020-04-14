import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: HomeComponent },
    { path: 'account', component: TablesComponent },
    { path: 'transferfunds', component: TablesComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'user', component: UserComponent },
];
