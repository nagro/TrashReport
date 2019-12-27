/* tslint:disable */

declare var Object: any;
export interface RegistreInterface {
  "id"?: number;
  "id_utilisateur": number;
  "id_bac"?: number;
  "heure"?: Date;
}

export class Registre implements RegistreInterface {
  "id": number;
  "id_utilisateur": number;
  "id_bac": number;
  "heure": Date;
  constructor(data?: RegistreInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Registre`.
   */
  public static getModelName() {
    return "Registre";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Registre for dynamic purposes.
  **/
  public static factory(data: RegistreInterface): Registre{
    return new Registre(data);
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
      name: 'Registre',
      plural: 'Registres',
      path: 'Registres',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "id_utilisateur": {
          name: 'id_utilisateur',
          type: 'number'
        },
        "id_bac": {
          name: 'id_bac',
          type: 'number'
        },
        "heure": {
          name: 'heure',
          type: 'Date'
        },
      },
      relations: {
      }
    }
  }
}
