/* tslint:disable */

declare var Object: any;
export interface NewTokensInterface {
  "id"?: string;
  "ttl"?: number;
  "scopes"?: Array<any>;
  "created"?: Date;
  "userId"?: number;
  "principalType"?: string;
  user?: any;
}

export class NewTokens implements NewTokensInterface {
  "id": string;
  "ttl": number;
  "scopes": Array<any>;
  "created": Date;
  "userId": number;
  "principalType": string;
  user: any;
  constructor(data?: NewTokensInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `NewTokens`.
   */
  public static getModelName() {
    return "NewTokens";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of NewTokens for dynamic purposes.
  **/
  public static factory(data: NewTokensInterface): NewTokens{
    return new NewTokens(data);
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
      name: 'NewTokens',
      plural: 'NewTokens',
      path: 'NewTokens',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "ttl": {
          name: 'ttl',
          type: 'number',
          default: 1209600
        },
        "scopes": {
          name: 'scopes',
          type: 'Array&lt;any&gt;'
        },
        "created": {
          name: 'created',
          type: 'Date'
        },
        "userId": {
          name: 'userId',
          type: 'number'
        },
        "principalType": {
          name: 'principalType',
          type: 'string'
        },
      },
      relations: {
        user: {
          name: 'user',
          type: 'any',
          model: '',
          relationType: 'belongsTo',
                  keyFrom: 'userId',
          keyTo: 'id'
        },
      }
    }
  }
}
