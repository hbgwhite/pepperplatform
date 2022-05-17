import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { to } from 'await-to-js';
import { lastValueFrom } from 'rxjs';
import { ErrorHandlerService } from './error-handler.service';

const DEFAULT_OPTIONS = { withCredentials: true };
const BASE_URL = 'https://api.plcseedswap.com';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) {}

  public async get<T>(path: string, params?: HttpParams) {
    const [err, response] = await to(
      lastValueFrom(this.http.get<T>(`${BASE_URL}/${path}`, { ...DEFAULT_OPTIONS, params }))
    );

    err && this.errorHandlerService.error(err.message);

    return response;
  }

  public async post<T>(path: string, body: any, params?: HttpParams) {
    const [err, response] = await to(
      lastValueFrom(this.http.post<T>(`${BASE_URL}/${path}`, body, { ...DEFAULT_OPTIONS, params }))
    );

    err && this.errorHandlerService.error(err.message);

    return response;
  }

  public async put<T>(path: string, body: any, params?: HttpParams) {
    const [err, response] = await to(
      lastValueFrom(this.http.put<T>(`${BASE_URL}/${path}`, body, { ...DEFAULT_OPTIONS, params }))
    );

    err && this.errorHandlerService.error(err.message);

    return response;
  }
}
