import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordGeneratorComponent } from './presentation/password-generator/password-generator.component';
import { PasswordHistoryComponent } from './presentation/password-history/password-history.component';


export const routes: Routes = [
  { path: 'generator', component: PasswordGeneratorComponent },
  { path: 'history', component: PasswordHistoryComponent },
  { path: '', redirectTo: '/generator', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
