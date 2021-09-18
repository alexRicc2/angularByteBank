import { Transferencia } from './../models/transferencia.models';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTranferenciaComponent{

  @Output() aoTransferir = new EventEmitter<any>();

  destino: number=0;
  valor: number=0;

  constructor(private service: TransferenciaService, private router: Router){

  }

  transferir(){
    console.log('Solicitada Nova transferencia')
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino}

    this.service.adicionar(valorEmitir).subscribe(resultado =>{
      console.log(resultado)
      this.limparCampos();
      this.router.navigateByUrl('extrato')
    }, (error) => console.error(error))

  }
  limparCampos(){
    this.destino = 0;
    this.valor = 0;
  }
}

