## Guide to Migrate V2board Version 1.7.4

### The migration scenario will make the following changes to your database
- Add a table v2_server_vless

## aapanel Environment
1. Clean up the database entirely
```
php artisan db:wipe
```
2. Import the old database <span style="color:red">(Important)</span>
> Import the V2board 1.7.4 database into the current Aiko project

3. Execute the migration command
```
php artisan migratetoaikopanel v2b1.7.4
```

4. Change the configuration file (v2board.php)
> You need to rename the file `config/v2board.php` to `config/aikopanel.php`, which means renaming v2board.php to aikopanel.php and in the admin user, enter the key as "done."