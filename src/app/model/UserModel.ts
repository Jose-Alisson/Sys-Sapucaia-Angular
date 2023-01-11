import { AddressModel } from './AddressModel';
import { AuthorizationModel } from './AuthorizationModel';

export class UserModel {
  id: number = 0;
  userName: string = '';
  authori: AuthorizationModel = {
    id: 0,
    user: '',
    password: '',
  };
  contact: string = '';
  addresses: AddressModel[] = [];

  constructor() {}
}
