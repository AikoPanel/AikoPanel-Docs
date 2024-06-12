# Creating a Collaborator Website

## Function Description
- The website allows collaborators to sell on their personal domain and offer collaborator packages, which can generate revenue for them (packages must be approved by the admin).

## Preparation
- Own a personal domain.

## Setup Process

### Step 1: Create a domain pointing to the IP of the node

![AllowDomain](../../image/function/staff/AllowDomain.png)
![AllowSubscribe](../../image/function/staff/AllowSubscribe.png)

**Note: The domain must point to the node's IP, and each domain should be separated by a comma.**

### Step 2: Create a website on the node
- Add a new site on WebAdmin (aapanel) with the same path as the main domain. Do not create an additional database, and enable SSL + URL rewrite as on the main website.
- For example: If the source directory is AikoPanel, set it up as follows:

![NewSite](../../image/function/staff/NewSite.png) 

- Use the collaborator's domain name.

![CustomSite](../../image/function/staff/CustomSite.png)

- After creating, go to the nginx.conf file of the main domain and add the following code (on aapanel, it's in the Rewrite Rules section):

```
set_real_ip_from 103.21.244.0/22;
set_real_ip_from 103.22.200.0/22;
set_real_ip_from 103.31.4.0/22;
set_real_ip_from 104.16.0.0/13;
set_real_ip_from 104.24.0.0/14;
set_real_ip_from 108.162.192.0/18;
set_real_ip_from 131.0.72.0/22;
set_real_ip_from 141.101.64.0/18;
set_real_ip_from 162.158.0.0/15;
set_real_ip_from 172.64.0.0/13;
set_real_ip_from 173.245.48.0/20;
set_real_ip_from 188.114.96.0/20;
set_real_ip_from 190.93.240.0/20;
set_real_ip_from 197.234.240.0/22;
set_real_ip_from 198.41.128.0/17;
set_real_ip_from 2400:cb00::/32;
set_real_ip_from 2606:4700::/32;
set_real_ip_from 2803:f800::/32;
set_real_ip_from 2405:b500::/32;
set_real_ip_from 2405:8100::/32;
set_real_ip_from 2a06:98c0::/29;
set_real_ip_from 2c0f:f248::/32;
real_ip_header CF-Connecting-IP;

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

### Step 3: Create a custom package for the collaborator

![PlanOfStaff](../../image/function/staff/PlanOfStaff.png)

### Step 4: Create a collaborator account
![CreateStaff](../../image/function/staff/CreateStaff.png)
- Enable the collaborator function and select the collaborator package for them.

- Personalize the collaborator's page if desired.
![StaffCustom](../../image/function/staff/StaffCustom.png)

### Step 5: Set up the collaborator's management path
- In the system settings under the security section, fill in the path of the collaborator's website.

![StaffPath](../../image/function/staff/StaffPath.png)

### Step 6: Visit the collaborator's website to check