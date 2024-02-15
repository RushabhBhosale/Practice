import { boolean } from "zod";

let age: number = 24;
if (age < 50) {
   age += 10;
}

let names: string | number = "24"

let array: string[] = ["onwe", "dv"];

let array2: (string | number | boolean)[] = [true, 24, "fef"];

let object: {
   user: string
   age: number
   isAdmin: boolean
   phone?: number
}

object = {
   user: "rushi",
   age: 23,
   isAdmin: false
}

const multiply = (num: number) => {
   return num * 2;
}

let add = (num1: number, num2: number, num3?: number) => {
   return num1 + num2
}

add(2, 3);

type userTypes = {
   user: string;
   age: number;
   phone?:number
}

let typefunc = (user: userTypes) => {
   console.log(user);
}

type myFunc = (a:number, b:string) => void

let write : myFunc = (num, str) => {
   return num + "Times" + str
}

type optFunc = {
   username: string;
   age?: number;
   phone?: number;
   theme: "Dark" | "Light";
}

const userTheme : optFunc = {
   username: "Rushabh",
   theme: "Dark"
}

interface IUser {
   username: string;
   email: string;
   age: number;
}

interface IEmp extends IUser {
   EmpId: number
}

const client : IUser = {
   username: "Rushabh",
   email: "eded",
   age: 23,
}

const employee : IEmp = {
   username: "Rushabh",
   email: "eded",
   age: 23,
   EmpId: 24
}

interface IAuthor {
   id: number;
   name: string
}

interface ICategory {
   id: number;
   title: string
}

interface iPost {
   id: number;
   title: string;
   desc: string;
   extra: IAuthor[] | ICategory[];
}

interface IPostBetter <T> {
   id: number;
   title: string;
   desc: string;
   extra: T[];
}

const test: IPostBetter<String> = {
   id: 23,
   title: "Tile",
   desc: "decss",
   extra: ["djddjk", "f"]   
}

interface IPostEvenBetter <T extends object> {
   id: number;
   title: string;
   desc: string;
   extra: T[];
}

const test2: IPostEvenBetter<IAuthor> = {
   id: 23,
   title: "Tile",
   desc: "decss",
   extra: [{id: 23, name: "ir"}]   
}