import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { SecaoProjetos } from '../../models/projeto';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [Header, Footer, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  secaoProjetos: SecaoProjetos | null = null;
  selectedExperience: string = 'wmTrading';
  experiences = [
    {
      id: 'wmTrading',
      name: 'WmTrading',
      role: 'Desenvolvedor Full-Stack Jr',
      period: 'Jul 2023 - Jul 2025',
      company: 'WmTrading',
      description: 'O desenvolvimento Back-End foca na criação e manutenção de soluções eficientes no servidor. Envolve a construção de APIs RESTful com Java e Spring Boot, integrando sistemas de forma ágil. Também inclui modelagem de bancos de dados, otimização de consultas SQL e uso de ferramentas como Postman, Docker e Git.'
    },
    {
      id: 'faesa',
      name: 'Faesa',
      role: 'Monitor de Programação',
      period: 'Jul 2023 - Jul 2025',
      company: 'Faesa',
      description: 'Atuei como monitor de programação e participei de projetos de extensão na faculdade.'
    },
    {
      id: 'pessoal',
      name: 'Pessoal',
      role: 'Desenvolvedor',
      period: 'Jul 2023 - Jul 2025',
      company: 'Projetos Pessoais',
      description: 'Desenvolvimento de portfólio, aplicativos Angular e contribuições em projetos open source.'
    }
  ];

  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    this.http.get<SecaoProjetos>('data/projetos.json')
      .subscribe(data => {
        this.secaoProjetos = data;
      });
  }

  selectExperience(expId: string) {
    this.selectedExperience = expId;
  }

  get selectedExp() {
    return this.experiences.find(exp => exp.id === this.selectedExperience);
  }

}
