## Creer une nouvelle application angular

Dans le terminal rentrez ces commandes:

`ng new blog-posts` avec le _routeur_ et _`SCSS`_.

`cd blog-posts`

`ng serve -o`

générez 2 composants:

`ng generate component home`

`ng generate component list`

## Ouvrez app routing module

Dans le fichier `/src/app/app-routing.module.ts`, importez les 2 composants créés dans l'étape précédente.

```ts
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component"; // rajoutez cette ligne
import { ListComponent } from "./list/list.component"; // rajoutez cette ligne

const routes: Routes = [
  { path: "", component: HomeComponent }, // rajoutez cette ligne
  { path: "list", component: ListComponent }, // rajoutez cette ligne
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

puis rajoutez une nav-bar dans `/src/app/app.component.html`:

```html
<header>
  <div class="container">
    <a routerLink="/" class="logo">CoolApp</a>
    <nav>
      <ul>
        <li><a href="#" routerLink="/">Home</a></li>
        <li><a href="#" routerLink="/list">List</a></li>
      </ul>
    </nav>
  </div>
</header>

<div class="container">
  <router-outlet></router-outlet>
</div>
```

avec un peu du style dans `/app/styles.scss`:

```css
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");

$primary: rgb(111, 0, 255);

body {
  margin: 0;
  font-family: "Roboto", "sans-serif";
  font-size: 18px;
}

.container {
  width: 80%;
  margin: 0 auto;
}

header {
  background: $primary;
  padding: 1em 0;

  a {
    color: white;
    text-decoration: none;
  }
  a.logo {
    font-weight: bold;
  }

  nav {
    float: right;

    ul {
      list-style-type: none;
      margin: 0;
      display: flex;

      li a {
        padding: 1em;

        &:hover {
          background: darken($primary, 10%);
        }
      }
    }
  }
}

h1 {
  margin-top: 2em;
}
```

## One way Data Binding (binding uni directionnel)

On peut truover 2 types de binding dans cette categorie

### interpolation & Event Binding

`<h1>{{ mainTitle }}</h1>` c'est l'interpolation.

`<span (click)="toggleTitle()">ICI</span>` c'est l'Event Binding.

Dans notre `home.component.html`:

```html
<h1>{{ mainTitle }}</h1>

<div class="home-container">
  <p>On a cliqué <span (click)="toggleTitle()">ICI</span></p>
</div>
```

Et le `home.component.ts`:

```ts
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  isHidden: boolean = false;
  mainTitle: string = "Bonjour !!!";

  constructor() {}

  ngOnInit(): void {
    // document.querySelector('h1').hidden = true;
  }

  toggleTitle() {
    this.isHidden = !this.isHidden;
    document.querySelector("h1").hidden = this.isHidden;
  }
}
```

Et on peut lui rajouter du style dans `home.component.scss`:

```scss
span {
  font-weight: bold;
  background: lightcoral;
  padding: 0.3em 0.8em;
  cursor: pointer;
}

.home-container {
  padding: 3em;
  border: 1px solid lightskyblue;

  input {
    padding: 1em;
    margin-bottom: 2em;
  }
}
```

## Two Way Binding (Binding Bi-Directionnel)

Ce type de Binding en fonctionne qu'avec `FormsModule`, qu'il faut importer dans le `/src/app/app.module.ts`:

```ts
//... les autres imports ...
import { FormsModule } from "@angular/forms"; // l'import du FormsModule

