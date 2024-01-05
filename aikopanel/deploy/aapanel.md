# Deploy AikoPanel

## Env

Minimum For AikoPanel V3 ( v3.1.0+ )
- Core: 1 Core ( AMD 7763 or same )
- Ram: 2GB (With Mysql 8+) or 4GB (With MariaDB 10.7+)
- SSD: 20GB+


|  Environment  |       Version        |
| :-----------: | :------------------: |
|    System     |        Linux         |
|      PHP      |         7.4          |
|   MariaDB     |        10.7+         |
|    MySQL      |         8.0+         |
|     Redis     |         7.0+         |
|     Nginx     |        1.21+         |

There are alternatives to the above environments, for example, nginx you can use caddy

The above environment version numbers are minimum requirements and may be higher than the actual requirements.

## Install

1. Configure aaPanel

- You need to choose how your system is installed in [aaPanel](https://www.aapanel.com/new/download.html#install). Ubuntu 20+ or Centos 7+ is installed here as the system environment.

- Be sure to install aaPanel using Ubuntu 20+ or Centos 7+, other systems may have unknown issues.

2. Install Redis and fileinfo

- aaPanel panel > App Store > PHP 7.4 and click Setting > Install extentions > redis, fileinfo,ioncube to install.

3. Remove prohibited functions

- aaPanel Panel > App Store > PHP 7.4 Click Setting > Disabled functions will be removed from the list.

  - `putenv`
  - `proc_open`
  - `pcntl_alarm`
  - `pcntl_signal`
  - `exec`

4. Add a site

- aaPanel panel > Website > Add site.
  - Fill in the domain name, select the PHP version, and select the database type as MySQL.
  - in Database, and PHP-74 in PHP Verison, and select MySQL in Database Type.

5. Install AikoPanel

- After logging in to the server via SSH, access the site path such as: /www/wwwroot/ Your site domain name.

- The following commands need to be executed in the site directory.

```
chattr -i .user.ini
rm -rf .htaccess 404.html index.html .user.ini .well-known
```

- Execute the command to clone from Github to the current directory.

```
git clone https://github.com/AikoPanel/AikoPanel.git ./
```

- Execute commands to install dependent packages and AikoPanel

```
sh init.sh
```

- Follow the prompts to complete the installation

6. Configure the site directory and pseudo-static

- After adding, edit the added site > Site directory > Running directory Select /public to save.

- After adding, edit the URL of the added site > rewrite and fill in the pseudo-static information.

```
location /downloads {
}

location / {
    try_files $uri $uri/ /index.php$is_args$query_string;
}

location ~ .*\.(js|css)?$
{
    expires      1h;
    error_log off;
    access_log /dev/null;
}

```

7. Configure a scheduled task

- aaPanel Panel > Cron. - In Type of Task, select Shell Script, fill in AikoPanel - in Name of Task, select N Minutes in Period, select N Minutes 1 Minute
  , fill in PHP `php /www/wwwroot/AikoPanel/artisan schedule:run` in Script
  content
- Based on the above information, add a scheduled task that is executed every 1 minute.

8. Start the queue service

- AikoPanel's system relies heavily on the queue service, and the queue service must be started to use AikoPanel normally. The following is a demonstration of the supervisor service in aaPanel to guard the queue service.

- aaPanel Panel > App Store > Tools

- Find the Supervisor to install, and after the installation is completed, click to fill in as follows `Setting > Add Daemon` - In Name, fill in AikoPanel , select www in Run User,
  select Site Directory in Start Command, fill in `php artisan horizon`, fill in 1 in Processes
- After filling in, click Confirm to add and run.

# frequently asked questions

- Q: 500 error
- A: Check the root directory permissions of the site, recursive 755, ensure that the directory has the permission of writable files, it may also be caused by the Redis extension not installed or Redis not followed. You can check the logs under storage/logs to troubleshoot errors, turn on debug mode, and disable anti-cross-site in site settings.
