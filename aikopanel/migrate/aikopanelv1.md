## Guide to Migrate AikoPanelv1 Version

### The migration scenario will make the following changes to your database
- There are too many changes to list all

**Node: NEED Update into AikoPanelv1 Latest**

## aapanel Environment
1. Clean up the database entirely
```
php artisan db:wipe
```
2. Import the old database <span style="color:red">(Important)</span>
> Import the AikoPanelv1 database into the current Aiko project

3. Execute the migration command
```
php artisan migratetoaikopanel aikopanelv1
```

4. Change the configuration file (v2board.php)
> You need to rename the file `config/v2board.php` to `config/aikopanel.php`, which means renaming v2board.php to aikopanel.php and in the admin user, enter the key as "done."