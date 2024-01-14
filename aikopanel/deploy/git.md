# Guide to Git Source Conversion and Configuration Refresh

## Step 1: Convert Git Source
1. Change the Git source URL to the new address:
   ```
   git remote set-url origin https://github.com/wyx2685/v2board
   ```
2. Switch to the master branch:
   ```
   git checkout master
   ```
3. Run the update script:
   ```
   ./update.sh
   ```

## Step 2: Refresh Configuration and Restart the Queue
1. Clear the configuration cache:
   ```
   php artisan config:clear
   ```
2. Create a configuration cache:
   ```
   php artisan config:cache
   ```
3. Finish and restart the queue service:
   ```
   php artisan horizon:terminate
   ``` 

Be sure to follow each step carefully to ensure a smooth conversion process.