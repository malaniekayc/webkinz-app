import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { UserInfo } from './user-info-http.model';

@Injectable()
@Component({
  selector: 'wk-user-info-http',
  templateUrl: './user-info-http.component.html',
  styleUrls: ['./user-info-http.component.css']
})
export class UserInfoHttpComponent implements OnInit {
  userInfo: UserInfo | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log("Sending GET request")
    this.getUserInfo();
    console.log("Registering showUserInfo as a subscriber")
    this.showUserInfo();
  }

  getUserInfo() {
    return this.http.get<UserInfo>('https://webkins-app-mkc-default-rtdb.firebaseio.com/my-info.json');
  }

  showUserInfo() {
    this.getUserInfo().subscribe((data: UserInfo) => {
      console.table(data);
      this.userInfo = data;
    });
  }

}
