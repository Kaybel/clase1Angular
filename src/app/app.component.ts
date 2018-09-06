import { Component } from '@angular/core';

@Component({
  // decorador
  // metadatos, datos de datos
  selector: 'app-root',
  // selector es como lo voy a usar en html, controlador
  templateUrl: './app.component.html',
  // direccion relativa o absoluta del html del componente, vista
  styleUrls: ['./app.component.css']
  // css, esta aislado,modelo
})
export class AppComponent {
  // exporta una clase
  // siempre reutilizar
  // componentes tienen clase, le damos caracteristicas a esa clase y luego se exporta cuantas veces quieras
  title = 'laboratoriaMemes';
  memes = [{
    title: 'meme numero 1',
    image: 'https://starecat.com/content/wp-content/uploads/shaved-husky-dog-frontend-backend-explained-comparison.jpg',
    description: 'meme de programacion',
  }, {
    title: 'meme numero 2',
    image: 'https://scontent.fscl7-1.fna.fbcdn.net/v/t1.0-9/41106090_10217779285454277_4455231367835287552_n.jpg?_nc_cat=0&oh=0960b007515b072a8a576c295713b7ac&oe=5BEEB014',
    description: 'meme de programacion',
  }
  ];
  onNewMeme(meme){
    this.memes.push(meme);
  }
}
