# Update AikoPanel

## Update Release

- After logging in to the server via SSH, access the site path such as: /www/wwwroot/ Your site domain name.

- The following commands need to be executed in the site directory.

```
./update.sh
```


## Update DEV Verion

- After logging in to the server via SSH, access the site path such as: /www/wwwroot/ Your site domain name.

- The following commands need to be executed in the site directory.

```
./update_dev.sh
```

*Note: Once you upgrade to Dev, you will not be able to return to the Release version. If you return, there may be a Database error, so decide before updating to the DEV version.*