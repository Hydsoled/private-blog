import {React} from './react.model';

export class Post {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public image: string,
    public reacts: React,
    public author: string,
    public category: string,
    public createdAt: Date,
    public updatedAt: Date,
  ) {
  }
}
