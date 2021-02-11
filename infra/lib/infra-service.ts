import * as core from "@aws-cdk/core";
import { Bucket, BlockPublicAccess } from '@aws-cdk/aws-s3';
import { BucketDeployment, Source, CacheControl } from '@aws-cdk/aws-s3-deployment';
import { OriginAccessIdentity, CloudFrontWebDistribution } from '@aws-cdk/aws-cloudfront';

export class MovieAppInfraService extends core.Construct {
  constructor(scope: core.Construct, id: string) {
    super(scope, id);

    // Prepare Storybook Deployment bucket
    const storybookBucket = new Bucket(this, 'movie-app-storybook', {
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      removalPolicy: core.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      websiteIndexDocument: 'index.html',
    });

    new core.CfnOutput(this, '_Storybook-Bucket_', { value: storybookBucket.bucketName });

    // Prepare Movie App Deployment bucket
    const movieAppBucket = new Bucket(this, 'movie-app-webapp', {
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      removalPolicy: core.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      websiteIndexDocument: 'index.html',
    });

    new core.CfnOutput(this, '_WebApp-Bucket_', { value: movieAppBucket.bucketName });

    // Prepare Storybook Cloudfront OAI
    const storybookOAI = new OriginAccessIdentity(this, 'storybook-oai', { 
      comment: 'Storybook OAI'
    });

    // Allow read to Storybook Cloudfront OAI
    storybookBucket.grantRead(storybookOAI);

    // Prepare Movie App Cloudfront OAI
    const movieAppOAI = new OriginAccessIdentity(this, 'movieapp-oai', { 
      comment: 'MovieApp OAI'
    });

    // Allow read to Movie App Cloudfront OAI
    movieAppBucket.grantRead(movieAppOAI);

    // Prepare Storybook Cloudfront distro
    const storybookDistro = new CloudFrontWebDistribution(this, 'storybook-cf-distro', {
      originConfigs: [{
        behaviors: [{ isDefaultBehavior: true }],
        s3OriginSource: {
          s3BucketSource: storybookBucket,
          originAccessIdentity: storybookOAI,
        },
      }],
      errorConfigurations: [{
        errorCode: 404,
        responseCode: 200,
        responsePagePath: '/index.html'
      }],
    });

    new core.CfnOutput(this, '_Storybook-Distro-Id_', { value: storybookDistro.distributionId });
    new core.CfnOutput(this, '_Storybook-Distro-Domain-Name_', { value: storybookDistro.distributionDomainName });

    // Prepare Movie App Cloudfront distro
    const movieAppDistro = new CloudFrontWebDistribution(this, 'movie-app-cf-distro', {
      originConfigs: [{
        behaviors: [{ isDefaultBehavior: true }],
        s3OriginSource: {
          s3BucketSource: movieAppBucket,
          originAccessIdentity: movieAppOAI,
        },
      }],
      errorConfigurations: [{
        errorCode: 404,
        responseCode: 200,
        responsePagePath: '/index.html'
      }],
    });

    new core.CfnOutput(this, '_WebApp-Distro-Id_', { value: movieAppDistro.distributionId });
    new core.CfnOutput(this, '_WepApp-Distro-Domain-Name_', { value: movieAppDistro.distributionDomainName });

    // Deploy Storybook Build Contents
    new BucketDeployment(this, 'StorybookOtherFiles', {
      sources: [Source.asset('../packages/components/dist/', { exclude: ['index.html'] })],
      destinationBucket: storybookBucket,
      cacheControl: [CacheControl.fromString('max-age=31536000,public,immutable')],
      prune: false,
    });

    new BucketDeployment(this, 'StorybookIndexFile', {
      sources: [Source.asset('../packages/components/dist/', { exclude: ['*', '!index.html'] })],
      destinationBucket: storybookBucket,
      cacheControl: [CacheControl.fromString('max-age=0,no-cache,no-store,must-revalidate')],
      prune: false,
      distribution: storybookDistro, // Invalidate the Cloudfront Cache
      distributionPaths: ['/*'],
    });

    // Deploy Movie App Build Contents
    new BucketDeployment(this, 'WebAppOtherFiles', {
      sources: [Source.asset('../packages/webapp/dist/', { exclude: ['index.html'] })],
      destinationBucket: movieAppBucket,
      cacheControl: [CacheControl.fromString('max-age=31536000,public,immutable')],
      prune: false,
    });

    new BucketDeployment(this, 'WebAppIndexFile', {
      sources: [Source.asset('../packages/webapp/dist/', { exclude: ['*', '!index.html'] })],
      destinationBucket: movieAppBucket,
      cacheControl: [CacheControl.fromString('max-age=0,no-cache,no-store,must-revalidate')],
      prune: false,
      distribution: movieAppDistro, // Invalidate the Cloudfront Cache
      distributionPaths: ['/*'],
    });
  }
}