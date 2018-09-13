# node-env-variables-replace-in-file
Node script to replace env variables inside any type of a text file like JSON, HTML etc.

## Example template file
```I want to make it dynamic: {{VARIABLE_NAME}}```

## Example .env file
```VARIABLE_NAME=yay```

## Script usage
```node env-replace.js template.json output.json .env```

## Output file
```I want to make it dynamic: yay```
