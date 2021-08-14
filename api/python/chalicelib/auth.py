import base64
import boto3
import json
import os
from urllib import request, parse

ssm_client = boto3.client('ssm')

# Helpful resources to understand this code
# https://aws.amazon.com/blogs/mobile/understanding-amazon-cognito-user-pool-oauth-2-0-grants/

app_client_id = os.environ['COGNITO_APP_CLIENT_ID']
app_client_secret_name = os.environ['COGNITO_APP_CLIENT_SSM_SECRET_NAME']
app_client_secret = ssm_client.get_parameter(app_client_secret_name)
auth_grant_type = os.environ['COGNITO_APP_GRANT_TYPE']  # "authorization_code"
redirect_url = os.environ['COGNITO_REDIRECT_URL']
# https://docs.aws.amazon.com/cognito/latest/developerguide/token-endpoint.html
token_url = os.environ['COGNITO_TOKEN_URL']


def retrieve_tokens(code):
    data = {
        "grant_type": auth_grant_type,
        "code": code,
        "client_id": app_client_id,
        "redirect_uri": redirect_url
    }
    data = parse.urlencode(data).encode()

    auth_header = app_client_id + ":" + app_client_secret
    auth_header_encoded = auth_header.encode()
    auth_header_base64 = base64.b64encode(auth_header_encoded)
    headers = {
        'Authorization': 'Basic ' + auth_header_base64.decode("utf-8"),
        'Content-Type': 'application/x-www-form-urlencoded',
    }

    try:
        tokens_request = request.Request(token_url, headers=headers, method="POST", data=data)
        tokens_response = request.urlopen(tokens_request)

        # The JSON returned in the resulting response has the following keys:
        #  id_token – A valid user pool ID token. Note that an ID token is only provided if the openid scope was requested.
        #  access_token – A valid user pool access token.
        #  refresh_token – A valid user pool refresh token. This can be used to retrieve new tokens by sending it through a POST request to https: // AUTH_DOMAIN/oauth2/token, specifying the refresh_token and client_id parameters, and setting the grant_type parameter to “refresh_token“.
        #  expires_in – The length of time ( in seconds) that the provided ID and / or access token(s) are valid for.
        #  token_type – Set to “Bearer“.
        tokens_response_decoded = tokens_response.read().decode()
        tokens_json = json.loads(tokens_response_decoded)
        return tokens_json
    except Exception as e:
        print(e.read().decode())
        return False
