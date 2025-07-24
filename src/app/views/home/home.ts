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
      role: 'Estudante',
      period: 'Jan 2022 - Jul 2024',
      company: 'Faesa',
      description: 'Graduado em Análise e Desenvolvimento de Sistemas com duração de 2 anos e meio, onde estudei Java, desenvolvimento responsivo, banco de dados, e práticas de desenvolvimento ágil como Scrum e Kanban. A formação incluiu tanto a teoria quanto a prática de tecnologias essenciais para criação de sistemas eficientes e escaláveis.'
    },
    {
      id: 'pessoal',
      name: 'Pessoal',
      role: 'Desenvolvedor',
      period: 'Jul 2021 - ∞',
      company: 'Projetos Pessoais',
      description: 'Atualmente, continuo meus estudos com foco no desenvolvimento Back-End, explorando C# e aprimorando meu conhecimento em Java com Spring Boot. Além disso, sigo aprofundando meus conhecimentos em bancos de dados, buscando sempre melhorar minha capacidade de criar soluções robustas, escaláveis e eficientes para atender às demandas do mercado de tecnologia.'
    }
  ];

  constructor(private http: HttpClient) { }

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

  openLinkedin() {
    window.open('https://www.linkedin.com/in/murillo-morgado/', '_blank');
  }

  openGitHub() {
    window.open('https://github.com/MurilloMorgado', '_blank');
  }

  abrirLink(link: string | undefined): void {
    if (link) {
      window.open(link, '_blank');
    }
  }

  baixarCurriculo() {
    const pdfUrl = 'curriculoMurillo.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'curriculoMurillo.pdf';
    link.click();
  }


}
