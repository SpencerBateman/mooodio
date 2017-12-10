export class User {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  following: [{}];
  followedBy: [{}];

  constructor(username, password, firstName, lastName, following, followedBy) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.following = following;
    this.followedBy = followedBy;
  }
}
