import { Component } from '@angular/core';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private launchNavigator: LaunchNavigator) {}

  onPress() {
    this.launchNavigator.navigate('Toronto, ON')
  .then(
    success => console.log('Launched navigator'),
    error => console.log('Error launching navigator', error)
  );
  }

}
