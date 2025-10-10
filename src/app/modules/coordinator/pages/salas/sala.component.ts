import { Component, Input, OnInit } from '@angular/core';

export interface Lab {
  id: number;
  nome: string;
  tipo: string;
  localizacao: string;
  andar: string;
  capacidade: number;
  itens: string;
  especificacoes: string;
}

@Component({
  selector: 'app-sala',
  standalone: false,
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {

  // 2. Declaração do @Input()
  // ESSENCIAL para que o Storybook possa passar o array mockado de 'labs'
  // e para resolver o erro de tipagem que você estava vendo.
  @Input() labs: Lab[] = [];

  // Outras variáveis de estado (para filtros, paginação, etc.)
  public paginaAtual: number = 1;
  public totalDePaginas: number = 1;
  public filtroAtivo: string = 'Todos';

  constructor() { }

  ngOnInit(): void {
    // Aqui você faria a chamada a um serviço real para buscar os dados,
    // se o componente estivesse sendo usado na aplicação.
    // No Storybook, os dados virão do @Input().
    this.calcularPaginacao(this.labs);
  }

  /**
   * Função de exemplo para processar a paginação ou filtros.
   */
  private calcularPaginacao(data: Lab[]): void {
    // Lógica simples de paginação
    const itensPorPagina = 10;
    this.totalDePaginas = Math.ceil(data.length / itensPorPagina);
  }

  /**
   * Exemplo de função de ação do botão 'Ver Mais'.
   */
  public verDetalhes(lab: Lab): void {
    console.log('Ver detalhes do Lab:', lab.nome);
    // Aqui você implementaria a navegação para a página de detalhes
  }
  
  /**
   * Exemplo de função de ação do botão 'Editar'.
   */
  public editarLab(lab: Lab): void {
    console.log('Editar Lab:', lab.nome);
    // Aqui você implementaria a navegação para o formulário de edição
  }
}