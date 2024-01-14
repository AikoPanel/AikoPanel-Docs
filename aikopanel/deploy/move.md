# Migrating AikoPanel to a New Server

## Step 1: Backup Data and Configuration

### First, you need to backup AikoPanel's data and configuration.

- Copy the config file from the following directory:

```
{Source Path}/config/aikopanel.php
```

- Copy the .env file from the following directory:

```
{Source Path}/.env
```

## Step 2: Reinstall AikoPanel Following Previous Instructions

### You need to reinstall AikoPanel according to the previous instructions, but you do not need to create a new database and run the init.sh script.

- After git cloning, you need to switch to the master branch and then copy the config file and the .env file you backed up in step 1 into the new directory.

- Then, run the update.sh script to update AikoPanel.
