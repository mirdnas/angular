import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from '../shared/usuario';

interface Event<T = EventTarget> {
  target: T;
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  formUsuario!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm(new Usuario());
  }

  createForm(usuario: Usuario) {
    this.formUsuario = new FormGroup({
      nome           : new FormControl([null, Validators.required]),
      sobrenome      : new FormControl(),
      dataNascimento : new FormControl(),
      celular        : new FormControl(),
      email          : new FormControl(null,[Validators.required, Validators.email]),
      curriculo      : new FormControl(usuario.curriculo)
    })
  }


  fileChangeEvent(e: File[]){
  }

  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log( this.formUsuario.value );

    // Usar o método reset para limpar os controles na tela
    // this.formUsuario.reset(new Usuario());
  }
}
