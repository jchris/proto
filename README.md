## Generated CouchApp

Install with 

    couchapp push . http://localhost:5984/proto

or (if you have security turned on)

    couchapp push . http://myname:mypass@localhost:5984/proto
  
You can also create this app by running

    couchapp generate proto && cd proto
    couchapp push . http://localhost:5984/proto
