## Guide to Migrate V2board Version 1.7.3

### The migration scenario will make the following changes to your database
- Rename the v2_stat_order table to v2_stat
    - Change the `order_amount` field to `order_total`
    - Change the `commission_amount` field to `commission_total`
    - Add a field `paid_count` of type integer that can be null
    - Add a field `paid_total` of type integer that can be null
    - Add a field `register_count` of type integer that can be null
    - Add a field `invite_count` of type integer that can be null
    - Add a field `transfer_used_total` of type string with a length of 32 that can be null

- Add a table v2_log
- Add a table v2_server_hysteria
- Add a table v2_server_vless

## aapanel Environment
1. Clean up the database entirely
```
php artisan db:wipe
```
2. Import the old database <span style="color:red">(Important)</span>
> Import the V2board 1.7.3 database into the current Aiko project

3. Execute the migration command
```
php artisan migratetoaikopanel v2b1.7.3
```

4. Change the configuration file (v2board.php)
> You need to rename the file `config/v2board.php` to `config/aikopanel.php`, which means renaming v2board.php to aikopanel.php and in the admin user, enter the key as "done."