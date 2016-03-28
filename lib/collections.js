import {Mongo} from 'meteor/mongo';

export const Posts = new Mongo.Collection('posts');
export const Comments = new Mongo.Collection('comments');
export const _colors = new Mongo.Collection('_colors');
export const _preschool = new Mongo.Collection('_preschool');
export const _classroom = new Mongo.Collection('_classroom');
