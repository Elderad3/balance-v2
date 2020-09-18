import { BaseResourceModel } from './base-resource.model';

export class Conta extends BaseResourceModel {
    public nome: string
    public chave: string
    public grupo: string
    public classe: string
    public tipo: string
    public valor: number
    public sistema: string = 'S'
}