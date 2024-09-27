// model file
export class Employee {
    constructor(
      public name: string,
      public email: string,
      public id?: number, // need this to avoid compile error
      public position?: string // need this to avoid compile error
    ) { }
  }
