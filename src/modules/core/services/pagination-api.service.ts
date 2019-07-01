import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PaginationApiService {

  constructor(private http: Http) {
  }

  fetchPaginationInfo(page): Observable<any> {
    return this.http.get('https://reqres.in/api/users?page=' + page).pipe(map(response => {
      const json = response.json();
      return {
        total_pages: json.total_pages,
        per_page: json.per_page,
        total: json.total,
        page: json.page,
        users: json.data
      };
    }));
  }
}
