import * as cdk from '@aws-cdk/core';
import { MovieAppInfraService } from './infra-service';

export class InfraStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new MovieAppInfraService(this, 'MovieApp');
  }
}
