import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTranferenciaComponent{

  @Output() aoTransferir = new EventEmitter<any>();

  destino: number=0;
  valor: number=0;

  transferir(){
    console.log('Solicitada Nova transferencia')
    const valorEmitir = {valor: this.valor, destino: this.destino}
    this.aoTransferir.emit(valorEmitir)
    this.limparCampos()
  }
  limparCampos(){
    this.destino = 0;
    this.valor = 0;
  }
}

