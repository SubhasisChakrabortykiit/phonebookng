import { Component, OnInit } from '@angular/core';

//var style1 =  " <footer class='text-center bg-light'>" +
//"<hr> <p>Contact Manager App" + "/n" + "built in Training in 2018</p><p>";


@Component({
  selector: 'app-footer',
  template: `
  <footer class="text-center bg-light">
    <hr>
    <p>Contact Manager App built in Training in 2018</p>
    <p>
      <app-nav>    
        <li class="nav-item">
          <a class="nav-link" href="#">Back to Top</a>
        </li>
      </app-nav>
    </p>
    <p>Copyright &copy; 2018</p>
  </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
