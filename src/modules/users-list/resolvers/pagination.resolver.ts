import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services';
import { ActivatedRouteSnapshot } from '../../../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PaginationResolver {

  constructor(private apiService: ApiService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const page: number = route.queryParams['page'] || 1;
    return this.apiService.fetchPaginationInfo(page);
  }

}
