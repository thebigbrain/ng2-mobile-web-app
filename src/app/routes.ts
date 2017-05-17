import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MicroTrainingComponent } from './pages/micro-training/micro-training.component';
import { VideoLearningComponent } from './pages/video-learning/video-learning.component';
import { VideoListComponent } from './pages/video-list/video-list.component';
import { VideoRecordsComponent } from './pages/video-records/video-records.component';
import { DocumentLearningComponent } from './pages/document-learning/document-learning.component';
import { DocumentListComponent } from './pages/document-list/document-list.component';
import { DocumentRecordsComponent } from './pages/document-records/document-records.component';
import { DocumentStart2learnComponent } from './pages/document-start2learn/document-start2learn.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { ActivityPartyComponent } from './pages/activity-party/activity-party.component';
import { ActivityDistributionComponent } from './pages/activity-distribution/activity-distribution.component';
import { ActivityMallComponent } from './pages/activity-mall/activity-mall.component';

export const appRoutes: Routes = [
    { path: 'microtraining', component: MicroTrainingComponent },
    {
        path: 'video',
        component: VideoLearningComponent,
        children: [
            { path: 'list', component: VideoListComponent },
            { path: 'records', component: VideoRecordsComponent }
        ]
    },
    {
        path: 'document',
        component: DocumentLearningComponent,
        children: [
            { path: 'list', component: DocumentListComponent },
            { path: 'records', component: DocumentRecordsComponent }
        ]
    },
    {
        path: 'document/learning', component: DocumentStart2learnComponent
    },
    { path: 'activity', component: ActivityComponent },
    { path: 'activity/party', component: ActivityPartyComponent },
    { path: 'activity/distribution', component: ActivityDistributionComponent },
    { path: 'activity/mall', component: ActivityMallComponent },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
];
