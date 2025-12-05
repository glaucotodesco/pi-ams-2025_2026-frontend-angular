import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// carrega os módulos, suas rotas e componentes correspondentes ao pathname
// para adicionar um novo módulo, adicione um novo objeto ao array
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin-module').then(m => m.AdminModule),
  },
  {
    path: 'coordinator',
    loadChildren: () => 
      import('./modules/coordinator/coordinator-module').then(m => m.CoordinatorModule)
  },
  {
    path: 'teacher',
    loadChildren: () => 
      import('./modules/teacher/teacher-module').then(m => m.TeacherModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
