import { Component } from '@angular/core';
import { ExperienceCard } from 'src/app/interfaces/experience-card.interface';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {

  experiences: ExperienceCard[] = [
    {
      date_charge: 'Septiembre — Octubre 2023',
      charge: 'Full-Stack Developer',
      company: 'FICCT - UAGRM',
      dir_company: '#',
      description: 'Lideré el diseño y la implementación de la página web de la carrera de Ingeniería Informática, creando una plataforma atractiva y fácil de navegar para estudiantes y personal académico. Gestioné el despliegue exitoso de la pagina web en un servidor fedora, garantizando una infraestructura sólida y segura.',
      habilities: [
        'Laravel',
        'Tailwind',
        'Livewire',
        'PostgreSql',
        'Fedora',
        'PHP',
        'JavaScript',
      ],
    },
    {
      date_charge: 'Junio — Julio 2023',
      charge: 'Full-Stack Developer',
      company: 'Cheese House Restaurant',
      dir_company: 'https://cheesehouse.com.bo/',
      description: ' Dirigí el desarrollo de un sistema web integral que incorpora funcionalidades esenciales de ventas, compras, control de inventario y generación de informes. Coordiné el despliegue exitoso del sistema en servidores Ubuntu, asegurando un entorno seguro y confiable. Configuré y optimicé el servidor para garantizar el rendimiento y la disponibilidad continua de la plataforma.',
      habilities: [
        'Laravel',
        'Tailwind',
        'Livewire',
        'PostgreSql',
        'Ubuntu',
        'PHP',
        'JavaScript',
      ],
    },
    {
      date_charge: 'Marzo — julio 2023',
      charge: 'Backend Developer',
      company: 'Gobernación de Santa Cruz',
      dir_company: '#',
      description: 'Realicé un análisis exhaustivo de los requisitos funcionales y técnicos de la Oficina Virtual, identificando las necesidades específicas de la Dirección de Turismo y Cultura. Colaboré estrechamente con el equipo para comprender los procesos y objetivos clave, lo que permitió definir una estrategia sólida de desarrollo backend. Diseñé y desarrollé la arquitectura de backend, utilizando tecnologías modernas para garantizar un funcionamiento eficiente y seguro del sitio web.',
      habilities: [
        'NestJS',
        'MongoDB',
        'PostgreSql',
        'Typescript',
        'JavaScript',
      ],
    },
    {
      date_charge: 'Julio — Diciembre 2022',
      charge: 'Full-Stack Developer',
      company: 'Escuela de Ingenieria - UAGRM',
      dir_company: 'https://ei-uagrm.edu.bo/',
      description: 'Realicé un análisis detallado de los requisitos de la institución, lo que incluyó la identificación de necesidades específicas en áreas académicas, flujo de trabajo, contabilidad, inventario y gestión documental. Coordiné el despliegue exitoso del sistema en servidores Ubuntu, asegurando un entorno seguro y disponible.',
      habilities: [
        'Laravel',
        'Tailwind',
        'Livewire',
        'PostgreSql',
        'Ubuntu',
        'PHP',
        'JavaScript',
      ],
    },
  ];

}
