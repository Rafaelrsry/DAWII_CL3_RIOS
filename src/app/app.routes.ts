import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LocationComponent } from './components/location/location.component';
import { TodosComponent } from './components/todos/todos.component';

export const routes: Routes = [



    {
        path: "",
        component: LayoutComponent,
        children: [
          { path: "location", component: LocationComponent },
          { path: "todos", component: TodosComponent},
          { path: "**", redirectTo: "location", pathMatch: "full" } // Redirección desde la raíz hacia /home
        ]
      }
];
