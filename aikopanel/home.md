# Aiko Panel

- Aiko Panel is a private panel for Aiko's staff.
- Aiko Panel is created by [Aiko](https://aikocute.tech).
- Panel Installation Address: [AikoPanelv3](https://github.com/AikoPanel/AikoPanel).
- It uses the Aiko-Server backend [Aiko-Server](https://github.com/AikoPanel/AikoServer) with the AikoPanel type.
- Please note that AikoPanel is not free.

## Changelog of AikoPanel Verison 3

### v3.1.1 - DEV
-  **User IP Connection Management**: Add a feature to manage user IP connections, allowing administrators to view and manage user IP connections.

### v3.1.0
-  **Restructure Online Node Notification System**: Modify the system to notify both admin ID and group admin with custom settings, and to alert user groups.
-  **Add Bot for Daily Online Node Notifications**: Implement a bot that sends daily updates about online nodes, with an option for the admin to edit the timing.
-  **Add Bot for Daily GB Usage Notifications**: Create a bot that reports the amount of GB used each day, with editable timing settings for the admin.
-  **Enhanced Daily GB Usage Notifications**: Include a more detailed bot for reporting daily GB usage, again with admin-editable timing.
-  **Implement Hourly Great Firewall of China (GFW) Checks**: Set up a system to check the GFW status in China every hour.
-  **Support HTML in Notification Messages**: Upgrade the notification system to support HTML content in notices.
-  **Add 'Start' and 'Help' Commands to Telegram Bot**: Introduce these commands to improve user interaction with the Telegram bot.
-  **Resolve Data Display Issue in Shadowrocket**: Fix a bug affecting data display in the Shadowrocket app.
-  **Fix Bugs in ClashPC and V2rayN**: Address and resolve existing issues in ClashPC and V2rayN.
-  **Restructure AppleID Functionality**: Overhaul the current AppleID feature for improved performance and usability.
-  **Add Route for Sing-box App**: Implement a new routing feature for the Sing-box application.
-  **User Page**: Optimize the user interface

### v3.0.9
- Fix bot ( Auto Off Node Comming soon - Now Beta )
- Refactor Database backup
- Refactor GetAppleID
- Add register_ip 
- Show info Coupon
- Fix migrate of v2board v1.7.4
- Add Session Time For admin
- update Frontend
- Update Maintenance mode
- Edit Typo SNI
- Fix null count Appleid

### v3.0.8
- Add filter for number of invited users
- Updated Quantumut X URL for IDAPPLE
- Add function to automatically delete users who have been inactive for more than 30 days (Set deletion time in admin page)
- Optimized database backup command logic
- Add online server statistics bot
- Add Check node Online ( Online , Offline and Turn off when not active )
- Update Admin Page And User Page

### v3.0.7
- hotfix bug 

### v3.0.6
- Remove Min 1 limit When setting up Node Speedlimit
- Statistics on the number of invited people per account and find out who has been invited by this account
- Add Coupon in detal
- Fix bug Trojan node ( WS , GRPC )

### v3.0.5
- Update Auto Change RecordID and IP on AutoDNS
- Add Count Plan ( Current Used / Total Buy Plan)
- Refactor Get Count in Plan User and Plan Admin ( Typo Bug )
- Customer Info for Admin ( client user willl see it )
- Add Option Plan 1 days
- Support Mysql ^8 And MariaDB ^10.7
- Add filter by order code
- Add Node Speed Limit

### v3.0.4
- Fixed the issue with Trojan With transport (WS, GRPC).
- Optimized Rule verification for AutoDNS with Cloudflare.
- Added Flag for Quantumult X.
- Added Custom URL for AppleID.
- Fixed the issue where Vless could not add flags.
- Fixed the issue of duplicate names across apps when admin sets the same node name.
- Edit Info displayed on Shadowrocket APP
- Fix re-arrangement of Node
- Add Add priority IP list when get Subscribe link

### v3.0.3
- Updated the user interface further.
- Fixed issues with supported apps, especially Singbox. Now supporting the beta version.
- Updated Quantumult flag with (&flag=qxping).

### v3.0.2
- Interface optimization
- Daily report updates via Telegram
- Support for 2 Month Plan
- Adding invoice codes on Order Management
- Update service status management with real-time statistics on the panel
- Rule update for Subscribe
- Customizable order completion time
- Displaying information in orders, Expiration when users retrieve the registration link
- Prioritizing the order of Servers
- Addition of account number upon user commission withdrawal requests
- Customizable online data deletion timeframe for expired buttons
- Inclusion of Successful Payments Report
- Implementation of Auto database backup
- Addition of Auto DNS
- Setting user session expiration time
- Support for Vless Reality + XTLS
- Node SpeedLimit feature (in Mbps)
- Method for resetting traffic (daily)
- Manager tool and user limit for Apple ID retrieval
- API optimization when user initiates a node

### AikoPanel v3 - v3.0.1
- Add More Custom path subcribe

### v3.0.1-beta.3
- fix bug admin panel ( Set Plan_Id of user is Null then Error Api subcribe )

### v3.0.1-beta
- Fixed initial basic errors.
