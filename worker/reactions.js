const KEYS = ["cw", "chirp", "nosignal"];

const ORIGINS = [
  "https://anatoly1010.github.io",
  "http://127.0.0.1:4001",
  "http://localhost:4001",
];

const SLUG = /^\/[a-z0-9/._-]{1,120}$/i;

function cors(origin) {
  const allowed = ORIGINS.includes(origin) ? origin : ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Max-Age": "86400",
    "Cache-Control": "no-store",
  };
}

function reply(body, status, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...cors(origin) },
  });
}

function empty() {
  return Object.fromEntries(KEYS.map((k) => [k, 0]));
}

async function read(env, slug) {
  const stored = await env.REACTIONS.get(`c:${slug}`, "json");
  const counts = empty();
  if (stored) {
    for (const k of KEYS) {
      if (Number.isFinite(stored[k])) counts[k] = Math.max(0, Math.trunc(stored[k]));
    }
  }
  return counts;
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors(origin) });
    }

    const url = new URL(request.url);
    const slug = url.searchParams.get("slug") || "";
    if (!SLUG.test(slug)) return reply({ error: "bad slug" }, 400, origin);

    if (request.method === "GET") {
      return reply({ counts: await read(env, slug) }, 200, origin);
    }

    if (request.method === "POST") {
      if (origin && !ORIGINS.includes(origin)) {
        return reply({ error: "bad origin" }, 403, origin);
      }
      const key = url.searchParams.get("key") || "";
      if (!KEYS.includes(key)) return reply({ error: "bad key" }, 400, origin);
      const delta = url.searchParams.get("delta") === "-1" ? -1 : 1;

      const counts = await read(env, slug);
      counts[key] = Math.max(0, counts[key] + delta);
      await env.REACTIONS.put(`c:${slug}`, JSON.stringify(counts));
      return reply({ counts }, 200, origin);
    }

    return reply({ error: "method" }, 405, origin);
  },
};
