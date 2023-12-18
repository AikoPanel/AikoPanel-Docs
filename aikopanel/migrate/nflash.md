## Migration Guide for Nflash Version (v2board mod)

### The migration script will make the following changes to your database:
- Too many to list all

## Environment in aapanel
1. Completely delete the database
```
php artisan db:wipe
```
2. Import the old database <span style="color:red">(Important)</span>
> Import the V2board Nflash database into the current Aiko project

3. Execute the migration command
```
php artisan migratetoaikopanel nflash
```

4. Change the configuration file (v2board.php)
> You need to change the file `config/v2board.php` to `config/aikopanel.php`, which means renaming v2board.php to aikopanel.php, and then enter the admin user with the key as 'done'

5. I will only retain the Plan and User of the package, and most of the data are different from AikoPanel, so I will keep only that much.