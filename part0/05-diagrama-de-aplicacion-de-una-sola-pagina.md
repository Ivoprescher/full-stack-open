```mermaid
    sequenceDiagram
    participant navegador
    participant servidor

    navegador->>servidor: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate servidor
    servidor-->>navegador: documento HTML
    deactivate servidor

    navegador->>servidor: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate servidor
    servidor-->>navegador: archivo CSS
    deactivate servidor

    navegador->>servidor: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate servidor
    servidor-->>navegador: archivo JavaScript
    deactivate servidor
    Note right of navegador: El navegador empieza a ejecutar el código JavaScript que solicita el JSON al servidor.

    navegador->>servidor: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate servidor
    servidor-->>navegador: archivo JSON
    deactivate servidor

    Note right of navegador: El navegador ejecuta la función callback que muestra las notas.
```
