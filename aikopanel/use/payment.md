# Payment

## Payment plugin

You can refer to the payment plugin in the app/Payments/ directory to develop your own plugin module. After putting it in app/Payments/, it will be automatically loaded and configured in the background.

## FAQ

Q: Cannot receive payment after setting up Cloudflare?

A: After adding payment configuration, a random notification address will be generated. Please configure Cloudflare to allow requests for this notification address path.
