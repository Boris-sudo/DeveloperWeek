import {Injectable} from '@angular/core';
import {Profile} from "../interface/profile";
import {UserRegisterModel} from "../models/api/user-register.model";
import {UserLoginModel} from "../models/api/user-login.model";
import {UserLoginService} from "./api/user-login.service";
import {UserLogoutService} from "./api/user-logout.service";
import {UserRegisterService} from "./api/user-register.service";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private login_service: UserLoginService,
    private logout_service: UserLogoutService,
    private register_service: UserRegisterService,
  ) {
  }

  login(user: UserLoginModel): string {
    let account = this.get_user();

    if (account.registered) return "already registered";

    this.login_service.create(user).subscribe(
      response => {
        let profile:Profile = {
          username: user.username,
          registered: true,
          email: user.email,
          profile_image: "",
        }
      },
      error => {
        return error;
      }
    )
    return "done";
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

  register(user: UserRegisterModel): string {
    let account = this.get_user();
    if (account.registered) return "already registered";

    this.register_service.create(user).subscribe(
      response => {
        let profile: Profile = {
          email: user.email,
          username: user.username,
          registered: true,
          profile_image: "",
        }

        let account_string = ProfileService.make_string(profile);
        localStorage.setItem('account', account_string);
        return "done";
      },
      error => {
        return error;
      }
    )
    return "error";
  }

  logout() {
    localStorage.setItem('account', 'false');
    return;
  }


  static make_string(user: Profile): string {
    let result = ""
    if (user.registered) result += 'true;';
    else result += 'false;';

    result += user.username + ";" + user.email;
    return result;
  }
}
