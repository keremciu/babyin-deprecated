import {Mongo} from 'meteor/mongo';

export const Posts = new Mongo.Collection('posts');
export const Comments = new Mongo.Collection('comments');
export const _colors = new Mongo.Collection('_colors');
export const _school = new Mongo.Collection('_school');
export const _classroom = new Mongo.Collection('_classroom');
export const _student = new Mongo.Collection('_student');
export const _family = new Mongo.Collection('_family');
export const _parent = new Mongo.Collection('_parent');
export const _teacher = new Mongo.Collection('_teacher');

// TODO buraya teacher - directors - meals -
