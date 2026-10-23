import AndroidStudio from './AndroidStudio.svg';
import Bootstrap from './Bootstrap.svg';
import C from './C.svg';
import CS from './CS.svg';
import CSS from './CSS.svg';
import Figma from './figma.svg';
import GithubLight from './Github-Light.svg';
import HTML from './HTML.svg';
import JavaLight from './Java-Light.svg';
import JavaScript from './JavaScript.svg';
import MaterialUILight from './MaterialUI-Light.svg';
import MySQL from './MySQL.svg';
import NodeJSLight from './NodeJS-Light.svg';
import NotionLight from './Notion-Light.svg';
import NpmLight from './Npm-Light.svg';
import PostgreSQL from './PostgreSQL.svg';
import Python from './python.svg';
import ReactLight from './React-Light.svg';
import TailwindCSSLight from './TailwindCSS-Light.svg';
import TypeScript from './TypeScript.svg';
import ViteLight from './Vite-Light.svg';

export const techStackIcons = {
  AndroidStudio,
  Bootstrap,
  C,
  CS,
  CSS,
  Figma,
  GithubLight,
  HTML,
  JavaLight,
  JavaScript,
  MaterialUILight,
  MySQL,
  NodeJSLight,
  NotionLight,
  NpmLight,
  PostgreSQL,
  Python,
  ReactLight,
  TailwindCSSLight,
  TypeScript,
  ViteLight
};

export const techStackArray = Object.entries(techStackIcons).map(([name, icon]) => ({
  name,
  icon,
}));

export default techStackIcons;