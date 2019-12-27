/* tslint:disable */

declare var Object: any;
export interface AgentInterface {
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

export class Agent implements AgentInterface {
  "id": number;
  "nom": string;
  "poste": string;
  "realm": string;
  "username": string;
  "email": string;
  "emailVerified": boolean;
  "password": string;
  accessTokens: any[];
  constructor(data?: AgentInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Agent`.
   */
  public static getModelName() {
    return "Agent";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Agent for dynamic purposes.
  **/
  public static factory(data: AgentInterface): Agent{
    return new Agent(data);
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
      name: 'Agent',
      plural: 'Agents',
      path: 'Agents',
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
