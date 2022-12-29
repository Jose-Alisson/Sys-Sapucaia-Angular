import { AddressModel } from './../../model/AddressModel';
import { AuthorizationModel } from './../../model/AuthorizationModel';
import { UserModel } from './../../model/UserModel';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../../shared/styles/account.component.scss'],
})
export class SignUpComponent implements OnInit {
  output:any = {};

  autho: AuthorizationModel = {
    id: 0,
    user: '',
    password: '',
    typeAuthorization: 'client',
  };

  address: AddressModel = {
    id: 0,
    nameAddress: '',
    cep: '',
    noth: '',
    locality: '',
  };

  user: UserModel = {
    id: 0,
    name: '',
    authorization: this.autho,
    contact: '',
    addresses: [this.address],
    apelido: '',
  };

  confirm = {
    password: '',
    codigo: '',
  };

  exibir = false;

  count = 1;

  textButton = ['Prosseguir', 'Prosseguir', 'Varificar', 'Criar'];

  userForm!: FormGroup;
  apelidoForm!: FormGroup;
  contactForm!: FormGroup;
  addressForm!: FormGroup;

  constructor(private form: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.form.group({
      user: [null, [Validators.required, Validators.minLength(6)]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      cPassword: [null, Validators.required],
    });

    this.apelidoForm = this.form.group({
      nome: [null, [Validators.required, Validators.minLength(4)]],
      apelido: [null, [Validators.required, Validators.minLength(2)]],
    });

    this.contactForm = this.form.group({
      whatsapp: [null, Validators.required],
      code: [null, Validators.required],
    });

    this.addressForm = this.form.group({
      cep: [null],
    });
  }

  voltar() {
    this.updateStep(-1);
  }

  prosseguir() {
    console.log(this.output);
    if (this.count < 4) {
      switch (this.count) {
        case 1:
          this.userOutputValidate()
          if (this.userForm.valid) {
            this.updateStep(1);
          }
          break;
        case 2:
          this.apelidoOutputValidate()
          if (this.apelidoForm.valid) {
            this.updateStep(1);
          }
          break;
        case 3:
          if (this.contactForm.valid) {
            this.updateStep(1);
          }
          break;
        case 4:
          if (this.addressForm.valid) {
            this.updateStep(1);
          }
          break;
        default:
          break;
      }
    }
  }

  updateStep(valor: number) {
    this.count += valor;
    (<HTMLInputElement>document.getElementById('radio-' + this.count)).checked =
      true;
  }

  userOutputValidate() {
    let output = {
      user: '',
      password: '',
      cPassword: '',
    };

    //this.userForm.get('user')?.invalid

    if (this.userForm.get('user')?.errors?.['required']) {
      output.user = 'O usuario não pode ser vazio';
    } else if (this.userForm.get('user')?.errors?.['minlength']?.['actualLength'] < 6 ) {
      output.user = 'Usuario muito curto';
    } else {
      output.user = '';
    }



    if(this.userForm.get('password')?.errors?.['required']){
      output.password = 'A senha não pode ser vazia';
    } else if (this.userForm.get('password')?.errors?.['minlength']?.['actualLength'] < 6 ) {
      output.password = 'Senha muito curto';
    } else {
      output.password = '';
    }



    if (this.userForm.get('cPassword')?.errors?.['required']) {
      output.cPassword = 'A cormfirmação não pode ser vazio';
    } else if (this.confirm.password !== this.autho.password){
      output.cPassword = 'Confirmação diferente da sua senha';
    } else {
      output.cPassword = '';
    }
    this.output = output;
    console.log(this.output)
  }

  apelidoOutputValidate() {
    let output = {
      name: '',
      apelido: '',
    };

    if (this.apelidoForm.get('nome')?.errors?.['required']) {
      output.name = 'O nome não pode ser vazio';
    } else if (this.userForm.get('nome')?.errors?.['minlength']?.['actualLength'] < 4){
      output.name = 'O nome muito curto';
    } else {
      output.name = '';
    }

    if (this.apelidoForm.get('apelido')?.errors?.['required']) {
      output.apelido = 'O apelido não pode ser vazio';
    } else if (this.userForm.get('apelido')?.errors?.['minlength']?.['actualLength'] < 2){
      output.apelido = 'O apelido muito curto';
    } else {
      output.apelido = '';
    }

    this.output = output;
  }
}
