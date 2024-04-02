class StringBuilder {
    constructor(value) {
      this.value = value;
    }
  
    padStart(char) {
      this.value = char + this.value;
    }
  
    padEnd(char) {
      this.value = this.value + char;
    }
  
    padBoth(char) {
      this.padStart(char);
      this.padEnd(char);
    }
  
    getValue() {
      return this.value;
    }
  }
  
  const builder = new StringBuilder(".");
  console.log(builder.getValue()); // "."
  builder.padStart("^");
  console.log(builder.getValue()); // "^."
  builder.padEnd("^");
  console.log(builder.getValue()); // "^.^"
  builder.padBoth("=");
  console.log(builder.getValue()); // "=^.^="