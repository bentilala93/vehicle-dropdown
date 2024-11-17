module.exports = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://bentilala93.github.io');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
  
    next();
  };
  