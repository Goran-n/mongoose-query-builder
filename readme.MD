## Mongoose Query Builder

Writing mongoose queries whilst allowing optional parameters can be quite problematic for Mongo and Mongoose to handle alone.
Example, you have an HTTP API that accepts multiple query params, one of these params being "HouseNumber" and the other "PostalCode".

Lets assume HouseNumber was never specified in the HTTP request but PostalCode was.

Without MGB your Mongo query look like this
{ "HouseNumber": null, "PostalCode": "ABC DEF" }

With MGB your Mongo query looks like this
{ "PostalCode": "ABC DEF" }

In short, unless you plan on writing an IF statement for each optional query field then MGB is perfect for you!
