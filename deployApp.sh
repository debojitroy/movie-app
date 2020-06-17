#!/usr/bin/env bash
# Usage deployApp.sh <folder> <bucket_name> <cloudfront_id>
deploy_folder="$1"
s3_bucket_name="$2"
cloudfront_dist_id="$3"

echo "Deploying app...";

if [ ! $deploy_folder ]; then
echo "Deployment folder cannot be empty."
echo "Usage: deployApp.sh <folder> <bucket_name> <cloudfront_id>"
exit 2;
fi

if [ ! $s3_bucket_name ]; then
echo "S3 Bucket Name cannot be empty."
echo "Usage: deployApp.sh <folder> <bucket_name> <cloudfront_id>"
exit 2;
fi

if [ ! $cloudfront_dist_id ]; then
echo "Cloudfrint Distribution Id cannot be empty."
echo "Usage: deployApp.sh <folder> <bucket_name> <cloudfront_id>"
exit 2;
fi



# Upload all files except index.html to S3 Bucket
# Add 1 year cache as everything is content hashed
aws s3 sync $deploy_folder s3://$s3_bucket_name/ \
  --cache-control max-age=31556952 \
  --acl public-read \
  --exclude index.html

# Upload index.html with no-cache
aws s3 cp $deploy_folder/index.html s3://$s3_bucket_name/index.html \
  --metadata-directive REPLACE \
  --cache-control max-age=0,no-cache,no-store,must-revalidate \
  --content-type text/html \
  --acl public-read

# Invalidate Cloudfront Distribution
aws cloudfront create-invalidation \
  --distribution-id $cloudfront_dist_id \
  --paths /*


echo "Finished deploying app...";
