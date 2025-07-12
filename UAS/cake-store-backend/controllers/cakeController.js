import db from '../models/db.js';

export const getCakes = (_, res) => {
  db.query('SELECT * FROM cakes', (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

export const createCake = (req, res) => {
  const { name, price, stock } = req.body;
  db.query('INSERT INTO cakes (name, price, stock) VALUES (?, ?, ?)', [name, price, stock], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Cake added' });
  });
};

export const updateCake = (req, res) => {
  const { id } = req.params;
  const { name, price, stock } = req.body;
  db.query('UPDATE cakes SET name=?, price=?, stock=? WHERE id=?', [name, price, stock, id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Cake updated' });
  });
};

export const deleteCake = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM cakes WHERE id=?', [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Cake deleted' });
  });
};
