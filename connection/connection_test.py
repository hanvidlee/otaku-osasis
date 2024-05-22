import boto3

s3_client = boto3.client('s3')
print(s3_client)

try:
    signed_url = 