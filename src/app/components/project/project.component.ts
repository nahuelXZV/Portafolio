import { Component } from '@angular/core';
import { ProjectCard } from 'src/app/interfaces/project-card.interface';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
})
export class ProjectComponent {

  projects: ProjectCard[] = [
    {
      title: 'Template NestJS',
      description: 'Template para iniciar un proyecto con NestJS, TypeORM, Postgres, Swagger, Passport, JWT, Docker, Docker Compose, etc.',
      dir_project: 'https://github.com/nahuelXZV/NestJS-Template',
      dir_image: 'assets/projects/nest-template.png',
      habilities: [
        'NestJS',
        'TypeScript',
        'Docker',
        'Docker Compose',
        'PostgreSQL',
      ],
    },
    {
      title: 'API Aplicacion web para eventos',
      description: 'API para una aplicación web para eventos, incluye gestión de usuarios, eventos, asistentes, IA para reconocer invitados en las fotos, etc.',
      dir_project: 'https://github.com/nahuelXZV/Back-Eventos',
      dir_image: 'assets/projects/eventos.png',
      habilities: [
        'NestJS',
        'TypeScript',
        'Amazon Rekognition',
        'Amazon S3',
        'PostgreSQL',
        'Firebase'
      ],
    },
    {
      title: 'API Sistema de seguridad para estadios de fútbol mediante reconocimiento facial',
      description: 'Sistema de seguridad para estadios de fútbol mediante reconocimiento facial, incluye gestión de usuarios, cámaras, estadios, infractores, etc.',
      dir_project: 'https://github.com/nahuelXZV/Back-Seguridad',
      dir_image: 'assets/projects/seguridad.png',
      habilities: [
        'NestJS',
        'TypeScript',
        'Amazon Rekognition',
        'Amazon S3',
        'PostgreSQL',
      ],
    },
    {
      title: 'Sistema de Gestión para una ferretería via email',
      description: 'Sistema de gestión para una ferretería mediante consultas via correo electrónico, incluye gestión de clientes, compra, venta, reportes, etc. ',
      dir_project: 'https://github.com/nahuelXZV/Galba-Email',
      dir_image: 'assets/defer.avif',
      habilities: [
        'Java',
        'Pop3',
        'Smtp',
        'PostgreSQL',
      ],
    },
    {
      title: 'Template NodeJS Microservicios',
      description: 'Template para iniciar un proyecto con NodeJS y Express basado en microservicios, incluye autenticación con JWT.',
      dir_project: 'https://github.com/nahuelXZV/NodeJs-MicroServicios',
      dir_image: 'assets/defer.avif',
      habilities: [
        'NodeJS',
        'Express',
        'PostgreSQL',
        'Microservicios',
      ],
    },
    {
      title: 'Template NodeJS y Express',
      description: 'Template para iniciar un proyecto con NodeJS y Express, incluye autenticación con JWT.',
      dir_project: 'https://github.com/nahuelXZV/NodeJS-Express-Template',
      dir_image: 'assets/defer.avif',
      habilities: [
        'NodeJS',
        'Express',
        'PostgreSQL',
      ],
    },
    {
      title: 'Sistema de Gestión para una veterinaria',
      description: 'Sistema de gestión para una veterinaria, incluye gestión de clientes, compra, venta, mascotas, reportes, etc.',
      dir_project: 'https://github.com/nahuelXZV/Sistema-Veterinaria',
      dir_image: 'assets/defer.avif',
      habilities: [
        'Laravel',
        'Tailwind CSS',
        'Livewire',
        'PostgreSQL',
      ],
    },
  ];
}
