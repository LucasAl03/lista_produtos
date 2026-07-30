import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from './item';

@Component({
  selector: 'app-lista-produtos',
  imports: [FormsModule],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  descricao_produto? : string
  valor_unitario? : number

  addItem(){
    console.log(this.descricao_produto, `<->`, this.valor_unitario)

    //Instancia da classe item passando os parametros do construtor
    //let item = new Item(this.descricao_produto, this.valor_unitario)

    let item = new Item()
    item.descricaoProduto = this.descricao_produto
    item.valorUnitario = this.valor_unitario

    
  }

  btnLimpar(){

  }
}
