import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BehaviorSubjectComponent } from './pages/behavior-subject/behavior-subject.component';
import { CombineLatestComponent } from './pages/combine-latest/combine-latest.component';
import { DebounceTimeComponent } from './pages/debounce-time/debounce-time.component';
import { FilterComponent } from './pages/filter/filter.component';
import { ForkJoinComponent } from './pages/fork-join/fork-join.component';
import { IntervalComponent } from './pages/interval/interval.component';
import { MapComponent } from './pages/map/map.component';
import { MergeComponent } from './pages/merge/merge.component';
import { ObservableComponent } from './pages/observable/observable.component';
import { OfComponent } from './pages/of/of.component';
import { PairwiseComponent } from './pages/pairwise/pairwise.component';
import { StartWithComponent } from './pages/start-with/start-with.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { TakeUntilComponent } from './pages/take-until/take-until.component';
import { TakeComponent } from './pages/take/take.component';
import { TapComponent } from './pages/tap/tap.component';
import { WithLatestFromComponent } from './pages/with-latest-from/with-latest-from.component';
import { SwitchMapComponent } from './pages/switch-map/switch-map.component';
import { ExercisesComponent } from './pages/exercises/exercises.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'observable', component: ObservableComponent }, // https://rxjs.dev/api/index/class/Observable
  { path: 'subject', component: SubjectComponent }, // https://rxjs.dev/api/index/class/Subject
  { path: 'behavior-subject', component: BehaviorSubjectComponent }, // https://rxjs.dev/api/index/class/BehaviorSubject

  { path: 'map', component: MapComponent }, // https://rxjs.dev/api/index/function/map
  { path: 'tap', component: TapComponent }, // https://rxjs.dev/api/index/function/tap
  { path: 'filter', component: FilterComponent }, // https://rxjs.dev/api/index/function/filter
  { path: 'take', component: TakeComponent }, // https://rxjs.dev/api/index/function/take
  { path: 'of', component: OfComponent }, // https://rxjs.dev/api/index/function/of
  { path: 'interval', component: IntervalComponent }, // https://rxjs.dev/api/index/function/interval
  { path: 'swart-with', component: StartWithComponent }, // https://rxjs.dev/api/index/function/startWith
  { path: 'debounce-time', component: DebounceTimeComponent }, // https://rxjs.dev/api/index/function/debounceTime
  { path: 'take-until', component: TakeUntilComponent }, // https://rxjs.dev/api/index/function/takeUntil

  { path: 'switch-map', component: SwitchMapComponent }, // https://rxjs.dev/api/index/function/combineLatest
  { path: 'fork-join', component: ForkJoinComponent }, // https://rxjs.dev/api/index/function/forkJoin
  { path: 'combine-latest', component: CombineLatestComponent }, // https://rxjs.dev/api/index/function/combineLatest
  { path: 'merge', component: MergeComponent }, // https://rxjs.dev/api/index/function/merge
  { path: 'with-latest-from', component: WithLatestFromComponent }, // https://rxjs.dev/api/index/function/withLatestFrom
  { path: 'pairwise', component: PairwiseComponent }, // https://rxjs.dev/api/index/function/pairwise

  { path: 'exercises', component: ExercisesComponent },

  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
