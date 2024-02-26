class Coder {
   constructor(
      public readonly name: string,
      private music: string,
      public age: number,
      protected lang: string = "TypeScript"
   ) {
      this.name = name
      this.music = music
      this.age = age
      this.lang = lang
   }
}

const Rushabh = new Coder("Rushabh", "Rock", 21)