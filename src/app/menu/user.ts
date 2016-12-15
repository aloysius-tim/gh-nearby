export class User {
  constructor(private _name:string, private _headline: string, private _latitude: number, private _longitude:number, private _position: string){

  }

  get name(): string {
    return this._name;
  }

  get headline(): string {
    return this._headline;
  }

  get latitude(): number {
    return this._latitude;
  }

  get longitude(): number {
    return this._longitude;
  }

  get position(): string {
    return this._position;
  }
}
