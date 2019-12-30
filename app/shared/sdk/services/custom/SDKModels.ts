/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Utilisateur } from '../../models/Utilisateur';
import { Agent } from '../../models/Agent';
import { Bac } from '../../models/Bac';
import { Registre } from '../../models/Registre';
import { NewTokens } from '../../models/NewTokens';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Utilisateur: Utilisateur,
    Agent: Agent,
    Bac: Bac,
    Registre: Registre,
    NewTokens: NewTokens,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
