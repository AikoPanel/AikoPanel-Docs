# Subscription

This page will tell you some features of AikoPanel to avoid pitfalls

# Subscription cycle

Subscriptions are divided into subscriptions by cycle and by volume. For subscriptions by cycle, the traffic will be reset on the user's expiration date (for example, if the expiration date is May 10, the expiration date is the 10th of each month) or the 1st of each month. For subscriptions by volume, the traffic will not be limited until the traffic is used up. The traffic for the current month can be reset by configuring the reset traffic package and then the user purchases the reset traffic package.

# Subscription discount

The premise of subscription discount is that the user has a valid order within the validity period, and the discount will be calculated based on the order payment amount.

Purchasing the same subscription is a renewal, which will extend the time on the original subscription.

Purchasing different subscriptions is a subscription change. After changing the subscription, if the current subscription still has residual value, it will be converted to 0 loss. The conversion method is as follows:

The conversion method by volume is: 10.000 Đ 10GB uses 5GB and then refunds 5.000 Đ

The conversion method by cycle: 10.000 Đ is used for half a month and then refunds 5.000 Đ

After the change is successful, it will be changed to the new subscription.

# Subscription Clear Traffic

When purchasing a subscription or renewing a subscription, the following situations will trigger the action of clearing traffic

1. It will be triggered when purchasing a one-time (by volume) subscription

2. It will be triggered when converting from a one-time subscription to a recurring subscription

3. The user purchased a reset traffic package

4. It will be triggered when repurchasing after the subscription expires

5. In System Configuration-》Subscription-》, an event to clear traffic is configured

# Subscription Reset Method

Currently, the system has two subscription reset methods, which can be found in System Configuration-》Subscription-》Monthly Traffic Reset Method. You can set the reset method for the package separately.

1. On the 1st of each month: As the name implies, the traffic of valid users will be reset at 0:00 on the 1st of each month.

2. Order date: The order date is actually not the reset date of the user's last order, but the date when the user expires. For example, if the user expires on June 4, the traffic will be reset on the 4th of each month.
3. 3. No reset: It will not be repeated in any case unless the reset event set is triggered.

# FAQ

Q: After purchase, the status is in the activation process
A: Please check whether the scheduled task is available and valid. Many V2Board services rely on scheduled tasks. If you do not configure them, there will be problems with orders or commission distribution.
