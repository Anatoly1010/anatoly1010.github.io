# Reactions worker

Stores one JSON blob of counts per post in Cloudflare KV.

Set up from the Cloudflare dashboard (this machine has Node 12 and no npm, so
wrangler will not run here):

1. Storage & Databases → KV → create a namespace named `reactions`.
2. Workers & Pages → create a worker named `reactions` from the Hello World
   template, then *Edit code* and replace it with `reactions.js`.
3. Worker → Settings → Bindings → add a KV namespace binding with the variable
   name `REACTIONS`, pointing at the namespace from step 1. Deploy.

Put the resulting `https://reactions.<subdomain>.workers.dev` URL into
`reactions.endpoint` in `_config.yml`. The panel does not render while that is blank.

`wrangler.toml` is kept for reference and for deploying from a machine with a
current Node; fill in the namespace id there first.

Counts are anonymous and only guarded by the origin allow-list and a browser-local
lock, so a determined visitor can inflate them. Reaction keys live in `KEYS`; changing
them means changing `_includes/reactions.html` too.
