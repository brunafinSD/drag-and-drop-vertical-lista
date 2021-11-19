export function loadLists() {
    return [
      { 
        title: 'Tarefas', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Estudar Boostrap',
            user: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4KawYWGZDL8L9iMDbYD3k0ZjQ3hMWgY_VXZq62c80_Urka3GZbTEOMT-cyNy5ym53rSg&usqp=CAU'
          },
          {
            id: 2,
            content: 'Atualizar projeto',
            user: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4KawYWGZDL8L9iMDbYD3k0ZjQ3hMWgY_VXZq62c80_Urka3GZbTEOMT-cyNy5ym53rSg&usqp=CAU'
          },
          {
            id: 3,
            content: 'Ler Readme do projeto',
            user: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4KawYWGZDL8L9iMDbYD3k0ZjQ3hMWgY_VXZq62c80_Urka3GZbTEOMT-cyNy5ym53rSg&usqp=CAU'
          },
          {
            id: 4,
            content: 'Testar drag and drop horizontal',
            user: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4KawYWGZDL8L9iMDbYD3k0ZjQ3hMWgY_VXZq62c80_Urka3GZbTEOMT-cyNy5ym53rSg&usqp=CAU'
          },
          {
            id: 5,
            content: 'Testar drag and drop de uma lista para outra',
            user: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4KawYWGZDL8L9iMDbYD3k0ZjQ3hMWgY_VXZq62c80_Urka3GZbTEOMT-cyNy5ym53rSg&usqp=CAU'
          },
        ]
      },
      { 
        title: 'Fazendo', 
        creatable: false,
        cards: [
          {
            id: 6,
            content: 'Estudar Typescript',
            user: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4KawYWGZDL8L9iMDbYD3k0ZjQ3hMWgY_VXZq62c80_Urka3GZbTEOMT-cyNy5ym53rSg&usqp=CAU'
          }
        ]
      },
      { 
        title: 'Pausado', 
        creatable: false,
        cards: [
          {
            id: 7,
            content: 'Chapter IV - ignite',
            user: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4KawYWGZDL8L9iMDbYD3k0ZjQ3hMWgY_VXZq62c80_Urka3GZbTEOMT-cyNy5ym53rSg&usqp=CAU'
          },
          {
            id: 8,
            content: 'Curso de Inglês',
            user: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4KawYWGZDL8L9iMDbYD3k0ZjQ3hMWgY_VXZq62c80_Urka3GZbTEOMT-cyNy5ym53rSg&usqp=CAU'
          },
          {
            id: 9,
            content: 'Curso Figma',
          }
        ]
      },
      { 
        title: 'Concluído', 
        creatable: false,
        done: true,
        cards: [
          {
            id: 10,
            content: 'Estudar Sass',
          },
          {
            id: 12,
            content: 'Organizar pastas',
          },
          {
            id: 13,
            content: 'Clonar projeto quick-start',
          }
        ]
      },
    ];
  }