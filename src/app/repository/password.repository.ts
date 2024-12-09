import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of } from "rxjs";
import { PasswordResource } from "../domain/resource/password.resource";
import { PasswordDto } from "../domain/dto/password.dto";
import { Password } from "../domain/password";

@Injectable({providedIn: 'root'})
export class PasswordRepository {

  constructor(private http: HttpClient) {}

  public generatePassword(dto: PasswordDto): Observable<Password> {
    return this.http.post<any>('api/generate-password', dto)
    .pipe(
      map((resource: PasswordResource) => new Password(resource)),
      catchError((error) => {
        if (error.message) {
          alert(error.message)
        } else {
          alert('Ocorreu um erro. Tente novamente mais tarde.')
        }
        return of({ password: null, creationDate: null } as Password)
      })
    );
  }

  public retrievePasswords(): Observable<Password[]> {
    return this.http.get<PasswordResource[]>('api/password-history').pipe(
      map((resources: PasswordResource[]) => resources.map((resource) => new Password(resource))),
      catchError((error) => {
        if (error.message) {
          alert(error.message)
        } else {
          alert('Ocorreu um erro. Tente novamente mais tarde.')
        }
        return of([] as Password[])
      })
    );
  }
}
