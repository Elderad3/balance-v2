import { Conta } from './conta.model';
import { BaseResourceModel } from './base-resource.model';

export class Dre extends BaseResourceModel {
    public ano: number
    public contas: Conta[]
}