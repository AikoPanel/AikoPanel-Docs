# Public api AikoPanel

## 1. Change SNI (Server Name Indication)

### Prepare

- Sni you want to change

### Perform

Link your current registration and add `&sni=domain.com` to the end of the link.

```
https://aikopanel.com/api/v1/client/subscribe?token={token}&sni=domain.com
```

or

```
https://aikopanel.com/api/v1/client/subscribe?token={token}&flag=sing-box&sni=domain.com
```