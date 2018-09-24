import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SearchPage } from '../search/search'
import { AboutPage } from '../about/about';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SearchPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
