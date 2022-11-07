import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from "react";

export interface IChildren {
  children:
  string |
  number |
  boolean |
  ReactElement<any, string |
  JSXElementConstructor<any>> |
  ReactFragment |
  ReactPortal |
  null |
  undefined
}
