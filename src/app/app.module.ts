import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { ObservableComponent } from './pages/observable/observable.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { BehaviorSubjectComponent } from './pages/behavior-subject/behavior-subject.component';
import { MapComponent } from './pages/map/map.component';
import { TapComponent } from './pages/tap/tap.component';
import { FilterComponent } from './pages/filter/filter.component';
import { TakeComponent } from './pages/take/take.component';
import { OfComponent } from './pages/of/of.component';
import { IntervalComponent } from './pages/interval/interval.component';
import { StartWithComponent } from './pages/start-with/start-with.component';
import { DebounceTimeComponent } from './pages/debounce-time/debounce-time.component';
import { TakeUntilComponent } from './pages/take-until/take-until.component';
import { SwitchMapComponent } from './pages/switch-map/switch-map.component';
import { CombineLatestComponent } from './pages/combine-latest/combine-latest.component';
import { MergeComponent } from './pages/merge/merge.component';
import { PairwiseComponent } from './pages/pairwise/pairwise.component';
import { ForkJoinComponent } from './pages/fork-join/fork-join.component';
import { WithLatestFromComponent } from './pages/with-latest-from/with-latest-from.component';
import { RouterListComponent } from './components/router-list/router-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ObservableComponent,
    SubjectComponent,
    BehaviorSubjectComponent,
    MapComponent,
    TapComponent,
    FilterComponent,
    TakeComponent,
    OfComponent,
    IntervalComponent,
    StartWithComponent,
    DebounceTimeComponent,
    TakeUntilComponent,
    SwitchMapComponent,
    CombineLatestComponent,
    MergeComponent,
    PairwiseComponent,
    ForkJoinComponent,
    WithLatestFromComponent,
    RouterListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
