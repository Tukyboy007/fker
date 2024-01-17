export default {
  apiserver:
    process.env.NODE_ENV === "production"
      ? "http://192.168.99.182:8000/ords.alpha"
      : "http://192.168.99.182:8000/ords.alpha",
  apicdnserver:
    process.env.NODE_ENV === "production"
      ? "http://65.109.6.10:9000"
      : "http://65.109.6.10:9000",
  apinodeserver: process.env.NODE_ENV
    ? "http://65.109.6.10:10000/api/v1"
    : "http://65.109.6.10:10000/api/v1",
  socketserver:
    process.env.NODE_ENV === "production"
      ? "http://165.109.6.10:10000"
      : "http://65.109.6.10:10000",
};
