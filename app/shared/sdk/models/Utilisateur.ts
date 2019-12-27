/* tslint:disable */

declare var Object: any;
export interface UtilisateurInterface {
  "id": number;
  "nom": string;
  "poste"?: string;
  "realm"?: string;
  "username"?: string;
  "email": string;
  "emailVerified"?: boolean;
  "password"?: string;
  accessTokens?: any[];
}

export class Utilisateur implements UtilisateurInterface {
  "id": number;
  "nom": string;
  "poste": string;
  "realm": string;
  "username": string;
  "email": string;
  "emailVerified": boolean;
  "password": string;
  accessTokens: any[];
  constructor(data?: UtilisateurInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Utilisateur`.
   */
  public static getModelName() {
    return "Utilisateur";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Utilisateur for dynamic purposes.
  **/
  public static factory(data: UtilisateurInterface): Utilisateur{
    return new Utilisateur(data);
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
      name: 'Utilisateur',
      plural: 'Utilisateurs',
      path: 'Utilisateurs',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "nom": {
          name: 'nom',
          type: 'string'
        },
        "poste": {
          name: 'poste',
          type: 'string'
        },
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
      }
    }
  }
}
