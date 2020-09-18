import { Conta } from './conta.model';
import { BaseResourceModel } from './base-resource.model';

export class Balanco2 extends BaseResourceModel {
    public ano: number
    public contas: Conta[]
}