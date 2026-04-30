export default async function handler(req, res) {
  try {
    const url = req.query.url;

    if (!url) {
      return res.status(400).json({ error: "missing url" });
    }

    const response = await fetch(url);
    const text = await response.text();

    res.status(200).send(text);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
