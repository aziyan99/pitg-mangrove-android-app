export class CoreState {

    public readonly dataId: string;
    public readonly predictedClass: string;
  
    constructor() {
      // set initial state
      this.dataId = '';
      this.predictedClass = '';
    }
  }