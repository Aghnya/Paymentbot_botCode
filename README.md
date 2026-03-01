This is the bot side code of the Payment Telegram Bot I made. 
What the bot does is whenever a user sends /start it sends the user two options .
According the plan the user wants, the user selects an option.
The bot sends the selected option to the backend and payment link is generated in the backend according to the option selected .
Then the bot sends the payment link to the user.
The user pays.
In backend the payment is verified and bot sends the required material as per the plan which the user chose.
Even if the bot crashes before sending the required material after payment is done, then when the bot turns back on it will send the materials to the people whose payments were successful but service was not delivered.
