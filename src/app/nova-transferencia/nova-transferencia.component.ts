import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  constructor(private service: TransferenciaService) {}

  valor: number;
  destino: number;

  transferir() {
    console.log('Solicitada nova transferencia');

    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    //this.aoTransferir.emit(valorEmitir);

    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampos();
      },
      (error) => console.error(error)
    );

    //this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
