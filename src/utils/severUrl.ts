import config from "../config.json";

export function serverUrl() {
  const server = config.Server;
  switch (server.type) {
    case "http":
      return `http://${server.ip}:${server.port}`;
    case "ssh":
      return `https://${server.ip}:${server.port}`;
    default:
      return `http://${server.ip}:${server.port}`;
  }
}