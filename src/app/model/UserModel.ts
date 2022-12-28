import { AddressModel } from './AddressModel';
import { AuthorizationModel } from './AuthorizationModel';

export class UserModel {

  id: number = 0;
  name: string = '';
  apelido:string = "";
  authorization: AuthorizationModel = new AuthorizationModel();
  contact: string = '';
  addresses: AddressModel[] = [];

  constructor() {}
}
