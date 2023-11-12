export class CoreState {
  public readonly dataId: string;
  public readonly predictedClass: string;
  public readonly image: string;
  public readonly description: string;

  constructor() {
    // set initial state
    this.dataId = '';
    this.predictedClass = '';
    this.image = '';
    this.description = '';
  }
}
