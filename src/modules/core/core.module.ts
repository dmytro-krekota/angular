import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [
    HttpModule
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
    };
  }
}
