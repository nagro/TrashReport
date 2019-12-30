/* tslint:disable */

declare var Object: any;
export interface BacInterface {
  "coordonnees"?: any;
  "capacite"?: number;
  "frequence_de_remplissage"?: number;
  "etat_de_remplissage"?: string;
  "url_last_img"?: string;
  "id"?: number;
}

export class Bac implements BacInterface {
  "coordonnees": any;
  "capacite": number;
  "frequence_de_remplissage": number;
  "etat_de_remplissage": string;
  "url_last_img": string;
  "id": number;
  constructor(data?: BacInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Bac`.
   */
  public static getModelName() {
    return "Bac";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Bac for dynamic purposes.
  **/
  public static factory(data: BacInterface): Bac{
    return new Bac(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Bac',
      plural: 'Bacs',
      path: 'Bacs',
      idName: 'id',
      properties: {
        "coordonnees": {
          name: 'coordonnees',
          type: 'any'
        },
        "capacite": {
          name: 'capacite',
          type: 'number'
        },
        "frequence_de_remplissage": {
          name: 'frequence_de_remplissage',
          type: 'number'
        },
        "etat_de_remplissage": {
          name: 'etat_de_remplissage',
          type: 'string'
        },
        "url_last_img": {
          name: 'url_last_img',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
