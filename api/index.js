export default async function handler(req, res) {
  try {
    const target = "http://72.62.62.132:80"; // سرور خودت

    const response = await fetch(target, {
      method: req.method,
      headers: req.headers,
      body: req.method !== "GET" ? req.body : undefined
    });

    const data = await response.arrayBuffer();

    res.status(response.status);
    response.headers.forEach((v, k) => res.setHeader(k, v));
    res.send(Buffer.from(data));

  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
