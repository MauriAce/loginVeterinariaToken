# loginVeterinariaToken
login 
autenticacion por  tokens
El funcionamiento de JWT 

1: autentica usando credenciales regulares (usuario-contraseña normalmente)
2: Una vez que ya autenticó en el servidor, genera una cadena de caracteres que contiene la token de JWT integrada.
3: Esa token es enviada al cliente
4: La token se almacena en el lado del cliente
5: La token se manda al lado del servidor en cada petición que se realiza.
6: El servidor valida la token y otorga (o no) acceso al recurso que el cliente solicita.
