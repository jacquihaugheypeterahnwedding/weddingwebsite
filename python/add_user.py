

import boto3
from botocore.exceptions import NoCredentialsError

# Fill in the necessary details from your AWS account
AWS_ACCESS_KEY_ID = 'AKIASLDJRLXE232CMM45'
AWS_SECRET_ACCESS_KEY = 'LeAWtyx9PdzSOJRT01d0EZXypZhj9wt9+6n1lJsb'
AWS_DEFAULT_REGION = 'us-east-1'
USER_POOL_ID='us-east-1_aQ1IyfFvO'
app_client_id='37j6sep0so4j4v12engntomik2'

# Create an authenticated session using Amazon Cognito
session = boto3.Session(
    aws_access_key_id=AWS_ACCESS_KEY_ID,
    aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
    region_name=AWS_DEFAULT_REGION,
)
cognito_identity_client = session.client('cognito-idp')

username = 'weddinggmail'
password = 'password'
email = 'jacquihaugheypeterahnwedding@gmail.com'

u = cognito_identity_client.admin_create_user(UserPoolId=USER_POOL_ID,
    Username=username,
    UserAttributes=[
        {
            'Name': 'email',
            'Value': email
        },
        {
            'Name': 'email_verified',
            'Value': 'true'
        }
    ],
    ValidationData=[

    ],
    TemporaryPassword=password,
    MessageAction='SUPPRESS'
    )




response = cognito_identity_client.admin_set_user_password(
    UserPoolId=USER_POOL_ID,
    Username=username,
    Password=password,
    Permanent=True
)
print(response)



x = cognito_identity_client.list_users(UserPoolId='us-east-1_aQ1IyfFvO')
users = x['Users']
for user in users:
    print(user['Username'])

