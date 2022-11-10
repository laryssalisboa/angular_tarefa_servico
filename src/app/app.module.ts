import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { TemporizadorComponent } from './components/temporizador/temporizador.component';
import { DisciplinasComponent } from './components/disciplinas/disciplinas.component';
import { HomeComponent } from './components/home/home.component';
import { TemporizadorService } from './services/temporizador.service';
import { DisiciplinasService } from './services/disiciplinas.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'temporizador', component: TemporizadorComponent },
      { path: 'disciplinas', component: DisciplinasComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    TemporizadorComponent,
    DisciplinasComponent,
  ],
  bootstrap: [AppComponent],
  providers: [TemporizadorService, DisiciplinasService],
})
export class AppModule {}
