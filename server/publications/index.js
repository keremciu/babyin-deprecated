import posts from './posts';
import _users from './_users';
import _colors from './_colors';
import _school from './_school';
import _classroom from './_classroom';
import _family from './_family';

export default function () {
  _family();
  posts();
  _users();
  _colors();
  _school();
  _classroom();
}
