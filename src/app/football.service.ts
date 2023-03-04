import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FootballService {

  constructor(private http:HttpClient) { }

  getlist1() {
    return this.http.get("http://localhost:3000/user1")
  }
  getlist2() {
    return this.http.get("http://localhost:3000/user2")
  }

  getlist3() {
    return this.http.get("http://localhost:3000/user3")
  }
  getlist4() {
    return this.http.get("http://localhost:3000/user4")
  }
  getlist5() {
    return this.http.get("http://localhost:3000/user5")
  }
  getlist6() {
    return this.http.get("http://localhost:3000/user6")
  }
  getlist7() {
    return this.http.get("http://localhost:3000/user7")
  }
  getlist8() {
    return this.http.get("http://localhost:3000/MData")
  }
 }


