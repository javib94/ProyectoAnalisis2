# Proyecto AyD2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
``` 
# Api
-----------------------
## Dirección del servidor para la Api
Colocar la dirección actual del API REST
```
https://github.com/Caceres-Joseph/AyD2_Proyecto/blob/master/src/components/modules/direccion.js
```

## Registro - Post
```
 /registro
```
### Envío
```json
{
  "apellido": "Apellido",
  "correo": "Correo",
  "nombre": "Nombre",
  "password": "Passowrd"
}
```
### Respuesta
Registro exitoso
```json
{
  "respuesta": 1
}
```
Registro fallido
```json
{
  "respuesta": 0
}
```
-----------------------
## Login - Post
```
 /login
```
### Envío
```json
{
  "correo": "Apellido", 
  "password": "Passowrd"
}
```
### Respuesta
Registro exitoso
```json
{
  "respuesta": 1,
  "idUsuario":32
}
```
Registro fallido
```json
{
  "respuesta": 0
}
```

-----------------------
## Saldo - Post
```
 /saldo
```
### Envío
```json
{
  "idUsuario": 32,  
}
```
### Respuesta 
```json
{
  "saldo": 32.23, 
}
``` 
-----------------------
## Acreditar - Post
```
 /acreditar
```
### Envío
```json
{
  "monto": 23.43,  
  "idUsuario":32
}
```
### Respuesta
Acreditación exitosa
```json
{
  "respuesta": 1, 
}
```
Acreditación fallida
```json
{
  "respuesta": 0
}
```

-----------------------
## Debitar - Post
```
 /debitar
```
### Envío
```json
{
  "monto": 23.43,  
  "idUsuario":32
}
```
### Respuesta
Debito exitoso
```json
{
  "respuesta": 1, 
}
```
Debito fallido
```json
{
  "respuesta": 0
}
```
-----------------------
## Cuentas - Post
Nota: No devolver las cuentas ya asociadas ni la propia
```
 /cuentas_no_asociadas
``` 
### Envío
```json
{
  "idUsuario":32
}
```
### Respuesta

```json
{
  "cuentas": [
    {
      "correo":"Pedro",
      "idUsuario":12
    },
    {
      "correo":"Pepe",
      "idUsuario":1
    },
    {
      "correo":"Juan",
      "idUsuario":43
    }
  ]
}
```
-----------------------
## Asociar Cuenta - Post
```
 /asociar_cuenta
``` 
### Envío
```json
{
  "idUsuario":32,
  "idSocio":34
}
```

### Respuesta
Se asoció exitosamente
```json
{
  "respuesta": 1, 
}
```
No se asoció
```json
{
  "respuesta": 0
}
```

-----------------------
## Cuentas Asociadas - Post
```
 /cuentas_asociadas
``` 
### Envío
```json
{
  "idUsuario":32
}
```

### Respuesta
```json
{
  "cuentas": [
    {
      "correo":"Pedro",
      "idUsuario":12
    },
    {
      "correo":"Pepe",
      "idUsuario":1
    },
    {
      "correo":"Juan",
      "idUsuario":43
    }
  ]
}
```


-----------------------
## Transferir monto - Post
```
 /transferir
``` 
### Envío
```json
{
  "idUsuario":32,
  "monto":34.32,
  "idSocio":34
}
```

### Respuesta
Operación exitosa
```json
{
  "respuesta": 1, 
}
```
Falló la operación
```json
{
  "respuesta": 0
}
```


-----------------------
## Eliminar Cuenta - Post
```
 /eliminar_cuenta
``` 
### Envío
```json
{
  "idUsuario":32
}
```

### Respuesta
Operación exitosa
```json
{
  "respuesta": 1, 
}
```
Falló la operación
```json
{
  "respuesta": 0
}
```
