import { Component } from '@angular/core'
import { ImageGridItemModel } from '@models'

@Component({
  selector: 'app-preparacao-estudos',
  templateUrl: './preparacao-estudos.component.html',
})
export class PreparacaoEstudosComponent {
  taskManagerLogos: ImageGridItemModel[] = [
    {
      image: {
        src: '/assets/images/preparacao/Todoist.png',
        alt: 'todist',
        caption: 'Todist',
      },
      url: 'https://todoist.com/',
    },
    {
      image: {
        src: '/assets/images/preparacao/microsofttodo.png',
        alt: 'microsoft to do',
        caption: 'Microsoft To-Do',
      },
      url: 'https://todo.microsoft.com/tasks/',
    },
    {
      image: {
        src: '/assets/images/preparacao/Pomofocus.png',
        alt: 'pomodoro',
        caption: 'Pomofocus',
      },
      url: 'https://pomofocus.io/',
    },
  ]

  planningLogos: ImageGridItemModel[] = [
    {
      image: {
        src: '/assets/images/preparacao/Notion.png',
        alt: 'notion',
        caption: 'Notion',
      },
      url: 'https://www.notion.so/',
    },
    {
      image: {
        src: '/assets/images/preparacao/Trello.png',
        alt: 'Trello',
        caption: 'Trello',
      },
      url: 'https://trello.com/',
    },
    {
      image: {
        src: '/assets/images/preparacao/Calendar.png',
        alt: 'google calendar',
        caption: 'Google Calendar',
      },
      url: 'https://workspace.google.com/',
    },
    {
      image: {
        src: '/assets/images/preparacao/matrusp.png',
        alt: 'matrusp',
        caption: 'MatrUSP',
      },
      url: 'https://bcc.ime.usp.br/matrusp/',
    },
  ]

  notetakingLogos: ImageGridItemModel[] = [
    {
      image: {
        src: '/assets/images/preparacao/roam.png',
        alt: 'roam research',
        caption: 'Roam Research',
      },
      url: 'https://roamresearch.com/',
    },
    {
      image: {
        src: '/assets/images/preparacao/obsidian.png',
        alt: 'obsidian',
        caption: 'Obsidian',
      },
      url: 'https://obsidian.md/',
    },
    {
      image: {
        src: '/assets/images/preparacao/Pomofocus.png',
        alt: 'onenote',
        caption: 'Onenote',
      },
      url: 'https://www.onenote.com/',
    },
    {
      image: {
        src: '/assets/images/preparacao/Evernote.png',
        alt: 'evernote',
        caption: 'Evernote',
      },
      url: 'https://evernote.com/',
    },
  ]

  otherToolsLogos: ImageGridItemModel[] = [
    {
      image: {
        src: '/assets/images/preparacao/eesc.jpg',
        alt: 'eesc',
        caption: 'EESC Intranet',
      },
      url: 'https://eesc.usp.br/intranet/',
    },
    {
      image: {
        src: '/assets/images/preparacao/meet.png',
        alt: 'meet',
        caption: 'Google Meet',
      },
      url: 'https://apps.google.com/meet/',
    },
    {
      image: {
        src: '/assets/images/preparacao/zoom.png',
        alt: 'zoom',
        caption: 'Zoom',
      },
      url: 'https://zoom.us/',
    },
    {
      image: {
        src: '/assets/images/preparacao/classroom.png',
        alt: 'classroom',
        caption: 'Google Classroom',
      },
      url: 'https://edu.google.com/intl/pt/products/classroom/',
    },
    {
      image: {
        src: '/assets/images/preparacao/edisciplinas.png',
        alt: 'edisciplinas',
        caption: 'Edisciplinas',
      },
      url: 'https://edisciplinas.usp.br/acessar/',
    },
  ]
}