@NgModule({
  declarations: [AppComponent, HomeComponent, ListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // rajoutez cette ligne avec l'import
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

On revient dans notre `home.component.ts` et on definie la variable `name`:

```ts
name: string = "";
```

Et utiliser cette variable dans `home.component.html` ne rajoutant cet élément:

```html
<p>
  <input type="text" [(ngModel)]="name" /><br />
  <strong>Vous avez dit: </strong> {{ name }}
</p>
```

## ng-template ([ngIf] et [ngIfElse]):

```html
<ng-template [ngIf]="name.length > 5" [ngIfElse]="none">
  <p>Le nombre de carctères est <strong>Superieur</strong> à 5.</p>
</ng-template>

<ng-template #none>
  <p>Le nombre de carctères est <strong>Inferieur</strong> à 5.</p>
</ng-template>
```

Ici on utilise property binding `[ngIf]` et on l'attache à l'expression `name.length > 5`.

Si cette expression est `true`, angular va afficher el `html` qui ce trouve dans la balise `ng-template`. Sinon il va appeler le template `none` rattaché à `ngIfElse`.

## Style Binding & Class Binding:

### Style Binding:

le style binding pour une seule property css:

`<p [style.background-color]="name.length > 5 ? 'yellow' : 'lightgray'">`

Et pour plusieurs properites css:

```html
<div
  class="play-container"
  [ngStyle]="{
    'background-color': clickCounter > 4 ? 'yellow' : 'lightgray',
    'border':           clickCounter > 4 ? '4px solid black' : 'none'}
"
></div>
```

Aussi, on peut rattacher `[ngStyle]` à une variable de type objet dans le `component.ts`:

```html
<div [ngStyle]="styleObject">
  <h3>ngStyle avec un objet</h3>
</div>
```

```ts
styleObject: any = {
  "background-color": "lime",
  "font-size": "20px",
  "font-weight": "bold",
};
```

### Class Binding:

Si on veut rajouter ou supprimer des classes définies dans notre `css`, on utilise le class binding:

```html
<span [class.long-name]="name.length > 5">{{ name }}</span>
```

```css
.long-name {
  background-color: lightseagreen;
  border: 4px solid black;
  font-weight: bolder;
  font-style: italic;
}
```

On peut aussi appliquer plusieurs classes avec `[ngClass]`:

```html
<div [ngClass]="setCssClasses()"></div>
```

```ts

setCssClasses() {
    let myCssClasses = {
      'long-name': this.name.length > 5,
      'short-name': this.name.length <= 5
    }
    return myCssClasses;
}

```

## Input (communication parent enfant)

Créez un nouveau component: `ng g c single-post` et un dossier `../app/models`
qui contient un une classe typeScript `blog-post.ts` qui va servir comme type pour les postes:

```ts
export interface BlogPost {
  id: number;
  title: string;
  description: string;
  text: string;
}
```

On rajoute le binding dans le parent (dans notre exemple c'est: `list.component.html`) à la propriété décorée avec `@Input` dans le composant enfant (`single-post.component.html`), ce dernier est injecté dans le parent en utilisant son sélecteur: `<app-single-post></app-single-post>`.

On remarque l'utilisation des directives `ngIf` et `ngFor` dans `list.component.html`:

```html
<div *ngIf="posts">
  <h3>Posts List</h3>
  <ul *ngFor="let postInList of posts">
    <li>
      <app-single-post [aPost]="postInList"></app-single-post>
    </li>
  </ul>
</div>
```

dans le `single-post.html`:

```html
<div>
  <h3>{{ aPost.title }}</h3>
  <p>{{ aPost.description }}</p>
  <p>{{ aPost.text }}</p>
</div>
```

```ts
import { Component, Input, OnInit } from "@angular/core";
import { BlogPost } from "../models/blog-post"; //import du model

@Component({
  selector: "app-single-post",
  templateUrl: "./single-post.component.html",
  styleUrls: ["./single-post.component.scss"],
})
export class SinglePostComponent implements OnInit {
  @Input() // input pour recevoir la valeur qui vient du composant parent
  aPost: BlogPost;

  constructor() {}

  ngOnInit(): void {}
}
```

```ts
import { Component, OnInit } from "@angular/core";
import { BlogPost } from "../models/blog-post";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  posts: BlogPost[] = [
    {
      id: 1,
      title: "Notre Premier article",
      description: "le 1er article de cette édition",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem hic quidem nobis esse perspiciatis omnis nemo dicta quaerat quam, alias soluta? Nobis corporis doloremque facilis, tempora commodi nesciunt dignissimos!",
    },
    {
      id: 2,
      title: "Article 1, suite",
      description: "La suite du 1er article",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem hic quidem nobis esse perspiciatis omnis nemo dicta quaerat quam, alias soluta? Nobis corporis doloremque facilis, tempora commodi nesciunt dignissimos!",
    },
    {
      id: 3,
      title: "Article Externe",
      description: "Article de source Externe",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem hic quidem nobis esse perspiciatis omnis nemo dicta quaerat quam, alias soluta? Nobis corporis doloremque facilis, tempora commodi nesciunt dignissimos!",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
```

## Output

`ng g c create-post`

```html
<h3>Ajouter un nouvel Article</h3>
<div>
  <form action="" [(ngModel)]="newPost">
    <input type="text" name="title" [(ngModel)]="newPost.title" />
    <input type="text" name="description" [(ngModel)]="newPost.description" />
    <input type="textarea" name="" [(ngModel)]="newPost.text" />

    <button (click)="addNewPost(newPost)">Publiez</button>
    <p></p>
  </form>
</div>
```

```ts
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { BlogPost } from "../models/blog-post";

@Component({
  selector: "app-creat-post",
  templateUrl: "./creat-post.component.html",
  styleUrls: ["./creat-post.component.scss"],
})
export class CreatPostComponent implements OnInit {
  newPost: BlogPost;

  @Output()
  createPost = new EventEmitter<BlogPost>();

  constructor() {}

  ngOnInit(): void {}

  addNewPost(post: BlogPost) {
    console.log(post);
    this.newPost = post;
    this.createPost.next(post);
  }
}
```

dans le parent (list `list.component.html`)

```html
<app-creat-post (createPost)="addPost($event)"></app-creat-post>
```

```ts
addPost(post: BlogPost) {
    this.posts.push(post);
  }
```
