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
  listaItens : Item[] = []

  addItem(){
    console.log(this.descricao_produto, `<->`, this.valor_unitario)

    //INSTANCIA DA CLASSE ITEM PASSANDO OS PARAMETROS DO CONSTRUTOR
    //let item = new Item(this.descricao_produto, this.valor_unitario)

    //INSTANCIA DA CLASSE ITEM (CRIANDO O OBJETO item)
    let item = new Item()
    //ARMENGO NAO FAZER
    item.idProduto = this.listaItens.length + 1
    item.descricaoProduto = this.descricao_produto
    item.valorUnitario = this.valor_unitario

    //ADICIONANDO OBJETO item AO ARRAY listaItens
    this.listaItens.push(item)

    //LIMPANDO AS PROPRIEDADES DA CLASSE
    this.descricao_produto = ''
    this.valor_unitario = 0.0


  }

  btnLimpar(){
    this.descricao_produto = ''
    this.valor_unitario = 0.0
  }

  
}
