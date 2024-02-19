import {Injectable} from '@angular/core';
import {Profile} from "../interfaces/profile";
import {LoginService} from "./api/login.service";
import {LogoutService} from "./api/logout.service";
import {RegisterService} from "./api/register.service";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private login_service: LoginService,
    private logout_service: LogoutService,
    private register_service: RegisterService,
  ) {
  }

  register(user: Profile) {
    let account = this.get_user();
    if (account.registered) return;
    let account_string = ProfileService.make_string(user);
    localStorage.setItem('account', account_string);
  }

  logout() {
    localStorage.setItem('account', 'false');
    return;
  }

  get_user(): Profile {
    if (localStorage.getItem('account') != null) {
      let profile = localStorage.getItem('account')!.split(';');
      if (profile[0] == 'true') {
        return {
          registered: true,
          username: profile[1],
          email: profile[2],
        };
      } else return {registered: false};
    } else return {registered: false};
  }


  static make_string(user: Profile): string {
    let result = ""
    if (user.registered) result += 'true;';
    else result += 'false;';

    result += user.username + ";" + user.email;
    return result;
  }
}
