const Query = require("./Query");

const q = new Query({host: 'play.nspe.ml', port: 19132});

q.fullStat()
  .then(success => {

    console.log(success);

    return q.basicStat()

  })

  .then(success => {

    console.log(success);

    q.close();

  })
  .catch(err => {

    console.log(err);

  })
