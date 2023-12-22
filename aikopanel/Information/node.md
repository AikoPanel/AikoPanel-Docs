# Node

This article answers some of the questions you need to use AikoPanel to configure nodes.

## Protocols supported by AikoPanel

AikoPanel currently supports the following protocols:

- Shadowsocks
- Vmess
- VLESS
- Trojan
- Hysteria

## Clients that support subscriptions

Automatic subscription ☑️: The UA carried by the client when requesting allows AikoPanel to know the type of client to process.
Automatic subscription: The client requests that AikoPanel cannot recognize the request that needs to carry the parameter specified identification code, such as shadowrocket, please add it after the subscription ❌`&flag=shadowrocket` , the specific identification code can be viewed in the client list.

|    Client    | Shadowsocks | Vmess | VLESS | Trojan | Hysteria | Automatic subscriptions |    Identification code     |
| :----------: | :---------: | :---: | :---: | :----: | :------: | :---------------------: | :------------------------: |
| Shadowrocket |     ✅      |  ✅   |  ✅   |   ✅   |    ✅    |           ✅            |        shadowrocket        |
| Quantumult X |     ✅      |  ✅   |  ❌   |   ✅   |    ❌    |           ✅            | quantumult%20x, quanx-ping |
|    Stash     |     ✅      |  ✅   |  ❌   |   ✅   |    ❌    |           ✅            |           stash            |
|    Clash     |     ✅      |  ✅   |  ❌   |   ✅   |    ❌    |           ✅            |           clash            |
|  Surfboard   |     ✅      |  ✅   |  ❌   |   ✅   |    ❌    |           ✅            |         surfboard          |
|  Kitsunebi   |     ✅      |  ✅   |  ❌   |   ✅   |    ❌    |           ❌            |         kitsunebi          |
|    Surge     |     ✅      |  ✅   |  ❌   |   ✅   |    ❌    |           ✅            |           surge            |
|    Stash     |     ✅      |  ✅   |  ❌   |   ✅   |    ❌    |           ✅            |           stash            |
|   Sing-box   |     ✅      |  ✅   |  ✅   |   ✅   |    ✅    |           ✅            |          sing-box          |

## What is the difference between a connection port and a service port

The connection port is the port used by the user to connect, and the service port is the port used to provide services to the node. Suppose you have a relay server that forwards data from port 1234 of server A to port 4567 of server B, then the user connects to server A and the service is deployed on server B.

## Parent node to child node relationship

Generally, it will only be used in the case of multi-entry single exit (multi-transit single landing).

Parent node The
parent node is used by the server to obtain the node configuration and client connection, assuming that the official server is used, only the node configuration needs to be performed on AikoPanel, and there is no need to configure it additionally on the server side, and the configuration will automatically obtain one-click deployment from AikoPanel.

Child node The
child node inherits the node status of the parent node in order to display the correct node status to the user, and the parameter configuration is only used for client connections and will not interact with the server. The node multiplier synchronizes the parent node.

Transit example Suppose I configure port 443 for the landing end, then I first configure the landing server on the parent node and ensure that it can connect to the landing end, and then we forward the transit port 10443 to the landing port 443, then I only need to copy a child node to change the address to the transit address, and the port to 10443 allows users to connect to the transit.

## Permission groups

The permission group is like a bridge between users and nodes, and when deploying the server, the server will pull the users from the permission group configured by the node. Users also only show nodes that have permissions when subscribing.

## Node status indicator meaning

Blue: Everything is fine with the node
Yellow: The node is available, but the node is not used or is used but no data is reported to AikoPanel Red: The node is unavailable and the node does not get data from AikoPanel

## Routing

In version 1.7.0, we added routing to replace auditing. When the specified rule is matched, it performs the specified action.

For example, if I will block access to example.com or `access` whose domain name contains `example.com`, then when creating a route, fill in the domain name and the action is Forbidden.example.com

After the route is created, you need to configure the node to apply it.
