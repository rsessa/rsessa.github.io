---
title: Hello World
draft: false
---
# Está es mi nueva wiki desde el móvil

```mermaid
graph TD
    classDef app fill:none,stroke:#d1b3ff,stroke-width:3px;
    classDef trans fill:none,stroke:#99ff99,stroke-width:3px;
    classDef internet fill:none,stroke:#99d6ff,stroke-width:3px;
    classDef access fill:none,stroke:#ffcc99,stroke-width:3px;

    subgraph Pila_TCPIP
        direction TB
        L4("Capa 4: APLICACIÓN<br>(HTTP, DNS, SMTP...)"):::app
        L3("Capa 3: TRANSPORTE<br>(TCP, UDP)"):::trans
        L2("Capa 2: INTERNET<br>(IP, ICMP, ARP)"):::internet
        L1("Capa 1: ACCESO A LA RED<br>(Ethernet, Wi-Fi, Drivers)"):::access
        
        L4 --> L3
        L3 --> L2
        L2 --> L1
    end
```
