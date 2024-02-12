# Aiko Panel

- Aiko Panel is a private panel for Aiko's staff.
- Aiko Panel is created by [Aiko](https://aikocute.tech).
- Panel Installation Address: [AikoPanelv3](https://github.com/AikoPanel/AikoPanel).
- It uses the Aiko-Server backend [Aiko-Server](https://github.com/AikoPanel/AikoServer) with the AikoPanel type.
- Please note that AikoPanel is not free.

## Demo AikoPanel ( Beta Version )
 
### Admin Website
- [AikoPanel - User](https://aikopanel.com) - Account: `admin@aikopanel.com` - Password: `12345678`
- [AikoPanel - Staff](https://aikopanel.com/ctvaikopanel) - Account: `admin@aikopanel.com` - Password: `12345678`
- [AikoPanel - Admin](https://aikopanel.com/aikopanel) - Account: `admin@aikopanel.com` - Password: `12345678`


### Staff Website
- [AikoPanel - Staff](https://aiko.codes/ctvaikopanel) - Account: `admin@aikopanel.com` - Password: `12345678`
- [AikoPanel - User](https://aiko.codes) - Account: `admin@aikopanel.com` - Password: `12345678`

**Note:** This is a beta version, there may be many errors, if you encounter an error, please create an issue on Github.

## Changelog of AikoPanel Verison 3

### Version 3.3.2 Updates:

- **License Functionality Enhancements**: Improved efficiency in the license management system.
- **Administration Fixes**: Resolved an issue with saving plans in the Admin panel.
- **Multiple Instance License Support**: Implemented a feature to allow license duplication for running multiple instances of AikoPanel on a single VPS.
- **BankID Update for Staff**: Refreshed the BankID information for staff members.
- **Password Reset Improvements**: Streamlined the password reset process for better user experience.
- **Database Backup Feature**: Introduced a new button for easy database backups.
- **User Interface Enhancements**: Conducted optimizations to enhance the user interface.
- **Admin and Staff Page Formatting**: Revamped the layout for both Admin and Staff pages.
- **NameServer Display for Staff**: Added a feature to show NameServer details to staff members.
- **NS Type Optimization**: Refined the functionality related to NS types.
- **Development Phase Completion**: Marked the end of the DEV phase.
- **Telegram Notification Optimization**: Enhanced the efficiency of notifications sent via Telegram.
- **Withdrawal Limit Implementation**: Set restrictions to prevent withdrawals exceeding the available commission.
- **Post-Withdrawal Commission Deduction**: Adjusted the commission deduction process following a withdrawal request.
- **Withdrawal Notification Formatting**: Updated the format of notifications for user withdrawals.
- **Payment Notice Enhancement**: Payment notices now include the staff email if a user is assigned to staff.
- **Configuration Merge**: Integrated Aiko Sing Config into the default configuration.
- **Cloudflare Services Optimization**: Improved the performance of Cloudflare Services.
- **Last Login IP Tracking**: Enhanced the tracking of last login IPs for better security.
- **Auto DNS Improvements**: Optimized the Auto DNS feature for more reliability.
- **Fix for Previous Update Errors**: Addressed parameter errors identified in the last update.
- **Protocol Application Refinement**: Improved the Protocol Application process for smoother operation.
- **Vless Building on Shadowrocket**: Optimized the process for building Vless on Shadowrocket.
- **ServerInfoHandler Enhancements**: Upgraded the ServerInfoHandler for improved performance.
- **Docker Installation Removal**: Removed the Docker installation feature.

### v3.3.1
- **Fix: Telegram Services**: Fixed issues with Telegram Services.
- **Fix: Vless + TLS**: Fixed issues with Vless + TLS.
- **Refactor Key**: Optimized Key functionality.
- **Fix: Save Plan**: Fixed Save Plan issue in Admin.
- **Feat: Duplicate License when having multiple AikoPanel on 1 VPS**: Added functionality to duplicate license when running multiple AikoPanel instances on a single VPS.
- **Refactor And License optimization**: Optimized License functionality.
- **Update bankID for Staff**: Updated bankID for staff.
- **Refactor Reset Password**: Optimized Reset Password functionality.
- **Add Button backup Database**: Added button to backup the database.
- **UI Optimization**: Optimized user interface.
- **Update Format Admin and Staff page**: Updated the format for Admin and Staff page.
- **Add: show NameServer for Staff**: Added functionality to display NameServer for staff.
- **Refactor NS type**: Optimized NS type functionality.
- **Feat: Devoured DEV**: Indicated completion of DEV consumption.
- **Refactor notifyViaTelegram**: Optimized notifyViaTelegram functionality.
- **Add: Withdrawal limit**: If the withdrawal amount is greater than the available commission amount, withdrawal is not permitted.
- **Feat: Deduct commission after withdrawal request**: Commission deducted after a withdrawal request.
- **Format: Edit notification when a user withdraws money**: Edited notification for when a user withdraws money.
- **Notice Payment: Show staff email if user has staff**: Payment notice: If the user has staff, display staff email.
- **Merge Aiko Sing Config to default**: Merged Aiko Sing Config into default.

### v3.3.0
- **Fix: Bug in the Previous Update**: Fix a bug that was present in the previous update.
- **Refactor: Big Update in Staff Page**: Custom Config , Custom Logo , Custom Connection Group , Custom Staff Title , v.v...
- **feat: Backup Database can support send Multi Admin**: Backup Database can support send Multi Admin.

### v3.2.5
- **Fix: Bug in the Previous Update**: Fix a bug that was present in the previous update.
- **feat: Allow (Staff) to sell separate packages**: Allow (Staff) to sell separate packages.
- **Refactor: getPaymentMethod**: Optimize the getPaymentMethod function.
- **Refactor Get Subscribe**: Optimize the getSubscribe function.
- **Refactor ( Group Zalo And Telegram )**: Optimize the ( Group Zalo And Telegram ) function.
- **Feat: Getsubscribe for Staff**: Add the getSubscribe function for staff members.
- **Refactor Pay CallBack**: Optimize the payCallBack function.
- **Update: Vertify Payments is better**: Update the Vertify Payments function.
- **Feat: Personalize the staff page**: Add the ability to personalize the staff page.
- **Add SNI + Fast SNI**: Add SNI + Fast SNI.

### v3.2.4
- **Fix: Vless Protocol**: Fix a bug in the Vless protocol ( VLESS REALITY + VLESS TLS).
- **Fix: Helper Get License**: Fix a bug in the helper get sub_domain for license.
- **Update: Payment For Staff**: Update the payment system for staff members.
- **Fix: safe_mode_enabled**: Fix a bug in the safe_mode_enabled function.
- **Add: Custom staff_title and staff_description**: Add custom staff_title, staff_description, logo, Connection Group
- **Add: When registering via a collaborator's domain, the collaborator's invitation code will be automatically saved and updated**: When registering via a collaborator's domain, the collaborator's invitation code will be automatically saved and updated.
- **Feat: Add Notice on Staff Page**: Add a notice on the staff page.
- **Fix: Show staff_url notice**: Fix a bug in the staff_url notice.
- **Fix: Save DB** Fix a bug in the save DB.


### v3.2.3
- **Fix: Bug in the Previous Update**: Fix a bug that was present in the previous update.

### v3.2.2
- **Refactor License**: Optimize the structure of the License system.
- **Staff Page: Allow Employees to Create New Accounts**: Introduce a feature that enables staff members to create new user accounts.
- **Update - Limit Staff Account Creation**: Update to impose restrictions on the number of accounts staff members can create.
- **Allow Key for Staff**: Implement a unique web key system for staff members.
- **Support Build Web for Staff**: Provide support for building individual web pages for staff members.
- **Refactor Get Subscriptions**: Enhance and optimize the structure of the subscription retrieval system.
- **Fix: Bill Detail Information on Staff Page**: Resolve issues related to detailed billing information on the staff page.
- **Fix: Migration from Nflash to AikoPanel**: Fix issues encountered during the migration process from Nflash to AikoPanel.
- **Add - [Telegram: Payment Reports with Additional Payment Gateways]**: Introduce a new feature for reporting payments through Telegram, incorporating additional payment gateways.
- **Fix - Database Issue from Plan**: Resolve database-related issues originating from the Plan module.

### v3.2.1
- **feat: Display Version during Update**: Display the version during the update process.
- **fix: Fix Configuration Issues on ClashMeta, Clash Verge, and Stash**: Address configuration issues on ClashMeta, Clash Verge, and Stash.
- **feat: Restructure Sing-box**: Restructure the Sing-box and use cache_file as the default configuration.
- **fix: Address Some Minor Bugs from the Previous Update**: Fix some minor bugs that were present in the previous update.

### v3.2.0
- **Fix: email payments success**: Fix: email payments success.
- **Fix: Bug Unblock TàiML**: Fix: bug unblock TàiML.
- **Feature: Display IP**: Show user's IP address on their last login to the website.
- **To Do: Add Payment Callback Error Logging**: Implement logging for payment callback errors.
- **Feature: Added Command (php artisan log:export) to Export Logs**: Introduce a command to export logs.
- **Fix: Address Multiple Potential Transaction Security Issues**: Resolve various potential transaction security problems.
- **Feature: Add Subscription Address to Support [*-*] Expression**: Integrate subscription address functionality to support [*-*] expression.
- **Refactor: ClientController**: Optimize the ClientController.
- **Refactor: Sing-box and Clash Configuration**: Enhance the configuration of Sing-box and Clash.
- **Refactor: ServerInfoHandler**: Improve the ServerInfoHandler.
- **Fix: Overdue on Singbox**: Correct the overdue issue in Singbox.
- **New: Support for Configuring Sing-box**: Enable support for changing Sing-box configuration.

### v3.1.6
- **Restructure Reset Traffic Method**: Allow admin to reset traffic of each user.
- **Fix URL error of sing-box app**: Fix URL error of sing-box app.
- **Only allow install with git**: Only allow install with git to avoid error when install (aaPanel).
- **Fix Hysteria Version 1.0.0**: Fix Hysteria Version 1.0.0.
- **Fix error access to staff page**: Fix error access to staff page.
- **Add auto delete user**: Can auto delete user have plan expired over 60 days and not active and not login to web.
- **Change method report revenue to admin**: Change method report revenue to admin.
- **Add method set new SNI value**: Add method set new SNI value and have update in guide.
- **Add some method custom SNI faster**: Add some method custom SNI faster.
- **Show method when have update about Database**: Show method when have update about Database.
- **Change priority order about sort server**: Change priority order about sort server TLS first.
- **Fix error info display when user update register link**: Fix error info display when user update register link (specifically SNI).
- **Support SNI value default when set SNI by plan**: Support SNI value default when set SNI by plan.
- **Fix host error on V2rayN**: Fix host error on V2rayN.
- **Add notification to Telegram**: Add notification to Telegram when have user plan expired or have traffic over 80%.
- **Fix error storage Ipv6**: Fix error storage Ipv6.
- **Unban `TàiML`**: TàiML has repented and apologized a lot for what he did, so I have unbanned him.

### v3.1.5
- **Support app V2Box**: Support app V2Box.
- **Fix bug update when change SNI**: Fix bug update when change SNI.
- **Fix bug calculate value traffic**: Fix bug calculate value traffic.
- **Fix trojan WS and GRPC**: Fix trojan WS and GRPC on Qx, Loon and Surge.
- **Show count get APPLEID**: Show count get APPLEID.
- **Refactor config Admin Page** Refactor config Admin Page to improve performance and usability.
- **Add Application Page for user**: Add Application Page for user to help user can download their app faster and easier.



### v3.1.4
- **Optimize User Interface**: Optimize the user interface.
- **Refactor config Admin Page**: Refactor config Admin Page to improve performance and usability.
- **Fix bug statistics when deleting users in Admin**: Fix bug statistics when deleting users in Admin.
- **Update support app V2rayNG better**: Update support app V2rayNG better.
- **Support app Streisand**: Support app Streisand.

### v3.1.3
- **Fix Bugs**: Fix bugs in previous version.
- **Refactor SNI Plan**: Refactor SNI Plan to improve performance and usability.
- **Change Struc Traffic**: Optimal traffic structure to improve performance and usability.
- **Add Search Staff**: Add a feature to search for staff so admins can search for their staff.
- **Support Trojan (WS) for Loon, QuantumultX and Surge**: Support Trojan (WS) for Loon, QuantumultX and Surge.

### v3.1.2
- **Fix Bugs**: Fix bugs in previous version.
- **Restructure AutoDNS**: Restructure AutoDNS to improve performance and usability.
- **Restructure Backup Database**: Restructure the database backup command to improve performance and usability.

### v3.1.1
- **User IP Connection Management**: Add a feature to manage user IP connections, allowing administrators to view and manage user IP connections.
- **Add Staff page**: Add Staff page so admins can manage their staff.
- **Bug fix**: Fix bug in previous version.

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
