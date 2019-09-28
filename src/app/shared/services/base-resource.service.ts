import { APP_API } from './../../app.api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injector } from '@angular/core';

import { BaseResourceModel } from '../models/base-resource.model';

export abstract class BaseResourceService<T extends BaseResourceModel>{

    protected http: HttpClient;

    constructor(protected injector: Injector, protected endpoint: string) {
        this.http = injector.get(HttpClient)
     }

    /**
      * Cria ou salva a entidade
      * @param resource
      */
    salvar(resource: T): Observable<T> {
        if (resource.id != null && resource.id != undefined) {
            return this.http.put<T>(`${APP_API}/${this.endpoint}/${resource.id}`, resource)
                // .pipe(
                //     map(data => this.serializer.fromJson(data) as T)
                // )
        } else {
            return this.http.post<T>(`${APP_API}/${this.endpoint}`, resource )
                // .pipe(
                //     map(data => this.serializer.fromJson(data) as T)
                // )
        }
    }
    /**
     * Lista todos os registros da entidade 
     */
    listar(): Observable<T[]> {
        return this.http.get<T[]>(`${APP_API}/${this.endpoint}`)
            // .pipe(
            //     map((data: any) => this.resumo(data))
            // )
    }

    /**
     * busca a entidade pelo identificador
     * @param id 
     */
    buscarPorId(id: number) {
        return this.http.get(`${APP_API}/${this.endpoint}/${id}`)
            // .pipe(
            //     map((data: any) => this.serializer.fromJson(data) as T)
            // )
    }

    /**
     * Exclui a entidade de acordo com o identificador
     * @param id 
     */
    excluir(id: number) {
        return this.http.delete(`${APP_API}/${this.endpoint}/${id}`)

    }

}