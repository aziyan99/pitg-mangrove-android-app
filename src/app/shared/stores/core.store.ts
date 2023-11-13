import { CoreState } from './core.state';
import { Store } from './abstract.store';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class CoreStore extends Store<CoreState> {
  private readonly _prefix: string;
  private readonly DATA_ID = 'dataId';
  private readonly PREDICTED_CLASS = 'predictedClass';
  private readonly IMAGE = 'image';
  private readonly DESCRIPTION = 'description';

  public ready$: Promise<any[]>;

  constructor(private _storage: Storage) {
    super(new CoreState());
    this._prefix = 'shuntassistant';

    // read initial values from storage
    this.ready$ = Promise.all([
      this.initValue(this.DATA_ID),
      this.initValue(this.PREDICTED_CLASS),
      this.initValue(this.IMAGE),
      this.initValue(this.DESCRIPTION),
    ]);
  }

  public setDataId(value: string): Promise<any> {
    return this.setValue(this.DATA_ID, value);
  }

  public removeDataId(): Promise<any> {
    return this.removeValue(this.DATA_ID);
  }

  public setImage(value: string): Promise<any> {
    return this.setValue(this.IMAGE, value);
  }

  public removeImage(): Promise<any> {
    return this.removeValue(this.IMAGE);
  }

  public setDescription(value: string): Promise<any> {
    return this.setValue(this.DESCRIPTION, value);
  }

  public removeDescription(): Promise<any> {
    return this.removeValue(this.DESCRIPTION);
  }

  public setPredictedClass(value: string): Promise<any> {
    return this.setValue(this.PREDICTED_CLASS, value);
  }

  public removePredictedClass(): Promise<any> {
    return this.removeValue(this.PREDICTED_CLASS);
  }

  private initValue(prop: keyof CoreState): Promise<any> {
    const key = `${this._prefix}-${prop}`;
    return this._storage
      .get(key)
      .then((value) => {
        this.setStateValue(prop, value);
        return value;
      })
      .catch((_) => {
        this.setStateValue(prop, undefined);
        return undefined;
      });
  }

  private setValue(prop: keyof CoreState, value: any): Promise<any> {
    this.setStateValue(prop, value);
    const key = `${this._prefix}-${prop}`;
    return this._storage.set(key, value);
  }

  private readValue(prop: keyof CoreState): Promise<any> {
    const key = `${this._prefix}-${prop}`;
    return this._storage.get(key);
  }

  private removeValue(prop: keyof CoreState): Promise<any> {
    this.setStateValue(prop, undefined);
    const key = `${this._prefix}-${prop}`;
    return this._storage.remove(key);
  }

  private setStateValue(prop: keyof CoreState, value: any): void {
    this.state = {
      ...this.state,
      [prop]: value,
    };
  }
}
