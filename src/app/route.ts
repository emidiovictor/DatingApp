import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MemeberListComponent } from "./memeber-list/memeber-list.component";
import { MessagesComponent } from "./messages/messages.component";
import { ListComponent } from "./list/list.component";
import { AuthGuard } from "./_guards/auth.guard";

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'members', component: MemeberListComponent, },
      { path: 'messages', component: MessagesComponent },
      { path: 'list', component: ListComponent },
    ]

  },
  { path: 'members', component: MemeberListComponent, canActivate: [AuthGuard] },
  { path: 'messages', component: MessagesComponent },
  { path: 'list', component: ListComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

